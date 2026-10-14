# Contexto del Proyecto: Plataforma MotivarCare

> **Idioma oficial del proyecto:** Todos los contenidos, informes, análisis, documentación y textos de interfaz a generar deben redactarse exclusivamente en **castellano**.
> **Inicio:** Septiembre 2026 (auditoría UX) · **Ampliación a todos los frentes:** Octubre 2026
> **Plataforma:** [MotivarCare](https://www.motivarcare.com/), un portal de telepsicología y consultas virtuales

---

## 1. Propósito

Este proyecto es el espacio principal para todo el trabajo sobre la plataforma **MotivarCare**: investigación, comercial, design system, diseño, desarrollo, auditoría, pruebas y marketing.

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

* **Repositorio:** [`motivarcare/motivarcare`](https://github.com/motivarcare/motivarcare), rama `main`.
* **Claude trabaja directamente sobre el repositorio en GitHub**: crea y edita archivos, hace los commits y los sube con push.
* **Gastón hace `git pull`** de vez en cuando en su copia local (`C:\Users\gasto\Trabajo\ux-ui\motivarcare`) para bajar los cambios y probarlos.
* Para evitar conflictos, conviene no editar la copia local sin hacer pull antes. Si Gastón cambia algo localmente, lo sube con push antes de pedirle nuevas tareas a Claude.
* **Visibilidad:** por ahora el repositorio es **público** (decisión del 14/10/2026). Como lleva el mismo nombre que la cuenta, GitHub muestra su `README.md` en el perfil público. Todo lo que se suba es visible para cualquiera, así que conviene revisar qué se incluye en cada push (por ejemplo, documentos comerciales o datos sensibles).

---

## 3. Estructura del repositorio

| Carpeta | Frente |
|---|---|
| `01-investigacion/` | Investigación (usuarios, mercado, competencia) |
| `02-comercial/` | Comercial (investor deck, propuestas, modelo de negocio) |
| `04-design-system/` | Design system (tokens, componentes, guías) |
| `05-diseno/` | Diseño de producto (flujos, pantallas, prototipos) |
| `06-desarrollo/` | Desarrollo |
| `07-auditoria/` | Auditoría UX (destino final de todo lo producido en `motivarcare-audit/`) |
| `08-pruebas/` | Pruebas (usabilidad, QA) |
| `09-marketing/` | Marketing |
| `web/` | **Portal HTML interno** para presentar los trabajos de cada frente |

Cada carpeta tiene un `README.md` que explica para qué es.

### Carpeta heredada: `motivarcare-audit/` (solo local, fuera de este repositorio)
Es el espacio de trabajo de la auditoría UX, el primer frente. **Con el tiempo todo su contenido se va a mudar a `07-auditoria/`.** Mientras tanto, sigue siendo la fuente de verdad de la auditoría:
* `medios/`: capturas del portal auditado, marcas y referencias gráficas.
* `bitacora-auditoria-ux/`: una subcarpeta por caso (`caso-NN-slug/`), cada una con su `caso-NN-slug.md` y su carpeta `capturas/`.
* `motivarcare.github.io/`: repositorio del sitio web del informe final (GitHub Pages).
* `exploracion/`: prototipos de estilo, mockups y comparativas previas.
* `presentacion-auditoria-ux/`, `documentos/`, `auditoria-ux.md`: material complementario.

---

## 4. Portal interno (`web/`)
Es un portal HTML de uso interno para ir mostrando los trabajos de cada frente. Su diseño y su arquitectura están pendientes de definición. Cuando se definan, se documentan acá.

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

### 6.5 Arquitectura del sitio del informe (`motivarcare.github.io`)
* **Tecnología:** HTML5 semántico + Tailwind CSS + Vanilla JS modular, con **Vite**.
* **Componentes:** `index.html` (dashboard, dictamen C-Level, scorecard, selector de áreas, catálogo de hallazgos), `src/css/style.css`, `src/js/audit-data.js` (datos, heurísticas y matriz de hallazgos) y `src/js/app.js` (filtros y buscador).
* **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`). Cada `git push` compila con Vite y publica en GitHub Pages.

### 6.6 Próximos pasos de la auditoría
1. Seguir con la auditoría caso por caso en las 3 superficies, según el flujo de la sección 6.4.
2. Guardar la evidencia en `medios/` y en el `capturas/` de cada caso.
3. Al cerrar cada caso, y solo a pedido de Gastón, cargar sus hallazgos en `audit-data.js`.
4. Más adelante, migrar `motivarcare-audit/` a `07-auditoria/`.
