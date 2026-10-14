# Presentación — Auditoría UX MotivarCare (resumen ejecutivo + roadmap)

> Borrador de contenidos para la presentación de diapositivas. Se trabaja acá en markdown, igual que en `bitacora-auditoria-ux/`, antes de pasar a los slides. Este documento es la fuente de verdad de los contenidos hasta que se confirme el cierre y se arme el deck.

1. **Estado:** En progreso — estructura de 13 diapositivas cerrada (bajó de 14 a 13: la Fase 1 y la Fase 2 originales del roadmap se fusionaron en una sola). Portada cerrada. Resumen de trabajo y diagnóstico positivo redactados. Los textos finales de los 3 slides de diagnóstico (4, 5 y 6) están cerrados, con el encabezado de cada uno etiquetado según las dimensiones del UX Honeycomb de Peter Morville que interpela (Usabilidad, Encontrabilidad, Confiabilidad, Deseabilidad, Accesibilidad, Valor). El roadmap quedó en **4 fases** (no 5): Fase 1 "Estabilización & Ajustes Rápidos" (cerrada, con texto de slide confirmado), Fase 2 "Identidad y Design System", Fase 3 "Prueba de usuario y rediseño de flujos del paciente" y Fase 4 "Rediseño de flujos del profesional" (estas tres últimas con nombre confirmado, contenido y horizonte de tiempo aún pendientes de detalle). Falta también el cierre (slide 13).
2. **Audiencia:** Dirección / stakeholders no técnicos.
3. **Alcance:** Resumen ejecutivo + roadmap propuesto (no un recorrido caso por caso completo).
4. **Identidad visual de referencia:** Design System — a definir más adelante (según lo acordado, todavía no se trabaja este punto). Referencia posible: la identidad "Dossier Clínico Pericial" ("Salvia & Terracota Óxido") ya definida en `contexto.md` para el informe HTML. **Pendiente de decisión.**
5. **Assets:** las imágenes/capturas que se necesiten para la presentación van en la subcarpeta `assets/` de esta misma carpeta.

---

## Estructura del deck (13 diapositivas)

| # | Diapositiva | Contenido | Sección de este documento |
|---|---|---|---|
| 1 | Portada | Logo de MotivarCare, título "Auditoría UX", subtítulo "Diagnóstico y roadmap", fecha 28/09/2026 | [Slide 1](#slide-1--portada) |
| 2 | Resumen del trabajo realizado | Qué se auditó, cómo, y con qué alcance, a grandes rasgos | [Slide 2](#slide-2--resumen-del-trabajo-realizado) |
| 3 | Diagnóstico — lo positivo | Diagnóstico profesional del estado de la app y sus portales, destacando fortalezas | [Slide 3](#slide-3--diagnóstico-profesional-lo-positivo) |
| 4 | Diagnóstico 1/3 | Resolución de hallazgos (empezando por los críticos) + low-hanging fruit como acelerador. Excluye identidad/estética/consistencia visual. | [Slide 4](#slide-4--diagnóstico-13-resolución-de-hallazgos--low-hanging-fruit) |
| 5 | Diagnóstico 2/3 | Identidad de MotivarCare y desarrollo de un Design System coherente | [Slide 5](#slide-5--diagnóstico-23-identidad-de-motivarcare-y-design-system) |
| 6 | Diagnóstico 3/3 | Rediseños de flujos clave del portal del paciente y del profesional | [Slide 6](#slide-6--diagnóstico-33-rediseños-de-flujos-clave) |
| 7 | Roadmap — estrategia | Cómo se piensa abordar lo planteado en las diapositivas 4 a 6, en 4 fases | [Slide 7](#slide-7--roadmap-estrategia-de-abordaje) |
| 8 | Roadmap — fases | Las 4 fases propuestas, vista general | [Slide 8](#slide-8--roadmap-fases-vista-general) |
| 9 | Roadmap — Fase 1 | Estabilización & Ajustes Rápidos | [Slide 9-12](#slide-9-a-12--una-diapositiva-por-fase) |
| 10 | Roadmap — Fase 2 | Identidad y Design System | ídem |
| 11 | Roadmap — Fase 3 | Prueba de usuario y rediseño de flujos del paciente | ídem |
| 12 | Roadmap — Fase 4 | Rediseño de flujos del profesional | ídem |
| 13 | Cierre | Cierre / próximos pasos | [Slide 13](#slide-13--cierre) |

**Correspondencia diagnóstico → roadmap** (así quedó armada la narrativa del deck):

| Diagnóstico (slide) | Se convierte en... |
|---|---|
| 4 — Resolución de hallazgos + low-hanging fruit | Fase 1 — Estabilización & Ajustes Rápidos (críticos + low-hanging fruit, en una sola fase) |
| 5 — Identidad y Design System | Fase 2 — Identidad y Design System |
| 6 — Rediseños de flujos clave | Fase 3 — paciente (Prueba de usuario y rediseño de flujos del paciente) + Fase 4 — profesional (Rediseño de flujos del profesional) |

*(Nota: con el texto final de la Slide 4, el Diagnóstico 1/3 quedó planteado en dos categorías —Críticos y Low-hanging fruit— presentadas con ejemplos, no como lista exhaustiva, y ambas categorías se resuelven juntas en una sola fase del roadmap (Fase 1). Esto resuelve tanto la duda anterior sobre dónde ubicar los hallazgos Mayores que no encajaban en ninguna de las dos categorías —quedan comprendidos como ejemplos dentro de "Críticos" o "Low-hanging fruit"— como la de si separar Fase 1 y Fase 2: no hace falta, van juntas.)*

---

## Slide 1 — Portada

- **Logo de MotivarCare** (a conseguir en alta resolución — ver pendientes).
- **Título:** "Auditoría UX"
- **Subtítulo:** "Diagnóstico y roadmap" ✅ confirmado
- **Fecha:** 28/09/2026 ✅ confirmado

---

## Slide 2 — Resumen del trabajo realizado

**Texto del slide (borrador):**

> Entre septiembre de 2026 se realizó una auditoría integral de experiencia de usuario sobre las tres superficies de MotivarCare —Landing Page, Experiencia del Paciente y Portal del Profesional—, ejercitando sus flujos reales en escritorio, tablet y móvil, con verificación técnica adicional en los puntos más sensibles. El trabajo se apoyó en diez heurísticas de usabilidad (Nielsen) adaptadas al contexto de salud mental digital, con foco en confianza, prevención de errores y lenguaje empático. A la fecha se relevaron y cerraron 9 casos que cubren las tres superficies, con el detalle completo de cada hallazgo disponible en un informe web interactivo del cual esta presentación es un resumen ejecutivo. Además del diagnóstico, esta presentación incluye una propuesta de roadmap para abordar lo relevado.

Contenido a grandes rasgos (sin entrar en el detalle de hallazgos, eso viene después):

- **Qué se hizo:** una auditoría integral de experiencia de usuario (UX) sobre las 3 superficies en producción de MotivarCare:
  1. **Landing Page Pública** (`www.motivarcare.com`) — la puerta de entrada para un paciente potencial.
  2. **Experiencia del Paciente** (`app.motivarcare.com`) — desde el triaje/matching con un profesional hasta el pago y la videoconsulta.
  3. **Portal del Profesional** (`pro.motivarcare.com`) — el entorno de gestión del psicólogo (alta, agenda, pacientes).
- **Cómo se hizo:** evaluación funcional real (no solo observación visual) en escritorio, tablet y móvil, ejercitando los flujos como lo haría una persona usuaria real (crear cuenta, reservar y pagar una sesión, configurar disponibilidad, etc.), con verificación técnica adicional (a nivel de servidor/API) en los puntos más sensibles.
- **Marco de referencia:** 10 heurísticas de usabilidad reconocidas (Nielsen), adaptadas específicamente al contexto de salud mental digital — con foco en confianza, prevención de errores y lenguaje empático, dado que quienes usan la plataforma suelen estar en un momento de vulnerabilidad.
- **Alcance relevado a la fecha:** 9 casos evaluados y cerrados, cubriendo las 3 superficies — desde el registro de un paciente nuevo hasta la gestión de agenda de un profesional ya activo.
- **Formato del resultado:** además de esta presentación, existe un informe web interactivo con el detalle completo de cada hallazgo (heurística, severidad, evidencia y recomendación), pensado como herramienta de consulta permanente y no como un documento estático.

---

## Slide 3 — Diagnóstico profesional: lo positivo

Encuadre para esta diapositiva: **el diagnóstico no es únicamente negativo** — MotivarCare tiene bases sólidas sobre las cuales construir. Selección curada (no exhaustiva) de fortalezas por portal:

### Landing Page Pública
- Identidad visual consistente en su elemento más importante: el botón de acción principal mantiene el mismo estilo (degradado y forma) en toda la página.
- Tono y diseño alineados con lo esperable en un producto de salud mental: espaciado generoso, sin elementos intrusivos, estética sobria.

### Experiencia del Paciente
- Momentos de alta sensibilidad bien resueltos: la pantalla de apoyo ante una respuesta de riesgo en el cuestionario de bienvenida tiene un tono empático y recursos concretos de Argentina.
- Buena comunicación de progreso y de errores: mensajes claros como "Progreso guardado, podés seguir después" o el aviso al intentar registrarse con un email ya existente.
- El flujo de pago y confirmación de sesiones (fuera del caso puntual del Diagnóstico 1/3) es claro, tranquilizador y con buen resguardo por email.
- Buena adaptación responsive en general: los flujos probados (cuestionario de bienvenida, compra de sesiones, diario emocional) se comportan correctamente en tablet y en móvil.
- El Diario Emocional funciona con precisión a nivel de datos: la privacidad de las entradas y los insights generados fueron consistentes en todas las pruebas.

### Portal del Profesional
- El Dashboard del profesional tiene una arquitectura de información clara, con estados y advertencias bien comunicados (por ejemplo, antes de marcar una sesión como realizada).
- Buena adaptación a tablet y móvil (barra de navegación inferior, reorganización de bloques clave).
- Nivel de accesibilidad por teclado notablemente por encima del promedio en varias pantallas (tarjetas, acordeones y controles del Dashboard correctamente operables y anunciados).
- Mecanismos puntuales bien resueltos, como "Vacaciones" en la gestión de agenda — una base sólida para resolver, además, uno de los hallazgos que se abordan en el Diagnóstico 3/3.

**Párrafo de cierre (borrador):**

> Más allá de tratarse de un producto desarrollado íntegramente con inteligencia artificial, la evaluación se encontró con una aplicación web sólida, completa y funcional, que cubre de punta a punta los flujos centrales de un producto de telemedicina —desde el triaje y matching con un profesional hasta el pago, la videoconsulta y la gestión de agenda—. Se destaca, en particular, un nivel de accesibilidad por teclado notablemente por encima del promedio en varias pantallas, junto con múltiples funciones adicionales —diario emocional, indicadores de práctica, gestión de vacaciones y disponibilidad, reportes de acompañamiento, entre otras— que la posicionan muy por encima de un simple MVP.

*(Nota de armado: esta selección se puede ajustar en extensión — hoy son ~3-5 puntos por portal, se puede recortar más si el diseño final de la diapositiva lo pide.)*

---

## Slide 4 — Diagnóstico 1/3: Resolución de hallazgos + low-hanging fruit

**Dimensiones del UX Honeycomb en el encabezado del slide:** Usabilidad · Encontrabilidad · Confiabilidad

**Texto del slide (versión final):**

> Entre la lista de hallazgos existe un grupo de temas cuyo abordaje se recomienda priorizar e incluye dos categorías de hallazgos diferentes:
>
> 1. **Críticos:** son problemas de severidad alta que comprometen la funcionalidad de la aplicación y, en su mayoría, consisten en arreglos puntuales y aislados. Por ejemplo: manejo de la vigencia de las sesiones del usuario, discrepancias en los montos a cobrar, asignación de profesionales, etc.
> 2. **Low-hanging fruit:** se trata de correcciones de esfuerzo de desarrollo bajo, con alto impacto percibido y que no requieren modificaciones de los flujos actuales. Por ejemplo: errores de ortografía o reemplazo de palabras, controles de la UI redundantes, etc.

*(Nota: esta versión resume con ejemplos, no con la lista exhaustiva que se manejó en borradores anteriores — el detalle completo de cada hallazgo, con severidad, heurística y evidencia, sigue disponible en el informe web/bitácora. También resuelve la nota pendiente sobre los "otros hallazgos funcionales relevantes": quedan comprendidos como ejemplos dentro de "Críticos" o "Low-hanging fruit", sin una tercera categoría aparte.)*

---

## Slide 5 — Diagnóstico 2/3: Identidad de MotivarCare y Design System

**Dimensiones del UX Honeycomb en el encabezado del slide:** Deseabilidad · Confiabilidad

**Texto del slide (versión final):**

> En un segundo nivel se ubican los hallazgos que son síntoma de una identidad visual fragmentada entre los portales, y todavía no del todo definida —en gran medida, por la ausencia de un sistema de diseño único y coherente— (el "Design System").
>
> Parte de este problema puede explicarse, también, por tratarse de un producto construido con herramientas de IA, que tienden a resolver las decisiones visuales por default con patrones mainstream, poco distintivos de marca.
>
> Pero la fragmentación no es solo una cuestión de cara externa entre portales: las inconsistencias en decisiones gráficas puntuales —por ejemplo, el tratamiento de los botones— aparecen también dentro de un mismo portal.
>
> De ahí que el trabajo a encarar tenga dos frentes:
> - Identidad del producto
> - Elaboración de un "Design System"

Se conecta directamente con la Fase 2 del roadmap.

---

## Slide 6 — Diagnóstico 3/3: Rediseños de flujos clave

**Dimensiones del UX Honeycomb en el encabezado del slide:** Usabilidad · Accesibilidad · Valor

**Texto del slide (versión final):**

> Finalmente, se propone revisar los flujos centrales del paciente y del profesional, ya no como ajustes puntuales ni para garantizar consistencia visual, sino para poner a prueba —y eventualmente rediseñar— los puntos que hoy podrían estar generando cierta fricción o riesgo.
>
> Una herramienta útil en este sentido es la "Prueba de usuario" como complemento de la auditoría heurística realizada (la evaluación experta según las heurísticas de Nielsen), pero quizás acotada a las siguientes áreas:
>
> 1. Del lado del paciente, la Home Page (que hoy convive en dos versiones redundantes), la asignación de profesionales y el seguimiento de pagos son los flujos con mayor margen de mejora.
> 2. Del lado del profesional, el circuito se concentra en tres puntos: la visualización y organización del Dashboard, la gestión de la agenda y el flujo de pagos.

*(Nota: esta versión ya no menciona explícitamente la falla intermitente del flujo de "alta profesional" como ítem propio, y ya se resolvió por qué: no es un rediseño de flujo, va en la Fase 1 del roadmap —"Estabilización & Ajustes Rápidos"— junto con el resto de los hallazgos de confiabilidad que no requieren repensar el flujo de punta a punta, solo corregirlo.)*

---

## Slide 7 — Roadmap: estrategia de abordaje

Diapositiva introductoria. Con el diagnóstico ya organizado en 3 bloques (slides 4-6) y las 4 fases definidas, la lógica que las conecta es aproximadamente esta (a pulir la redacción final):

> Como vimos en el diagnóstico, agrupamos lo relevado en 3 grandes bloques — hallazgos puntuales a resolver, identidad de marca, y rediseño de flujos — que ahora se traducen en 4 fases de ejecución, ordenadas combinando dos criterios: **urgencia** (lo que representa mayor riesgo primero) y **esfuerzo** (lo más rápido de resolver, primero dentro de cada bloque). En concreto:
> 1. Primero, **estabilización y ajustes rápidos** (Fase 1): los hallazgos Críticos y una selección de Mayores no admiten espera, porque afectan directamente la confianza, la facturación o la seguridad del paciente — se resuelven junto con el low-hanging fruit, como acelerador de la misma fase.
> 2. Con lo urgente resuelto, invertir en una base sólida de **identidad y Design System** (Fase 2) que unifique la marca entre los 3 portales — una inversión que además simplifica y acelera las dos fases siguientes.
> 3. Recién ahí abordar los **rediseños de flujo** más profundos, empezando por una **prueba de usuario y el rediseño de los flujos del paciente** (Fase 3, mayor impacto directo en conversión/retención) y cerrando con el **rediseño de flujos del profesional** (Fase 4, impacto más operativo que de negocio directo).

*(Esta narrativa es un primer borrador — se termina de ajustar una vez cerrado el detalle de cada fase y el horizonte de tiempo. La duda sobre dónde ubicar los "otros hallazgos funcionales relevantes" ya quedó resuelta con el texto final de la Slide 4: quedan comprendidos como ejemplos dentro de la Fase 1, sin necesidad de una mención aparte.)*

---

## Slide 8 — Roadmap: fases (vista general)

| Fase | Nombre | Qué incluye (resumen) |
|---|---|---|
| 1 | Estabilización & Ajustes Rápidos | Los hallazgos Críticos y una selección de Mayores, más el low-hanging fruit como acelerador — la base de usabilidad, encontrabilidad y, sobre todo, confiabilidad de la plataforma |
| 2 | Identidad y Design System | Unificación de marca entre los 3 portales (logo, paleta, tipografía, jerarquía de botones) — conecta con la Slide 5 |
| 3 | Prueba de usuario y rediseño de flujos del paciente | Validar y, a partir de eso, rediseñar los flujos con mayor margen de mejora del lado del paciente (Home, selección/compra de paquetes) |
| 4 | Rediseño de flujos del profesional | Rediseño del modelo de disponibilidad/agenda (exclusiones persistentes), la visualización y organización del Dashboard, y el flujo de pagos |

---

## Slide 9 a 12 — Una diapositiva por fase

Estructura sugerida para cada una (a confirmar): **Qué incluye** (hallazgos puntuales que agrupa y/o alcance más amplio de la iniciativa) · **Por qué esta prioridad/etapa** · **Horizonte de tiempo estimado** · **Cómo se ve el éxito** (opcional). La Fase 1 es la excepción: en lugar de esos bullets, tiene el texto de slide confirmado como párrafo (ver más abajo), a pedido explícito de Gastón de no enumerar ni entrar en tanto detalle en esa diapositiva.

### Fase 1 — Estabilización & Ajustes Rápidos
**Texto del slide (versión confirmada):**

> La primera fase, "Estabilización & Ajustes Rápidos", agrupa las correcciones de mayor prioridad de la auditoría —los hallazgos Críticos y una selección de Mayores— junto con un conjunto de ajustes menores de bajo esfuerzo y alto impacto que se resuelven en paralelo. Es, ante todo, una fase de base: no busca rediseñar flujos ni redefinir identidad, sino asegurar que la plataforma sea usable y encontrable en lo cotidiano y, sobre todo, confiable —que lo que promete (una sesión reservada, un pago acreditado, una cuenta segura) efectivamente ocurra tal como se espera—. En un producto de salud mental, esa confiabilidad no es un detalle técnico: es la condición mínima para que la experiencia resulte creíble.

- **Horizonte de tiempo estimado:** *(a definir — sugerido: primeras semanas, por tratarse de correcciones puntuales y no de rediseños)*

*(Nota: por si sirve como referencia interna —no necesariamente para el slide—, esta fase abarca hallazgos de varias áreas: manejo de sesiones entre navegador y servidor, asignación de profesionales y contratación de paquetes del lado del paciente, alta de nuevos profesionales en la plataforma, la pantalla de administración de la cuenta del paciente, y el low-hanging fruit del Diagnóstico 1/3 como acelerador.)*

### Fase 2 — Identidad y Design System
**Texto del slide (versión confirmada):**

> La segunda fase, "Identidad y Design System", apunta a resolver la fragmentación visual detectada entre los tres portales mediante un sistema de diseño único y coherente. Trabaja, ante todo, sobre lo deseable —una identidad de marca consistente, que transmita los valores de MotivarCare de punta a punta— y, en la misma medida, sobre lo confiable: una marca fragmentada erosiona la confianza que un producto de salud mental necesita construir desde el primer contacto. Es, además, la base visual sobre la que se apoyan las dos fases siguientes.

- **Qué incluye:** unificación del logo entre los 3 portales, unificación de paleta de colores, estilo de marca para la página de "Líneas de apoyo", y jerarquía visual de botones (el botón "Cuenta" que hoy se confunde con el CTA principal). Podría tomar como punto de partida la identidad "Dossier Clínico Pericial" ya definida para el informe HTML, o definirse desde cero — **pendiente de decisión**, tal como se viene charlando.
- **Por qué esta prioridad:** una base de marca consolidada simplifica y acelera las Fases 3 y 4.
- **Horizonte de tiempo estimado:** *(a definir)*

### Fases 3 y 4 — Texto compartido

**Texto del slide (versión confirmada, compartido entre la Slide 11 — Fase 3 — y la Slide 12 — Fase 4):**

> Las fases 3 y 4 —del lado del paciente y del profesional, respectivamente— comparten una misma lógica: antes de rediseñar, poner a prueba. La propuesta de ajuste o rediseño de cada flujo surge de una prueba de usuario acotada a los puntos con mayor margen de mejora, y no de una intuición de diseño aislada. El objetivo es asegurar, ante todo, que la plataforma sea usable y accesible en el día a día, y que esa base sostenga la propuesta de valor del producto en su conjunto —tanto para quien busca atención como para quien la brinda.

*(Nota: este texto va, tal cual, en las dos diapositivas —Slide 11 y Slide 12— como marco compartido. Cada una además tiene su propio detalle específico, que queda abajo en "Qué incluye".)*

### Fase 3 — Prueba de usuario y rediseño de flujos del paciente
- **Qué incluye:** a partir de una prueba de usuario acotada a estos flujos, unificación de las dos versiones de la Home que hoy coexisten, y rediseño del flujo de selección/compra de paquetes de punta a punta (más allá del fix puntual del monto, ya resuelto en la Fase 1, incorporando también la resolución del botón "Comprar" preseleccionado en móvil) y de la asignación de profesionales.
- **Por qué esta prioridad:** mayor impacto directo en conversión y retención de pacientes, la variable de negocio más sensible.
- **Horizonte de tiempo estimado:** *(a definir)*

### Fase 4 — Rediseño de flujos del profesional
- **Qué incluye:** rediseño del modelo de disponibilidad/agenda para modelar las bajas como exclusiones persistentes (en línea con el mecanismo de "Vacaciones", que ya funciona bien), y revisión de la visualización y organización del Dashboard y del flujo de pagos.
- **Por qué esta prioridad:** impacto más operativo (eficiencia del profesional) que de negocio directo, por eso va después del rediseño del lado paciente.
- **Horizonte de tiempo estimado:** *(a definir)*

---

## Slide 13 — Cierre

**Pendiente de redactar.** Posible contenido: síntesis de 1-2 líneas del diagnóstico general, llamado a la acción sobre el roadmap, y/o próximos pasos concretos (por ejemplo, agendar una sesión de trabajo por fase). A definir junto con el resto del roadmap.

---

## Pendientes

- [ ] **Confirmar si hace falta un slide propio para el UX Honeycomb** (las 7 dimensiones), o si alcanza con que sus nombres etiqueten los encabezados de los 3 slides de diagnóstico, como quedó en la versión final — ¿lo dejamos así o agregamos una diapositiva aparte que presente el marco completo?
- [ ] Definir horizonte de tiempo estimado para cada fase (slides 9-12).
- [ ] Decidir si el Design System de la Fase 2 (y del deck en general) parte de la identidad "Dossier Clínico Pericial" del informe HTML o se define desde cero — placeholder pendiente, según lo acordado.
- [ ] Conseguir el logo de MotivarCare en alta resolución para la portada (slide 1) — ¿lo tenés a mano, o lo tomamos del sitio en vivo?
- [ ] Definir si hacen falta capturas/imágenes de evidencia puntuales para alguna diapositiva (por ejemplo, para ilustrar el hallazgo del checkout o el de zona horaria), y en ese caso agregarlas a `assets/`.
- [ ] Terminar de pulir la redacción de la Slide 7 (estrategia), hoy borrador, con el texto de la Fase 1 ya cerrado.
- [ ] Redactar la Slide 13 (cierre).
- [ ] Los párrafos de texto de las 4 fases (slides 9 a 12) ya quedaron cerrados ✅ — Fase 1 y Fase 2 con texto propio cada una, Fase 3 y Fase 4 comparten el mismo texto. Falta sumarlos también, si corresponde, a la Slide 8 (vista general) o dejar ahí solo el resumen corto ya escrito.
