# Caso 01 — Landing Page: consistencia de composición, tipografía y color (escritorio, tablet y móvil)

1. **Número de caso:** 01
2. **Título:** Landing Page pública — consistencia visual (composición, tipografía y color) en escritorio, tablet y móvil
3. **Estado:** Completado — cubre las pasadas en escritorio, tablet y móvil (ver punto 11 por pendientes que exceden el alcance de este caso)
4. **Área de evaluación:** Landing Page Pública
5. **Severidad:** Ver hallazgos (el caso incluye más de un hallazgo, cada uno con su propia severidad)
6. **Descripción del caso:**
   Recorrido completo de la landing pública (`https://www.motivarcare.com/`) navegado bajo el perfil de **usuario no registrado**, en tres pasadas: modo escritorio (ventana de 1440×900, con Chrome), modo tablet (768×1024, recorrido y evaluado con el navegador integrado, con capturas de evidencia puntuales tomadas con Chrome) y modo móvil (375×812, pasada rápida de cierre — ver punto 9). El foco de las tres pasadas es específicamente la **consistencia de las decisiones de composición**, la **paleta de color** y las **elecciones tipográficas** a lo largo de toda la página — no se evaluó la interacción con el widget de chat "Escribirle a Maca" (fuera de alcance, según lo indicado).
7. **Heurística:** Ver hallazgos
8. **Clasificación:** Ver hallazgos
9. **Pasos y hallazgos:**

   **Pasos realizados:**
   1. Se abrió `www.motivarcare.com` en Chrome, con la ventana redimensionada a 1440×900 (resolución de escritorio).
   2. Se recorrió la página de punta a punta mediante scroll progresivo, capturando cada sección: hero, tarjetas destacadas, "Psicólogos certificados", "Cuatro pasos para empezar", "¿Quiénes somos?", Maca (asistente IA), Precios, Reviews, FAQ y footer.
   3. Se inspeccionaron con zoom los elementos que mostraban variaciones visuales entre sí.
   4. A partir de la revisión manual del Evaluador UX, se navegó además `app.motivarcare.com` y `pro.motivarcare.com` únicamente para comparar el logo de cabecera de cada portal (sin evaluar el resto de esos portales, que corresponde a casos aparte).
   5. No se interactuó con el widget de chat "Escribirle a Maca" (se deja para un caso aparte).
   6. **Pasada en tablet:** se repitió el recorrido de `www.motivarcare.com` con viewport emulado de 768×1024, usando el **navegador integrado** para el relevamiento y la evaluación. Se recorrió la página de punta a punta (hero, tarjetas destacadas, "Psicólogos certificados", "Cuatro pasos para empezar", "¿Quiénes somos?", Maca, Precios, Reviews, FAQ y footer), verificando si los 4 hallazgos de la pasada de escritorio se replican y si aparecen inconsistencias nuevas propias de este breakpoint.
   7. Para los puntos que requerían quedar documentados con una captura guardada, se abrió el mismo sitio con el mismo viewport (768×1024) en **Chrome**, ya que el navegador integrado no tiene forma de guardar capturas como archivo (ver `../../auditoria-ux.md`, sección 6).
   8. **Pasada rápida en móvil (cierre del caso):** a pedido del Evaluador UX, se hizo una revisión rápida en modo móvil (375×812, navegador integrado) **sin volver a evaluar uno por uno** los hallazgos ya confirmados en escritorio/tablet — el Evaluador UX confirmó que todo lo reportado para tablet se verifica también en móvil —, buscando únicamente inconsistencias nuevas propias de este breakpoint. Ver nota metodológica sobre esta pasada al final de este punto.
   9. Durante esa revisión, el navegador integrado mostró texto y títulos cortados/truncados en el borde derecho en varias secciones (tarjetas destacadas, "Psicólogos certificados", "¿Quiénes somos?", Precios). Al verificar el mismo recorrido en **Chrome** con una ventana real de 375×812, el texto se ve completo y bien ajustado en todas esas secciones — no se reproduce el corte. Se concluye que fue un artefacto de la emulación de viewport móvil del navegador integrado (posiblemente no dispara correctamente el comportamiento responsive/JS del sitio), no un problema real del sitio, y **no se documenta como hallazgo**. Se deja registrada esta limitación en `../../auditoria-ux.md`, sección 6, para pasadas futuras en móvil: conviene verificar en Chrome antes de dar por válida una observación vista solo en el navegador integrado a este ancho.

   ---

   ### Hallazgo 1 — El logo "MotivarCare" tiene 3 tratamientos distintos entre la landing, la app del paciente y el portal del profesional
   - **Heurística:** H4 — Consistencia y estándares
   - **Severidad:** Mayor
   - **Clasificación:** Identidad visual
   - **Viewport:** Escritorio (1440×900)
   - **Descripción:** El isotipo + wordmark de MotivarCare aparece con un tratamiento diferente entre la landing y la app del paciente:
     - **Landing (`www.motivarcare.com`):** ícono de corazón en outline con degradado azul→verde-azulado, wordmark en dos colores ("motivar" en azul oscuro + "care" en verde-azulado) y tagline "TU BIENESTAR, SIN ESPERAS" debajo.
     - **App del paciente (`app.motivarcare.com`):** ícono de corazón sólido con línea de latido, en color índigo/violeta liso (sin degradado), wordmark "MotivarCare" en una sola palabra y un solo color (índigo), sin tagline.
     Son 2 combinaciones distintas de ícono, color y tipografía para la misma marca, en 2 de las puertas de entrada al producto.

     *Nota:* también se navegó `pro.motivarcare.com`, pero solo se llegó a la pantalla de acceso (sin autenticarse como profesional), que muestra un ícono acompañado del texto "Portal Profesional" en lugar del wordmark de marca. Como no se pudo verificar el logo real dentro del portal (requiere sesión de profesional), no se incluye ese dato como parte de este hallazgo — queda pendiente (ver punto 11).
   - **Evidencia:** `capturas/hallazgo-logo-landing.png`, `capturas/hallazgo-logo-app-paciente.png`
   - **Recomendación:** Definir un único lockup de marca (mismo ícono, mismos colores/degradado, misma tipografía y mismo criterio de tagline) y aplicarlo sin variaciones entre la landing y la app del paciente. Extender la revisión al portal del profesional una vez que se pueda acceder autenticado.

   ---

   ### Hallazgo 2 — Elementos sin función clara superpuestos a la fotografía de portada (hero)
   - **Heurística:** H8 — Estética sobria y minimalismo antiestrés
   - **Severidad:** Menor
   - **Clasificación:** Identidad visual
   - **Viewport:** Escritorio (1440×900)
   - **Descripción:** Dos observaciones sobre la imagen de portada del hero:
     1. Una línea diagonal punteada blanca atraviesa el rostro de la persona en la fotografía, sin una función aparente (no es parte de una animación con propósito visible, ni un elemento interactivo).
     2. Sobre la fotografía se apoya un panel blanco con degradado a transparente, pensado para dar legibilidad al texto — pero ese panel tiene una altura menor a la de la fotografía completa, lo que genera un quiebre visual entre el panel y el resto de la imagen.
   - **Evidencia:** `capturas/hallazgo-hero-linea-punteada.jpg` (línea punteada sobre el rostro), `capturas/hallazgo-hero-panel-vs-foto.jpg` (borde inferior del panel vs. borde inferior de la foto)
   - **Recomendación:** Quitar la línea punteada si no cumple una función, o darle un propósito visual claro. Extender el panel de contraste a la altura completa de la fotografía (o rediseñar la superposición) para eliminar el quiebre visual entre ambos.
   - **Verificación en tablet (768×1024):** **no se replica.** A este ancho el hero cambia de composición: la fotografía ocupa el ancho completo sin ningún panel superpuesto ni línea punteada, y el título/texto pasan a ubicarse debajo de la imagen, sobre fondo plano. Es un patrón distinto al de escritorio, no una variación del mismo problema — no corresponde marcarlo como el mismo hallazgo en este viewport. Evidencia: `capturas/01-hero-general-tablet.jpg`.
   - **Verificación en móvil (375×812):** sigue sin replicarse, confirmado por el Evaluador UX (el hero mantiene la composición de tablet: foto completa, sin panel ni línea punteada).

   ---

   ### Hallazgo 3 — Varias fotografías de personas se perciben artificiales / poco creíbles
   - **Heurística:** H2 — Coincidencia con el mundo real
   - **Severidad:** Recomendación
   - **Clasificación:** Identidad visual
   - **Viewport:** Escritorio (1440×900)
   - **Descripción:** Varias de las fotografías de personas usadas en la landing (portada del hero, "¿Quiénes somos?", "Psicólogos certificados") tienen una apariencia muy pulida y artificial, compatible con imágenes generadas por IA o banco de stock genérico. En un producto de salud mental, donde la confianza humana es un factor central de conversión, esto puede jugar en contra de la credibilidad percibida.
   - **Evidencia:** `capturas/01-hero-general.jpg`, `capturas/03-psicologos-certificados-general.jpg`, `capturas/04-quienes-somos-general.jpg`
   - **Recomendación:** Evaluar el reemplazo progresivo de estas imágenes por fotografía real (de pacientes/profesionales, con los consentimientos correspondientes) o por banco de imágenes con un grado de naturalidad mayor, priorizando la pieza más visible: la foto del hero.
   - **Verificación en tablet (768×1024):** **se replica sin cambios** — son las mismas fotografías, reutilizadas tal cual entre breakpoints, por lo que el problema (y la evidencia) es el mismo. Confirmado visualmente sobre `capturas/01-hero-general-tablet.jpg` y `capturas/03-psicologos-certificados-general-tablet.jpg`.
   - **Verificación en móvil (375×812):** se replica, confirmado por el Evaluador UX.

   ---

   ### Hallazgo 4 — Scroll horizontal interno en el carrusel de Reviews
   - **Heurística:** H4 — Consistencia y estándares
   - **Severidad:** Menor
   - **Clasificación:** Usabilidad
   - **Viewport:** Escritorio (1440×900)
   - **Descripción:** La sección "Reviews" muestra las tarjetas de testimonios dentro de un contenedor con su propia scrollbar horizontal, visible de forma permanente debajo de las tarjetas. Es el único punto de la página con un scroll interno propio (inner scroll) — el resto del sitio se navega únicamente con el scroll vertical de la ventana —, lo que rompe el patrón de navegación esperado y puede pasar desapercibido o resultar incómodo en dispositivos sin scroll horizontal nativo (por ejemplo, mouse sin rueda lateral).
   - **Evidencia:** `capturas/hallazgo-reviews-scroll-horizontal.jpg`
   - **Recomendación:** Ocultar la scrollbar nativa y depender únicamente de las flechas de navegación que ya existen arriba a la derecha de la sección, o reemplazar el patrón por un carrusel con paginación (dots) sin scrollbar visible.
   - **Verificación en tablet (768×1024):** **se replica.** El contenedor de Reviews sigue mostrando su propia scrollbar horizontal (la tercera tarjeta queda parcialmente cortada por el borde del viewport), con el mismo comportamiento que en escritorio. Evidencia: `capturas/hallazgo-reviews-scroll-horizontal-tablet.jpg`.
   - **Verificación en móvil (375×812):** se replica, confirmado por el Evaluador UX y observado también por Claude durante la pasada rápida (2 tarjetas visibles y la tercera cortada por el borde, mismo patrón).

   ---

   ### Hallazgo 5 — En tablet, la grilla de tarjetas destacadas deja un ítem huérfano con un hueco vacío al lado
   - **Heurística:** H4 — Consistencia y estándares
   - **Severidad:** Recomendación
   - **Clasificación:** Responsive
   - **Viewport:** Tablet (768×1024)
   - **Descripción:** La sección de tarjetas destacadas debajo del hero ("Desde cualquier lugar", "Conexión en minutos", "Inteligencia artificial a la medida", "Miles de psicólogos en Latinoamérica", "Acompañamiento que hace bien") tiene 5 tarjetas. En escritorio se acomodan en una grilla de varias columnas sin problema, pero en tablet la grilla pasa a 2 columnas: las primeras 4 tarjetas completan 2 filas parejas, y la quinta ("Acompañamiento que hace bien") queda sola en una tercera fila, con un espacio vacío grande a su derecha. No se detectó este mismo quiebre en la grilla de 2×2 de "Cuatro pasos para empezar" (esa sección tiene 4 ítems, número par, por lo que no genera huérfano) — es un problema puntual de esta sección por tener una cantidad impar de tarjetas.
   - **Evidencia:** `capturas/hallazgo-tablet-tarjeta-huerfana.jpg`
   - **Recomendación:** Para este breakpoint, evaluar alguna de estas opciones: pasar la grilla a 1 columna (evita el hueco, cada tarjeta ocupa el ancho completo), agregar una sexta tarjeta para volver el número par, o hacer que la última tarjeta ocupe el ancho completo de la fila cuando sobra sola.
   - **Verificación en móvil (375×812):** **no aplica.** En móvil la grilla pasa a 1 sola columna (las 5 tarjetas se apilan verticalmente), por lo que no queda ningún ítem huérfano ni hueco vacío — el problema es específico del layout de 2 columnas de tablet.

   ---

   ### Hallazgo 6 — Margen izquierdo escaso en el contenido alineado a la izquierda (header y sección "Maca · Cuando necesite hablar")
   - **Heurística:** H8 — Estética sobria y minimalismo antiestrés
   - **Severidad:** Menor
   - **Clasificación:** Identidad visual
   - **Viewport:** Tablet (768×1024)
   - **Descripción:** En los bloques de contenido alineados a la izquierda (no centrados), el margen respecto del borde izquierdo del viewport queda muy ajustado — aproximadamente 16px —, tanto para el logo del header como para el eyebrow, el título y el párrafo de la sección "Maca · Cuando necesite hablar". Ese margen se percibe más escaso que en el resto del sitio, donde buena parte del contenido está centrado o vive dentro de tarjetas con su propio padding interno (lo que da sensación de más "aire" alrededor, aunque el margen de página de base sea similar). Además, como el logo del header está tan pegado al borde y es de tamaño reducido, pierde presencia de marca.
   - **Evidencia:** `capturas/hallazgo-margen-header-logo-tablet.png` (logo del header), `capturas/hallazgo-margen-maca-seccion-tablet.jpg` (eyebrow, título y párrafo de la sección Maca)
   - **Recomendación:** Aumentar el margen/padding horizontal del contenido alineado a la izquierda (header y secciones tipo "Maca"), y evaluar agrandar levemente el isotipo + wordmark del header para darle más presencia.
   - **Verificación en móvil (375×812):** se replica, confirmado por el Evaluador UX.

10. **Feedback positivo:**
    - El botón de acción primario (`Ingresar`, `Comienza hoy en motivarcare.com`, `Reservar la primera sesión`) mantiene el mismo degradado azul→verde-azulado y la misma forma de píldora en todas las secciones relevadas: es el elemento más consistente de la página.
    - La sección "Psicólogos certificados" usa un set de íconos de línea coherente entre sí (formación, experiencia, compromiso).
    - El espaciado generoso entre secciones y la ausencia de elementos parpadeantes o intrusivos (fuera del widget de chat, no evaluado en este caso) están alineados con el criterio de "estética sobria y minimalismo antiestrés" (H8) esperable en un producto de salud mental.
    - El patrón de acordeón en FAQ es estándar y predecible; su color índigo/violeta, al usarse siempre de forma consistente entre sí, no se considera un problema (queda como parte válida de la paleta, en paralelo al degradado azul→verde-azulado usado en el resto del sitio).
    - En tablet, la grilla 2×2 de "Cuatro pasos para empezar" se adapta bien (4 tarjetas, sin huecos ni desbordes) — a diferencia de la grilla de 5 tarjetas destacadas (ver Hallazgo 5), acá el número par de ítems evita el problema.
    - En móvil, la grilla de 5 tarjetas destacadas pasa a 1 columna y resuelve sola el problema del Hallazgo 5 (sin ítems huérfanos ni huecos).

11. **Pendientes o próximos pasos:**
    - Verificar si el Hallazgo 6 (margen escaso en header/sección Maca) también se percibe en escritorio, ya que por ahora solo fue relevado y confirmado en tablet y móvil.
    - Evaluar en un caso aparte la interacción con el widget de chat "Escribirle a Maca" (excluido de este caso).
    - Validar con el equipo de producto/dirección cuál de los tratamientos de logo relevados (Hallazgo 1) debe tomarse como el oficial antes de unificar.
    - Verificar el logo real dentro de `pro.motivarcare.com` una vez que se cuente con una sesión autenticada como profesional (en este caso solo se pudo ver la pantalla de acceso, no el portal en sí).
    - Cuando se audite en profundidad `app.motivarcare.com` y `pro.motivarcare.com` (casos aparte), retomar la comparación de logo iniciada acá y ampliarla a otros elementos de marca (color primario, tipografía) de esos portales.

12. **Idioma:** Castellano

---

**Historial de revisión del caso** *(no forma parte de los 11 campos del formato — se registra acá como trazabilidad del proceso)*

- **2026-09-14 — Revisión del Evaluador UX sobre la primera versión del caso:** se dieron de baja los 4 hallazgos originales de esta pasada:
  - *"Tratamiento inconsistente del texto enfatizado en el H1"* — descartado: la variación de color/subrayado entre las 3 palabras se considera una decisión de diseño intencional, no un error.
  - *"Tipografía distinta en '¿Quiénes somos?'"* — descartado: verificado manualmente que toda la página usa la tipografía Montserrat; la lectura original era errónea.
  - *"Color índigo/violeta ajeno a la paleta en el FAQ"* — descartado: el esquema de color del sitio contempla dos familias en paralelo (degradado azul→verde-azulado, y violeta/índigo); mientras el índigo se use de forma consistente entre sí, no constituye un problema.
  - *"Tarjeta 'Inteligencia artificial a la medida' rompe el lenguaje fotográfico"* — descartado, no se considera un problema.
  - En su lugar, se incorporaron los 4 hallazgos nuevos que figuran arriba (logo inconsistente entre portales, elementos sin función clara en el hero, fotografías artificiales, scroll horizontal en Reviews), reportados directamente por el Evaluador UX y verificados/documentados con evidencia adicional (incluida una comparación del logo contra `app.motivarcare.com` y `pro.motivarcare.com`).
  - Las capturas de los 4 hallazgos descartados (`hallazgo-1-hero-titulo-color-subrayado.png`, `hallazgo-2-comparacion-tipografias-titulos.png`, `hallazgo-3-faq-chevrones-indigo-zoom.png`, `hallazgo-4-tarjeta-ia-vs-fotografica.png`) se conservan en `capturas/` únicamente como registro histórico; ya no están referenciadas por ningún hallazgo activo de este documento.

- **2026-09-14 — Segunda revisión del Evaluador UX:**
  - En el Hallazgo 1 (logo), se sacó el tercer bullet sobre `pro.motivarcare.com`: como no se navegó autenticado como profesional, lo que se había capturado era la pantalla de acceso (ícono + "Portal Profesional"), no el logo real del portal. El hallazgo queda acotado a la diferencia entre landing y app del paciente; la captura `hallazgo-logo-portal-profesional.png` se conserva en `capturas/` como registro histórico, ya no referenciada. Se agregó como pendiente verificar el logo real del portal profesional una vez que se pueda acceder autenticado.
  - Se sumaron 2 campos nuevos al formato de registro (ver `../../auditoria-ux.md`, sección 8): **Idioma** (campo 12, a nivel de caso) y **Viewport** (a nivel de cada hallazgo). Se completaron retroactivamente en este caso: Idioma = Castellano, y Viewport = Escritorio (1440×900) en los 4 hallazgos activos.

- **2026-09-14 — Pasada en tablet (768×1024):** se repitió el recorrido con el navegador integrado (evaluación) y Chrome (captura puntual de evidencia, único navegador de los dos con esa capacidad — ver `../../auditoria-ux.md`, sección 6). Resultado: el Hallazgo 3 (fotos artificiales) y el Hallazgo 4 (scroll horizontal en Reviews) se replican sin cambios; el Hallazgo 2 (línea punteada/panel del hero) **no se replica**, porque a este ancho el hero cambia de composición (foto de ancho completo, sin panel superpuesto, texto debajo en vez de superpuesto); el Hallazgo 1 (logo) no es aplicable a un viewport específico de la landing en sí. Se incorporó un hallazgo nuevo, propio de este breakpoint: la tarjeta huérfana en la grilla de 5 tarjetas destacadas (Hallazgo 5).

- **2026-09-14 — Hallazgo adicional reportado por el Evaluador UX:** se incorporó el Hallazgo 6 (margen izquierdo escaso en el header y en la sección "Maca · Cuando necesite hablar", con el logo del header además chico en relación a ese margen), detectado por el Evaluador UX en tablet y verificado/documentado por Claude con evidencia sobre ese mismo viewport (768×1024). Severidad: Menor, a pedido del Evaluador UX. Queda pendiente verificar si se replica en escritorio.

- **2026-09-14 — Pasada rápida en móvil (375×812) y cierre del caso:** a pedido del Evaluador UX, se hizo una revisión rápida en móvil sin reevaluar caso por caso los hallazgos ya confirmados — el Evaluador UX confirmó que todo lo reportado para tablet se verifica también en móvil (Hallazgos 1, 2 —no aplica—, 3, 4 y 6 quedan así confirmados para este viewport). Se detectó que el Hallazgo 5 (tarjeta huérfana) **no aplica en móvil**, porque la grilla pasa a 1 columna. Durante la revisión con el navegador integrado se observó texto cortado en varias secciones, pero al verificar en Chrome con una ventana real de 375×812 el texto se veía completo — se concluyó que fue un artefacto de la emulación de viewport móvil del navegador integrado y no se documentó como hallazgo (ver nota metodológica en `../../auditoria-ux.md`, sección 6, y detalle en el punto 9 de este documento). No se encontraron hallazgos nuevos genuinos en esta pasada. Con esto, el Caso 01 queda con **Estado: Completado** en sus 3 viewports.
