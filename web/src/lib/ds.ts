/**
 * Convierte el README del design system en una página visual.
 * El HTML que genera Astro a partir del .md se divide por secciones (##) y
 * las tablas de algunas secciones se reemplazan por muestras visuales.
 * Así el contenido sigue saliendo del .md: si cambia una tabla, cambia la muestra.
 */

export interface SeccionDS {
  id: string; // slug sin tildes, para elegir la muestra
  ancla: string; // id real del h2
  titulo: string;
  html: string; // contenido de la sección sin el h2
}

const sinTildes = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const texto = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&#x26;|&amp;/g, '&').trim();

export function dividirSecciones(html: string): { intro: string; secciones: SeccionDS[] } {
  const partes = html.split(/(?=<h2[\s>])/);
  const intro = partes[0].startsWith('<h2') ? '' : partes.shift() ?? '';
  const secciones = partes.map((p) => {
    const m = p.match(/^<h2(?:\s+id="([^"]*)")?[^>]*>([\s\S]*?)<\/h2>/);
    const ancla = m?.[1] ?? '';
    const titulo = texto(m?.[2] ?? '');
    return { id: sinTildes(titulo).replace(/[^a-z0-9]+/g, '-'), ancla, titulo, html: m ? p.slice(m[0].length) : p };
  });
  return { intro: intro.replace(/<h1[\s\S]*?<\/h1>/, ''), secciones };
}

/* ---------- Tablas ---------- */

interface Tabla { cabecera: string[]; filas: string[][] }

function leerTabla(html: string): Tabla {
  const celdas = (fila: string, tag: string) =>
    [...fila.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'g'))].map((m) => m[1].trim());
  const filas = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map((m) => m[1]);
  return { cabecera: celdas(filas[0] ?? '', 'th').map(texto), filas: filas.slice(1).map((f) => celdas(f, 'td')) };
}

function reemplazarTablas(html: string, fn: (t: Tabla) => string | null) {
  return html.replace(/<table>[\s\S]*?<\/table>/g, (t) => fn(leerTabla(t)) ?? t);
}

/* ---------- Color ---------- */

const hexes = (s: string) => [...s.matchAll(/#[0-9a-fA-F]{6}\b/g)].map((m) => m[0].toUpperCase());

function luminancia(hex: string) {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
export function contraste(a: string, b: string) {
  const [x, y] = [luminancia(a), luminancia(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}
const TINTA = '#1B2A23';
const CLARO = '#F5F3EB';
const fmt = (n: number) => n.toFixed(1).replace('.', ',');

function muestraColor(t: Tabla) {
  if (!/token/i.test(t.cabecera[0] ?? '') || !t.filas.some((f) => hexes(f[1] ?? '').length)) return null;
  const items = t.filas
    .map(([nombre, valor, uso]) => {
      const hs = hexes(valor ?? '');
      if (!hs.length) return '';
      const fondo = hs.length > 1 ? `linear-gradient(45deg, ${hs.join(', ')})` : hs[0];
      const base = hs[0];
      const cTinta = contraste(base, TINTA);
      const cClaro = contraste(base, CLARO);
      const textoSobre = cTinta >= cClaro ? TINTA : CLARO;
      const mejor = Math.max(cTinta, cClaro);
      const valorTxt = hs.join(' → ');
      return `<figure class="ds-color">
        <div class="ds-color-chip" style="background:${fondo};color:${textoSobre}">
          ${hs.length === 1 ? `<span class="ds-aa" title="Contraste del texto más legible sobre este color">Aa ${fmt(mejor)}:1</span>` : ''}
        </div>
        <figcaption><b>${texto(nombre ?? '')}</b><code>${valorTxt}</code><span>${uso ?? ''}</span></figcaption>
      </figure>`;
    })
    .join('');
  return `<div class="ds-paleta">${items}</div>`;
}

/* ---------- Tipografía ---------- */

const numero = (s: string) => parseFloat((s.match(/[\d]+(?:[.,]\d+)?/) ?? ['0'])[0].replace(',', '.'));
const familiaCSS = (f: string) => (/fraunces/i.test(f) ? 'var(--serif)' : 'var(--sans)');

function muestraTipografia(t: Tabla) {
  const c0 = sinTildes(t.cabecera[0] ?? '');
  if (c0 === 'rol') {
    return `<div class="ds-familias">${t.filas
      .map(([rol, fam, det]) => {
        const f = texto(fam ?? '');
        const etiqueta = /etiqueta/i.test(rol ?? '');
        return `<figure class="ds-familia ${etiqueta ? 'es-etiqueta' : ''}" style="font-family:${familiaCSS(f)}">
          <div class="ds-aa-grande">${etiqueta ? 'ETIQUETA' : 'Aa'}</div>
          <figcaption><b>${texto(rol ?? '')} · ${f}</b><span>${det ?? ''}</span></figcaption>
        </figure>`;
      })
      .join('')}</div>`;
  }
  if (c0 === 'estilo') {
    return `<div class="ds-escala">${t.filas
      .map(([estilo, fam, tam, inter, peso]) => {
        const f = texto(fam ?? '');
        const px = numero(texto(tam ?? ''));
        const lh = numero(texto(inter ?? '')) || 1.4;
        const w = numero(texto(peso ?? '')) || 400;
        const esEtiqueta = /etiqueta/i.test(estilo ?? '');
        const muestra = esEtiqueta ? 'Etiqueta de sección' : px >= 30 ? 'Terapia a tu ritmo' : 'Encontrá a tu psicólogo y reservá tu primera sesión en minutos.';
        const extra = esEtiqueta ? 'text-transform:uppercase;letter-spacing:.14em;' : f.match(/fraunces/i) ? "font-variation-settings:'SOFT' 60;letter-spacing:-0.02em;" : '';
        return `<div class="ds-escala-fila">
          <div class="ds-escala-meta"><b>${texto(estilo ?? '')}</b><span>${f} · ${texto(tam ?? '')} · ${texto(inter ?? '')} · ${texto(peso ?? '')}</span></div>
          <div class="ds-escala-muestra" style="font-family:${familiaCSS(f)};font-size:${Math.min(px, 72)}px;line-height:${lh};font-weight:${w};${extra}">${muestra}</div>
        </div>`;
      })
      .join('')}</div>`;
  }
  return null;
}

/* ---------- Personas y sesiones ---------- */

const G = {
  paciente: '<circle cx="32" cy="32" r="7" fill="#1E4033"/>',
  terapeuta: '<circle cx="32" cy="32" r="11" fill="#F5C33B" stroke="#1E4033" stroke-width="2.2"/>',
  par: '<circle cx="25" cy="32" r="5.5" fill="#1E4033"/><circle cx="39" cy="32" r="7.5" fill="#9FC9AE" stroke="#1E4033" stroke-width="2"/>',
};
function glifo(nombre: string) {
  const n = sinTildes(nombre);
  let svg = '';
  if (n.startsWith('paciente')) svg = G.paciente;
  else if (n.startsWith('terapeuta')) svg = G.terapeuta;
  else if (n.includes('reservada')) svg = `<circle cx="32" cy="32" r="24" fill="none" stroke="#1E4033" stroke-width="1.8" stroke-dasharray="3 4"/>${G.par}`;
  else if (n.includes('en curso')) svg = `<circle class="ds-late" cx="32" cy="32" r="24" fill="#D6E7DC" stroke="#1E4033" stroke-width="2"/>${G.par}`;
  else if (n.includes('completada')) svg = `<circle cx="32" cy="32" r="24" fill="#D6E7DC" stroke="#1E4033" stroke-width="2"/>${G.par}<circle cx="50" cy="14" r="8" fill="#1E4033"/><path d="M46.5 14.2l2.4 2.4 4.4-4.8" fill="none" stroke="#F5F3EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  else if (n.includes('grupo amplio')) svg = '<path d="M10 34c0-14 12-24 24-23s21 10 20 22-11 21-23 20S10 46 10 34z" fill="none" stroke="#1E4033" stroke-width="1.8" stroke-dasharray="3 4"/><circle cx="24" cy="28" r="3.5" fill="#1E4033"/><circle cx="38" cy="24" r="3.5" fill="#1E4033"/><circle cx="42" cy="38" r="3.5" fill="#1E4033"/><circle cx="26" cy="42" r="3.5" fill="#1E4033"/>';
  else if (n.includes('subgrupo')) svg = '<path d="M14 34c0-11 9-19 19-18s16 8 15 17-9 16-18 15S14 44 14 34z" fill="#D6E7DC" stroke="#1E4033" stroke-width="2"/><circle cx="27" cy="30" r="3.5" fill="#1E4033"/><circle cx="38" cy="34" r="3.5" fill="#1E4033"/><circle cx="29" cy="41" r="3.5" fill="#1E4033"/>';
  return svg ? `<svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">${svg}</svg>` : '';
}
function muestraPersonas(t: Tabla) {
  if (sinTildes(t.cabecera[0] ?? '') !== 'elemento') return null;
  return `<div class="ds-glifos">${t.filas
    .map(([el, rep]) => `<figure class="ds-glifo">${glifo(texto(el ?? ''))}<figcaption><b>${texto(el ?? '')}</b><span>${rep ?? ''}</span></figcaption></figure>`)
    .join('')}</div>`;
}

/* ---------- Formas ---------- */

function muestraFormas(t: Tabla) {
  if (!/token/i.test(t.cabecera[0] ?? '')) return null;
  return `<div class="ds-radios">${t.filas
    .map(([tok, val, uso]) => {
      const px = Math.min(numero(texto(val ?? '')), 60);
      return `<figure class="ds-radio"><div class="ds-radio-caja" style="border-radius:${px}px"></div><figcaption><b>${texto(tok ?? '')}</b><code>${texto(val ?? '')}</code><span>${uso ?? ''}</span></figcaption></figure>`;
    })
    .join('')}</div>`;
}

/* ---------- Movimiento ---------- */

function demoMovimiento(nombre: string) {
  const n = sinTildes(nombre);
  if (n.startsWith('entrada')) return '<div class="ds-mov-entrada"><i></i><i></i><i></i></div>';
  if (n.startsWith('latido')) return '<svg viewBox="0 0 64 64" width="64" height="64"><circle class="ds-late" cx="32" cy="32" r="20" fill="#D6E7DC" stroke="#1E4033" stroke-width="2"/><circle cx="26" cy="32" r="4.5" fill="#1E4033"/><circle cx="38" cy="32" r="6" fill="#9FC9AE" stroke="#1E4033" stroke-width="1.8"/></svg>';
  if (n.startsWith('barras')) return '<span class="ds-barras"><i></i><i></i><i></i><i></i><i></i></span>';
  if (n.startsWith('subrayado')) return '<span class="ds-mov-ola">ritmo<svg viewBox="0 0 200 20" preserveAspectRatio="none"><path d="M3 12 C 30 3, 50 3, 70 10 S 110 18, 130 10 S 170 3, 197 9"><animate attributeName="d" dur="4.8s" repeatCount="indefinite" calcMode="spline" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" values="M3 12 C 30 3, 50 3, 70 10 S 110 18, 130 10 S 170 3, 197 9;M3 9 C 30 15, 50 15, 70 10 S 110 4, 130 10 S 170 16, 197 11;M3 12 C 30 3, 50 3, 70 10 S 110 18, 130 10 S 170 3, 197 9"/></path></svg></span>';
  if (n.startsWith('mancha')) return '<svg viewBox="0 0 80 64" width="80" height="64"><path class="ds-respira" d="M14 34c-4-14 8-24 24-24s30 6 28 20-12 24-28 24S18 46 14 34z" fill="#D6E7DC"/></svg>';
  return '';
}
function muestraMovimiento(t: Tabla) {
  if (sinTildes(t.cabecera[0] ?? '') !== 'animacion') return null;
  return `<div class="ds-movs">${t.filas
    .map(([a, dur, uso]) => `<figure class="ds-mov"><div class="ds-mov-demo">${demoMovimiento(texto(a ?? ''))}</div><figcaption><b>${texto(a ?? '')}</b><code>${texto(dur ?? '')}</code><span>${uso ?? ''}</span></figcaption></figure>`)
    .join('')}</div>`;
}

/* ---------- Principios ---------- */

function principiosEnTarjetas(html: string) {
  return html.replace(/<ol>([\s\S]*?)<\/ol>/, (_, items: string) => {
    const lis = [...items.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1]);
    return `<div class="ds-principios">${lis
      .map((li, i) => {
        const m = li.match(/^<strong>([\s\S]*?)<\/strong>\s*([\s\S]*)$/);
        return `<div class="ds-principio"><span class="ds-num">${String(i + 1).padStart(2, '0')}</span><h3>${m ? m[1] : ''}</h3><p>${m ? m[2] : li}</p></div>`;
      })
      .join('')}</div>`;
  });
}

/** Aplica las muestras visuales que correspondan a cada sección. */
export function enriquecer(s: SeccionDS): string {
  switch (s.id) {
    case 'principios':
      return principiosEnTarjetas(s.html);
    case 'color':
      return reemplazarTablas(s.html, muestraColor);
    case 'tipografia':
      return reemplazarTablas(s.html, muestraTipografia);
    case 'personas-y-sesiones':
      return reemplazarTablas(s.html, muestraPersonas);
    case 'formas-y-elevacion':
      return reemplazarTablas(s.html, muestraFormas);
    case 'movimiento':
      return reemplazarTablas(s.html, muestraMovimiento);
    default:
      return s.html;
  }
}
