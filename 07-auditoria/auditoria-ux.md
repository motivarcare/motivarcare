# Auditoría UX MotivarCare — Metodología y Decisiones de Proceso

> Este documento complementa a `contexto.md` (que define alcance general, dirección de arte y arquitectura del sitio de informe). Acá se registran específicamente **cómo se va a llevar adelante la auditoría**: roles, metodología, perfiles, formato de casos y flujo de trabajo. Toda decisión de proceso tomada de acá en adelante debe quedar reflejada en este archivo.
>
> **Fecha de definición:** Septiembre 2026

---

## 1. Propósito

Antes de ejecutar la auditoría UX sobre MotivarCare, se define por escrito el procedimiento de trabajo, para que:

* Cada evaluación quede documentada de forma **coherente y comparable** entre sí.
* Quede registro del **razonamiento y las decisiones** tomadas caso a caso, no solo del resultado final.
* El informe web (`motivarcare.github.io`) se nutra, más adelante, de una bitácora ordenada y trazable, en lugar de partir de hallazgos sueltos.

**Nota de contexto importante:** las pantallas del portal a explorar (landing, app del paciente y portal del profesional) fueron construidas **íntegramente con IA**. Este dato se tiene en cuenta como contexto del objeto auditado, no como criterio de evaluación en sí mismo.

---

## 2. Roles

* **Evaluador UX:** Gastón. Propone los **casos de evaluación** a auditar, guía el criterio y las prioridades, y define/ajusta las convenciones de este documento.
* **Claude (Cowork):** Ejecuta las evaluaciones de cada caso propuesto —navega el entorno, releva evidencia, aplica la heurística correspondiente— y genera la documentación resultante en la bitácora.

---

## 3. Áreas a evaluar

Se mantienen las 3 áreas ya definidas en `contexto.md`, cada una asociada a un perfil de usuario simulado (ver sección 4):

| Área | URL | Foco | Perfil asociado |
|---|---|---|---|
| **Landing Page Pública** | `https://www.motivarcare.com/` | Adquisición, propuesta de valor, credibilidad médica de entrada, transparencia de tarifas. | Usuario no registrado |
| **Experiencia del Paciente** | `https://app.motivarcare.com/` | Triaje/matching de terapeuta, agendamiento, sincronización de husos horarios, pasarela de pago, videoconsulta. | Paciente |
| **Experiencia del Profesional/Psicólogo** | `https://pro.motivarcare.com/` | Validación de matrícula, configuración de agenda, sala clínica. | Profesional |

---

## 4. Perfiles de usuario simulados

Para cada caso de evaluación, Claude actuará bajo uno de estos 3 perfiles, según el área que corresponda:

1. **Usuario no registrado** — explora la landing page pública, sin cuenta ni sesión iniciada.
2. **Paciente** — interactúa con `app.motivarcare.com` como quien busca/tiene turnos de terapia.
3. **Profesional** — interactúa con `pro.motivarcare.com` como psicólogo/a dado de alta en la plataforma.

---

## 5. Metodología

Marco de trabajo: **10 Heurísticas de Usabilidad de Nielsen**, adaptadas al dominio de salud mental digital / telepsicología (confidencialidad médica, reducción de ansiedad sensorial, prevención de errores en reservas transfronterizas, lenguaje empático no estigmatizante). Estas son las mismas 10 heurísticas adaptadas ya definidas en `audit-data.js`, y son las que se usarán como valor del campo **"Heurística"** en cada caso:

| ID | Heurística | Contexto adaptado |
|---|---|---|
| H01 | Visibilidad del estado del sistema | Claridad sobre el estado de la reserva, pasos del triaje y confirmación de sala de espera virtual. |
| H02 | Coincidencia con el mundo real | Vocabulario clínico empático y no estigmatizante; sin tecnicismos informáticos en momentos de vulnerabilidad. |
| H03 | Control y libertad del usuario | Cancelar/reprogramar sin fricción punitiva; retroceder en el triaje sin perder datos. |
| H04 | Consistencia y estándares | Coherencia estética y funcional entre landing, app del paciente y panel del profesional. |
| H05 | Prevención de errores | Discrepancias de husos horarios, verificación previa de cámara/micrófono, alertas de sesión expirada. |
| H06 | Reconocimiento antes que recuerdo | Fichas de terapeutas con especialidad, enfoque clínico y honorarios visibles sin rebuscar. |
| H07 | Flexibilidad y eficiencia de uso | Matching guiado en pocos pasos; accesos directos para agendamiento recurrente. |
| H08 | Estética sobria y minimalismo antiestrés | Diseño limpio que no fatigue ni genere ansiedad sensorial. |
| H09 | Diagnóstico y recuperación de errores | Mensajes humanos ante fallos de cobro o desconexión, con alternativa de contacto directo. |
| H10 | Confidencialidad médica y soporte | Garantías de secreto profesional, cifrado de sesiones, acceso a asistencia humana en crisis. |

---

## 6. Proceso de trabajo

1. El **Evaluador UX** propone un **caso de evaluación** puntual (una pantalla, un flujo, una interacción específica dentro de alguna de las 3 áreas).
2. **Claude** ejecuta ese caso: navega el entorno de pruebas correspondiente, releva evidencia y aplica la heurística que corresponda.
3. Claude genera la documentación del caso dentro de la bitácora (ver sección 7), incluyendo capturas de pantalla cuando haya hallazgos.
4. Se repite caso por caso. **No se actualiza el sitio del informe automáticamente.**
5. El sitio del informe (`motivarcare.github.io`) solo se actualiza cuando el Evaluador UX **lo pide explícitamente**, tomando como fuente lo acumulado en la bitácora hasta ese momento.

### Herramientas de navegación

Se utilizarán dos entornos de prueba, según el caso lo requiera:

* **Chrome vía plugin (Claude in Chrome):** navegación sobre el navegador Chrome real, controlado por Claude.
* **Navegador integrado (built-in browser):** navegación dentro del panel propio de la app de escritorio de Claude.

La elección de cuál usar en cada caso se define puntualmente al proponer el caso (a definir/ajustar sobre la marcha).

**Limitación detectada (pasada tablet, Caso 01):** el navegador integrado permite recorrer y evaluar el sitio, pero no tiene forma de guardar una captura como archivo (solo se puede ver, no queda un .png/.jpg en la carpeta del caso). Chrome vía plugin sí guarda capturas a disco. Por eso, cuando se necesite **evidencia archivada** de un hallazgo, el patrón por defecto es: evaluar/recorrer con el navegador integrado, y usar Chrome únicamente para capturar y guardar el punto puntual que hay que documentar.

**Limitación detectada (pasada móvil, Caso 01):** la emulación de viewport móvil (375×812) del navegador integrado mostró texto y títulos cortados/truncados en el borde derecho en varias secciones de `motivarcare.com`, que **no se reproducen** al verificar el mismo ancho con una ventana real de Chrome (375×812) — ahí el texto se ve completo. Fue un falso positivo de la emulación del navegador integrado, no un problema real del sitio. Recomendación para próximas pasadas en móvil: si algo se ve roto/cortado solo en el navegador integrado, conviene verificarlo en Chrome con una ventana redimensionada al mismo ancho antes de documentarlo como hallazgo.

---

## 7. Estructura de carpetas — Bitácora de auditoría

Se crea la carpeta **`bitacora-auditoria-ux/`** en la raíz del workspace local (`motivarcare-audit/`), con la siguiente organización:

```
bitacora-auditoria-ux/
├── caso-01-<slug-descriptivo>/
│   ├── caso-01-<slug-descriptivo>.md      ← documento de detalle y resultados del caso
│   └── capturas/                          ← screenshots de evidencia (sobre todo si hay hallazgos)
├── caso-02-<slug-descriptivo>/
│   ├── caso-02-<slug-descriptivo>.md
│   └── capturas/
└── ...
```

* Se crea **una subcarpeta por cada caso** propuesto por el Evaluador UX.
* Dentro de cada subcarpeta de caso:
  * Un documento **`.md`** con el detalle del caso y los resultados evaluados, siguiendo el formato de la sección 8.
  * Una subcarpeta **`capturas/`** con las screenshots relevadas para ese caso.
* Convención de nombres propuesta (ajustable): `caso-NN-<slug-descriptivo>`, numerado secuencialmente en el orden en que se van abordando los casos.

---

## 8. Formato de registro por caso

Todo caso auditado se documenta usando el mismo formato, para poder listar, comparar y clasificar los casos de manera coherente:

1. **Número de caso**
2. **Título**
3. **Estado** — indica el avance del trabajo sobre el caso. Valores posibles:
   1. En progreso
   2. Completado
   3. Parcial
   4. Sin evaluación
4. **Área de evaluación** — una de: Landing Page Pública / Experiencia del Paciente / Experiencia del Profesional
5. **Severidad** — valores posibles:
   1. Crítica
   2. Mayor
   3. Menor
   4. Recomendación
   5. A revisar (probablemente no implique ninguna acción)
6. **Descripción del caso** — qué se evaluó, bajo qué perfil de usuario y con qué objetivo
7. **Heurística** — una (o más) de las 10 heurísticas de Nielsen adaptadas (sección 5)
8. **Clasificación** — lista abierta, se amplía a medida que surjan casos nuevos. Valores iniciales:
   1. Identidad visual
   2. Usabilidad
   3. Accesibilidad
   4. Responsive
   5. Otros
9. **Pasos y hallazgos** — secuencia de acciones realizadas durante la evaluación, y el detalle de cada hallazgo encontrado
10. **Feedback positivo** — aspectos que funcionan bien y vale la pena preservar
11. **Pendientes o próximos pasos**
12. **Idioma** — idioma en el que se relevó el caso (por ejemplo, Castellano). Es un dato de nivel caso, no por hallazgo.

> Los campos se numeran en el orden en que se fueron definiendo (el campo 12 se agregó después de los primeros 11); no se renumeran los campos existentes al sumar uno nuevo, para no romper la referencia de los casos ya documentados.

### Un caso puede tener uno o varios hallazgos

Un mismo caso (por ejemplo, "evaluar el formulario de registro de paciente") puede arrojar **ningún, uno o varios hallazgos**. Son los **hallazgos**, no los casos, lo que finalmente se lista en el informe web, vinculados a su caso de origen, área, severidad, clasificación y heurística.

Por eso, dentro del punto 9 (**Pasos y hallazgos**) del documento de cada caso, cada hallazgo se documenta como un bloque individual con sus propios atributos:

* **ID del hallazgo** (correlativo dentro del caso, ej. `Caso 03 · Hallazgo 1`)
* **Título del hallazgo**
* **Heurística** aplicable (una de las 10, sección 5)
* **Severidad** (Crítica / Mayor / Menor / Recomendación / A revisar)
* **Clasificación** (Identidad visual / Usabilidad / Accesibilidad / Responsive / Otros)
* **Viewport** — el breakpoint en el que se detectó ese hallazgo puntual (Escritorio / Tablet / Móvil, con la resolución usada si corresponde). Se registra por hallazgo y no a nivel de caso, porque un mismo caso puede ampliarse con el tiempo a más de un viewport (por ejemplo, la pasada de escritorio, y más adelante tablet y móvil sobre el mismo caso) y no todos los hallazgos de ese caso van a compartir necesariamente el mismo viewport.
* **Descripción** — qué se observó y por qué constituye un hallazgo
* **Evidencia** — referencia a la(s) captura(s) correspondiente(s) en la subcarpeta `capturas/` del caso
* **Recomendación** (si aplica)

Los campos 5 (Severidad), 7 (Heurística) y 8 (Clasificación) a nivel del caso quedan como esos mismos valores solo cuando el caso tiene **un único hallazgo**; cuando tiene varios, esos 3 campos a nivel de caso se dejan en blanco o como "Ver hallazgos" y el detalle vive en cada bloque de hallazgo dentro del punto 9.

> La lista de valores de **Clasificación** es abierta: se va a ir ampliando en este mismo documento a medida que aparezcan casos que no encajen en las categorías actuales.

---

## 9. Reglas sobre el sitio del informe y GitHub

* Claude **no ejecuta comandos de git/GitHub** bajo ninguna circunstancia en este proyecto — eso lo hace el Evaluador UX manualmente.
* Cuando el Evaluador UX pida actualizar el informe, Claude modifica los **archivos fuente** del proyecto `motivarcare.github.io` (dentro de `src/`, `index.html`, etc.) para que puedan probarse localmente con `npm run dev`.
* Recién después de esa prueba local, el Evaluador UX se encarga de subir los cambios al repositorio de GitHub.

---

## 10. Historial de decisiones

| Fecha | Decisión |
|---|---|
| 2026-09-14 | Se define el proceso completo de auditoría: roles, metodología (heurísticas de Nielsen), 3 perfiles de usuario, estructura de bitácora por caso, formato de registro de 11 campos, y reglas de actualización del informe/GitHub. |
| 2026-09-14 | Se definen los valores de **Estado** (En progreso / Completado / Parcial / Sin evaluación) y **Severidad** (Mayor / Menor / Recomendación). Se define un set inicial y abierto de **Clasificación** (Identidad visual / Usabilidad / Accesibilidad / Responsive / Otros). Se aclara que un caso puede tener 0, 1 o varios hallazgos, y que son los hallazgos —no los casos— los que se listan en el informe, cada uno con su propia Severidad, Heurística y Clasificación. |
| 2026-09-14 | Se agregan 2 datos nuevos al registro de casos: **Idioma** (campo 12, a nivel de caso — ej. Castellano) y **Viewport** (atributo por hallazgo, no por caso — ej. Escritorio, Tablet, Móvil), ya que un mismo caso puede ir sumando hallazgos de distintos viewports con el tiempo. |
| 2026-09-14 | Se detecta que el navegador integrado no permite guardar capturas como archivo (solo Chrome vía plugin lo hace). Se define como patrón: evaluar/recorrer con el navegador integrado, y usar Chrome únicamente para capturar y guardar evidencia puntual cuando haga falta un archivo. |
| 2026-09-14 | Se detecta que la emulación de viewport móvil (375×812) del navegador integrado puede mostrar texto cortado que no es real (no se reproduce en una ventana real de Chrome al mismo ancho). Se define verificar en Chrome antes de documentar como hallazgo cualquier corte/quiebre visto solo en el navegador integrado en modo móvil. |
| 2026-09-15 | Se amplía el set de valores de **Severidad** con dos categorías nuevas: **Crítica** (la de mayor prioridad, por encima de Mayor) y **A revisar** (hallazgos que probablemente no impliquen ninguna acción). Set completo: Crítica / Mayor / Menor / Recomendación / A revisar. Se actualiza también el filtro de severidad y el resumen ejecutivo del sitio del informe (`Críticas + Mayores` sobre el total). Por el momento no se reclasifica ningún hallazgo existente. |
