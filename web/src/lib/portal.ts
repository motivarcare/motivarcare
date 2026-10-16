import fs from 'node:fs';
import path from 'node:path';

/** Raíz del repositorio (web/ está un nivel abajo). */
export const RAIZ = path.resolve(process.cwd(), '..');
export const REPO_GITHUB = 'https://github.com/motivarcare/motivarcare.github.io/blob/main';

export const ETIQUETA_ESTADO: Record<string, string> = {
  'sin-iniciar': 'Sin iniciar',
  'en-curso': 'En curso',
  'en-revision': 'En revisión',
  completado: 'Completado',
};

/** Convierte un segmento de ruta en un slug apto para URL. */
export function slug(segmento: string): string {
  return segmento
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** "07-auditoria/bitacora-auditoria-ux/README" -> partes para la URL del documento */
export function rutaDocumento(id: string) {
  const [frente, ...resto] = id.split('/');
  return { frente, doc: resto.map(slug).join('/') };
}

export function urlDocumento(id: string) {
  const { frente, doc } = rutaDocumento(id);
  return `/${frente}/${doc}/`;
}

/** Título legible a partir del nombre de archivo, si el .md no tiene H1 ni frontmatter. */
export function tituloDesdeArchivo(id: string) {
  const base = id.split('/').pop() ?? id;
  if (base.toLowerCase() === 'readme') {
    const carpeta = id.split('/').slice(-2, -1)[0] ?? base;
    return humanizar(carpeta);
  }
  return humanizar(base);
}

export function humanizar(s: string) {
  const t = s.replace(/[-_]+/g, ' ').trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export interface Material {
  nombre: string;
  ruta: string; // relativa a la raíz del repo
  carpeta: string; // relativa a la carpeta del frente
  tipo: string;
  bytes: number;
  url: string;
}

const IGNORAR = new Set(['.git', 'node_modules', '.DS_Store']);

/** Lista los archivos que no son .md dentro de un frente (presentaciones, imágenes, mockups…). */
export function materiales(frente: string): Material[] {
  const base = path.join(RAIZ, frente);
  const salida: Material[] = [];
  const recorrer = (dir: string) => {
    let entradas: fs.Dirent[] = [];
    try {
      entradas = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entradas) {
      if (IGNORAR.has(e.name) || e.name.startsWith('.')) continue;
      const abs = path.join(dir, e.name);
      if (e.isDirectory()) recorrer(abs);
      else if (!e.name.toLowerCase().endsWith('.md')) {
        const rel = path.relative(RAIZ, abs).split(path.sep).join('/');
        const carpeta = path.relative(base, dir).split(path.sep).join('/');
        salida.push({
          nombre: e.name,
          ruta: rel,
          carpeta,
          tipo: (path.extname(e.name).slice(1) || 'archivo').toLowerCase(),
          bytes: fs.statSync(abs).size,
          url: `${REPO_GITHUB}/${rel.split('/').map(encodeURIComponent).join('/')}`,
        });
      }
    }
  };
  recorrer(base);
  return salida.sort((a, b) => a.ruta.localeCompare(b.ruta, 'es'));
}

export function agrupar<T>(items: T[], clave: (t: T) => string) {
  const m = new Map<string, T[]>();
  for (const it of items) {
    const k = clave(it);
    if (!m.has(k)) m.set(k, []);
    m.get(k)!.push(it);
  }
  return [...m.entries()];
}

export function tamano(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1).replace('.', ',')} MB`;
}

export function fecha(d?: Date) {
  if (!d) return '';
  return d.toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** Título de un documento: frontmatter > primer H1 > nombre de archivo. */
export function tituloDoc(entry: { id: string; data: Record<string, any>; rendered?: { metadata?: { headings?: { depth: number; text: string }[] } } }) {
  if (entry.data?.titulo) return String(entry.data.titulo);
  const h1 = entry.rendered?.metadata?.headings?.find((h) => h.depth === 1);
  return h1?.text ?? tituloDesdeArchivo(entry.id);
}

/** Excluye el README principal de cada frente (ese es la ficha del frente, no un documento). */
export function esDocumento(entry: { id: string }) {
  return !/^0[1-9]-[^/]+\/readme$/i.test(entry.id);
}
