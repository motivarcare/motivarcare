# Contexto del Proyecto: Plataforma MotivarCare

> **Idioma oficial del proyecto:** Todos los contenidos, informes, análisis, documentación y textos de interfaz a generar deben redactarse exclusivamente en **castellano**.
> **Inicio:** Septiembre 2026 (auditoría UX) · **Ampliación a todos los frentes:** Octubre 2026
> **Plataforma:** [MotivarCare](https://www.motivarcare.com/), un portal de telepsicología y consultas virtuales

---

## 1. Propósito

Este proyecto es el espacio principal para todo el trabajo sobre la plataforma **MotivarCare**: investigación, comercial, design system, diseño, desarrollo, auditoría, marketing y la landing page pública.

El primer frente que se abordó fue la **auditoría integral de UX** del portal en producción (ver sección 6). A partir de octubre de 2026 el trabajo se amplía a todos los frentes, y cada uno tiene su propia carpeta de trabajo.

### El producto
* **Naturaleza:** plataforma de salud digital y telemedicina que conecta pacientes de Latinoamérica con profesionales de la psicología para hacer sesiones terapéuticas online ("sin esperas").
* **Arquitectura técnica:** Single Page Application (SPA) en React, servida desde infraestructura en la nube (Railway API).
* **Superficies:**
  * Landing pública: `https://www.motivarcare.com/`
  * App del paciente: `https://app.motivarcare.com/`
  * Portal del profesional: `https://pro.motivarcare.com/`
* **Sensibilidad del dominio:** la salud mental y la telemedicina exigen niveles muy altos de **confianza, claridad, privacidad y reducción de fricción**. Quienes buscan atención suelen estar en un momento de vulnerabilidad emocional, así que cualquier confusión en las tarifas, la falta de verificación de los profesionales o una barrera técnica en el agendamiento dispara el abandono.

---

## 2. Forma de trabajo con el repositorio (vigente desde el 14/10/2026)

* **Repositorio:** [`motivarcare/motivarcare.github.io`](https://github.com/motivarcare/motivarcare.github.io), rama `main`.
* **Publicación:** cada push a `main` compila el portal (`web/`) y lo publica en GitHub Pages, en https://motivarcare.github.io/ (workflow `.github/workflows/deploy.yml`).
* **Claude trabaja directamente sobre el repositorio en GitHub**: crea y edita archivos, hace los commits y los sube con push.
* **Gastón hace `git pull`** de vez en cuando en su copia local (`C:\Users\gasto\Trabajo\ux-ui\motivarcare`) para bajar los cambios y probarlos.
* Para evitar conflictos, conviene no editar la copia local sin hacer pull antes. Si Gastón cambia algo localmente, lo sube con push antes de pedirle nuevas tareas a Claude.
* **Visibilidad:** por ahora el repositorio es **público** (decisión del 14/10/2026) y el portal se publica abierto en GitHub Pages. Todo lo que se suba es visible para cualquiera, así que conviene revisar qué se incluye en cada push (por ejemplo, documentos comerciales o datos sensibles). Las páginas llevan `noindex` para que no aparezcan en buscadores.

---

## 3. Estructura del repositorio

| Carpeta | Frente |
|---|---|
| `00-resumen/` | Contenido de la portada del portal interno (`index.md`) |
| `01-investigacion/` | Investigación (usuarios, mercado, competencia) |
| `02-comercial/` | Comercial (investor deck, propuestas, modelo de negocio) |
| `04-design-system/` | Design system (tokens, componentes, guías) |
| `05-diseno/` | Diseño de producto (flujos, pantallas, prototipos) |
| `06-desarrollo/` | Desarrollo |
| `07-auditoria/` | Auditoría UX: bitácora de casos, documentos y material de trabajo |
| `08-marketing/` | Marketing |
| `09-landing-page/` | Contenidos de la landing page pública (www.motivarcare.com) |
| `web/` | **Portal HTML interno** para presentar los trabajos de cada frente |

Cada carpeta tiene un `README.md` que explica para qué es.

### Repositorio del informe: `motivarcare-audit`
El informe web de la auditoría vive en su propio repositorio, [`motivarcare/motivarcare-audit`](https://github.com/motivarcare/motivarcare-audit), y se publica en https://motivarcare.github.io/motivarcare-audit/. La bitácora, los casos y el material de trabajo de la auditoría están en `07-auditoria/`.

---

## 4. Portal interno (`web/`)
Es el sitio de uso interno para seguir los trabajos de cada frente. Se armó el 14/10/2026.
* **Tecnología:** [Astro](https://astro.build/) 5, con colecciones de contenido que leen los `.md` del repositorio. Con `npm run dev` (dentro de `web/`), cualquier cambio en un `.md` se ve al instante.
* **Origen del contenido:** la portada sale de `00-resumen/index.md`. La página de cada frente sale del `README.md` de su carpeta, y su encabezado (frontmatter) define el título, el número, el estado, el resumen, la fecha de actualización y los próximos pasos. Los demás `.md` de cada frente se muestran como documentos. El resto de los archivos aparece como materiales, con enlace a GitHub.
* **Estados posibles de un frente:** `sin-iniciar`, `en-curso`, `en-revision`, `completado`.
* **Estilos:** los del investor deck. Fraunces para títulos, Manrope para textos, fondo crema, verdes bosque, tarjetas salvia y menta, y acento amarillo. Se mantiene el criterio "sólido = lo que existe; punteado = lo pendiente".
* Dentro de `web/public/` también viven piezas independientes del portal: el investor deck (`decks/investor-deck/`) y la propuesta de nueva landing pública (`landing/`), que tiene su propio HTML, CSS y JS para poder publicarse aparte.
* El detalle de uso y del formato de los encabezados está en `web/README.md`.

---

## 5. Documentos por frente (proyecto MotivarCare en claude.ai)
* **Comercial:** `claude/investor-deck-direccion-visual.md`
* **Design system:** `claude/design-system-borrador.md`
* **Auditoría:** este documento (sección 6)

---

## 6. Frente Auditoría UX

### 6.1 Audiencia y objetivos del informe
* **Audiencia principal:** directivos y stakeholders de negocio. Necesitan un diagnóstico estratégico, lenguaje de negocio, métricas de impacto en conversión y retención, y un retorno claro sobre la inversión en diseño (ROI).
* **Audiencia secundaria:** equipos de desarrollo y diseño. Necesitan hallazgos accionables, detallados, organizados por heurística y con soluciones concretas de interfaz e interacción.
* **Propósito final:** que el informe sea una herramienta web viva e interactiva de consulta y toma de decisiones, y no un PDF estático que termina olvidado.

### 6.2 Dirección de arte del informe
Es un estilo con identidad visual propia, independiente de la marca auditada:
* **Concepto:** **Dossier Clínico Pericial ("Salvia & Terracota Óxido")**. La metáfora es la de un expediente técnico y un cuaderno de laboratorio de salud mental, con retícula milimétrica suave y pestañas de archivo (*folder tabs*).
* **Paleta:**
  * Fondo: Papel Salvia Sereno (`#E8ECE6` / `#DEE5DA`) con retícula milimétrica tenue.
  * Tinta: Bosque Profundo / Carbón Vegetal (`#112017`).
  * Acento: Terracota Óxido (`#C2593F`) para la severidad crítica, los datos de negocio y los subrayados.
* **Tipografía:**
  * Titular hero: **Instrument Serif** en escala monumental (`8xl`).
  * Lectura: **Newsreader** para todos los párrafos, dictámenes y descripciones de hallazgos.
  * Metadatos: **Plus Jakarta Sans** (mayúsculas) y **Space Mono** (códigos y números), solo para chips, indicadores y notas al margen.

### 6.3 Alcance y metodología
* **Áreas evaluadas:**
  * Landing pública: adquisición, propuesta de valor, credibilidad y tarifas.
  * App del paciente: matching, agendamiento, husos horarios, pago y videoconsulta.
  * Portal del profesional: validación de matrícula, agenda y sala clínica.
* **Metodología:** las **10 heurísticas de Nielsen**, adaptadas a la salud mental digital. La adaptación cubre confidencialidad médica, reducción de la ansiedad sensorial, prevención de errores en reservas entre países y lenguaje empático no estigmatizante.

### 6.4 Flujo de trabajo por caso (vigente desde fines de septiembre de 2026)
1. **Gastón asigna un caso:** una pantalla, un flujo o una sección.
2. **Orden de viewport:** primero **escritorio**, después **tablet** y al final **móvil**. No se pasa al siguiente sin cerrar la pasada de escritorio, salvo que Gastón diga lo contrario.
3. **Registro:** Claude anota el paso a paso y los hallazgos en `bitacora-auditoria-ux/caso-NN-slug/`, en el `.md` del caso y en `capturas/`. Cada hallazgo lleva heurística, severidad, clasificación, descripción, recomendación y evidencia. Este registro local es la fuente de verdad del caso.
4. **Revisión:** Gastón pide ajustes y Claude los aplica sobre esos mismos archivos.
5. **`src/js/audit-data.js` y el informe HTML NO se actualizan en cada iteración.** Se actualizan una sola vez por caso, cuando Gastón confirma el cierre y lo pide explícitamente.
6. Al cerrar el caso, el contenido del `.md` pasa a `audit-data.js` (recalculando `findingsCount` del área), las capturas se sincronizan a `public/capturas/caso-NN/` y se verifica todo: stage → commit con `expectedMtimeMs` → stage-back → SHA256 para texto y diff de píxeles para imágenes.

### 6.5 Arquitectura del sitio del informe (repositorio `motivarcare-audit`)
* **Tecnología:** HTML5 semántico + Tailwind CSS + Vanilla JS modular, con **Vite**.
* **Componentes:** `index.html` (dashboard, dictamen C-Level, scorecard, selector de áreas, catálogo de hallazgos), `src/css/style.css`, `src/js/audit-data.js` (datos, heurísticas y matriz de hallazgos) y `src/js/app.js` (filtros y buscador).
* **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`). Cada push a `main` compila con Vite y publica el informe en GitHub Pages como sitio de proyecto: https://motivarcare.github.io/motivarcare-audit/. La página del frente 07 en el portal enlaza a ese informe.

### 6.6 Próximos pasos de la auditoría
1. Seguir con la auditoría caso por caso en las 3 superficies, según el flujo de la sección 6.4.
2. Guardar la evidencia en `medios/` y en el `capturas/` de cada caso.
3. Al cerrar cada caso, y solo a pedido de Gastón, cargar sus hallazgos en `audit-data.js`.
