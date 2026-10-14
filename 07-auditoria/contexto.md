# Contexto del Proyecto: Auditoría UX MotivarCare

> **Idioma oficial del proyecto:** Todos los contenidos, informes, análisis, documentación y textos de interfaz a generar deben redactarse exclusivamente en **castellano**.  
> **Fecha de inicio:** Septiembre 2026  
> **Área:** Diseño de Experiencia de Usuario (UX/UI) & Estrategia de Producto  
> **Plataforma analizada:** [MotivarCare](https://www.motivarcare.com/) — Portal de telepsicología y consultas virtuales

---

## 1. Motivación y Propósito del Proyecto
El proyecto consiste en realizar una **auditoría integral de Experiencia de Usuario (UX)** sobre el portal web actualmente en producción de **MotivarCare** ([www.motivarcare.com](https://www.motivarcare.com/)).

### El Producto
* **Naturaleza:** Plataforma de salud digital y telemedicina que conecta pacientes en Latinoamérica con profesionales de la psicología para realizar sesiones terapéuticas online ("sin esperas").
* **Arquitectura técnica:** Single Page Application (SPA) desarrollada con React y servida a través de infraestructura en la nube (Railway API).
* **Sensibilidad del dominio:** La salud mental y la telemedicina exigen niveles superlativos de **confianza, claridad, privacidad y reducción de fricción**, ya que los usuarios que buscan atención suelen atravesar momentos de vulnerabilidad emocional. Cualquier confusión en tarifas, falta de verificación de profesionales o barreras técnicas en el agendamiento incrementa drásticamente la tasa de abandono.

---

## 2. Audiencia y Objetivos del Informe
* **Audiencia Principal:** **Directivos y Stakeholders de negocio**. Requieren un diagnóstico estratégico claro, lenguaje de negocio, métricas de impacto en conversión/retención y un retorno claro sobre la inversión en diseño (ROI).
* **Audiencia Secundaria:** **Equipos de Desarrollo y Diseño**. Necesitan que los hallazgos sean accionables, detallados, estructurados por heurísticas y con soluciones concretas de interfaz e interacción.
* **Propósito Final:** Generar un informe que no sea un PDF estático olvidado, sino una herramienta web viva e interactiva de consulta y toma de decisiones.

---

## 3. Estructura de Trabajo Local
El espacio de trabajo local (`motivarcare-audit/`) se organiza en los siguientes módulos:
* `medios/`: Almacén de material multimedia, capturas de pantalla del portal auditado, marcas y referencias gráficas.
* `motivarcare.github.io/`: Repositorio Git vinculado a GitHub Pages, que aloja el código fuente del sitio web del informe final.
* `exploracion/`: Área donde se preservan los prototipos de estilo, mockups interactivos previos y comparativas de diseño.
* `contexto.md`: Registro formal de requerimientos, decisiones finales de arquitectura y alcance del proyecto.

---

## 4. Decisiones Finales de Dirección de Arte y Estilo Visual
Se definió un estilo con identidad visual independiente de la marca auditada, sobrio, innovador y de carácter pericial:

* **Concepto de Diseño:** **Dossier Clínico Pericial ("Salvia & Terracota Óxido")**
  * Metáfora de expediente técnico y cuaderno de laboratorio de salud mental, con retícula milimétrica suave y pestañas de archivo (*folder tabs*).
* **Paleta Cromática:**
  * **Fondo Base:** Papel Salvia Sereno (`#E8ECE6` / `#DEE5DA`) con retícula milimétrica tenue.
  * **Tinta Principal:** Bosque Profundo / Carbón Vegetal (`#112017`).
  * **Color de Acento:** Terracota Óxido (`#C2593F`) para destacar la severidad crítica, datos de negocio y subrayados.
* **Sistema Tipográfico:**
  * **Titular Hero (Nivel 1):** **Instrument Serif** a escala monumental (`8xl`) con curvas afiladas y alto contraste dramático.
  * **Lectura Regular (100% Serif):** Todos los párrafos explicativos, dictámenes ejecutivos y descripciones de hallazgos se maquetan en **Newsreader** para brindar máximo reposo visual y calidez literaria.
  * **Metadatos y Etiquetas Marginales:** **Plus Jakarta Sans** (geométrica nítida en mayúsculas) y **Space Mono** (códigos periciales y números), reservadas exclusivamente para chips, indicadores técnicos y notas al margen (*marginalia*).

---

## 5. Alcance de la Auditoría & Metodología

### Las 3 Áreas a Evaluar:
1. **Landing Page Pública:** `https://www.motivarcare.com/` (Adquisición, propuesta de valor, credibilidad médica de entrada y transparencia de tarifas).
2. **Experiencia del Paciente:** `https://app.motivarcare.com/` (Triaje/matching de terapeuta, agendamiento de turnos, sincronización de husos horarios, pasarela de pago y videoconsulta).
3. **Experiencia del Profesional/Psicólogo:** `https://pro.motivarcare.com/` (Validación de matrícula, configuración de agenda y sala clínica).

### Metodología:
* **10 Heurísticas de Usabilidad de Nielsen** adaptadas al ámbito de la salud mental digital (confidencialidad médica, reducción de ansiedad sensorial, prevención de errores en reservas transfronterizas y lenguaje empático no estigmatizante).

---

## 6. Arquitectura del Sitio Web del Informe (`motivarcare.github.io`)
* **Tecnología:** HTML5 semántico + Tailwind CSS + Vanilla JavaScript modular, gestionado con **Vite**.
* **Estructura de Componentes:**
  * `index.html`: Dashboard interactivo con titular monumental, dictamen C-Level, scorecard de salud UX, selector de las 3 áreas y catálogo de hallazgos.
  * `src/css/style.css`: Importación de tipografías editoriales, retícula salvia y reglas de impresión optimizadas para exportar a PDF.
  * `src/js/audit-data.js`: Módulo centralizado con datos de las 3 áreas, 10 heurísticas adaptadas y matriz de hallazgos.
  * `src/js/app.js`: Lógica de filtrado dinámico por área, severidad y buscador en tiempo real.
* **Despliegue Continuo (CI/CD):**
  * Configurado mediante GitHub Actions en `.github/workflows/deploy.yml`. Cada `git push` compila con Vite (`npm run build`) y publica automáticamente en GitHub Pages.

---

## 7. Próximos Pasos
1. Ejecutar las sesiones de relevamiento y auditoría exhaustiva sobre cada una de las 3 URLs.
2. Almacenar las capturas y videos de evidencia en la carpeta `medios/`.
3. Cargar y enriquecer los hallazgos con sus diagnósticos de negocio y recomendaciones en `src/js/audit-data.js`.
