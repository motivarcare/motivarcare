---
titulo: Design system
numero: "04"
estado: en-curso
resumen: "Lenguaje visual común de MotivarCare: color, tipografía, logo, fotografía, patrones, componentes y movimiento. Primera versión, tomada de las decisiones del investor deck."
actualizado: 2026-10-14
proximos_pasos:
  - "Validar la paleta y la tipografía con el equipo de MotivarCare."
  - "Definir los estados de interacción (hover, foco, deshabilitado) y los formularios."
  - "Medir el contraste de cada combinación de color de texto y fondo y documentar las válidas."
  - "Llevar los componentes a la app del paciente y al portal del profesional."
  - "Publicar los tokens en un archivo reutilizable (CSS y JSON)."
---

# 04 · Design system

Lenguaje visual común para toda la plataforma MotivarCare: la landing pública, la app del paciente, el portal del profesional, los materiales comerciales y las herramientas internas.

**Versión 0.1 · octubre de 2026.** Las definiciones salen de las decisiones que se tomaron al diseñar el investor deck, y se generalizan acá para usarlas en toda la plataforma. Es una **propuesta de identidad**: la interfaz que hoy está en producción usa otra paleta (violeta `#5F44EB`) y otras fuentes (Inter y Plus Jakarta Sans), como quedó relevado en la auditoría UX. Pasar el producto a este sistema es parte del trabajo de este frente.

La página del portal de este frente muestra cada definición en forma visual. El texto de este archivo es la fuente: si cambia acá, cambia en el portal.

## Principios

1. **Calma antes que estímulo.** Quien llega a MotivarCare suele estar en un momento difícil. Fondos cálidos, mucho aire, pocos colores a la vez y movimiento lento.
2. **Lo humano primero.** La terapia la hace una persona. Las fotos muestran personas reales en situaciones cotidianas, y la IA (Maca) siempre se presenta como un apoyo, nunca como el centro.
3. **Sólido es lo que existe; punteado es lo provisorio.** El trazo sólido representa lo que existe hoy y lo humano o clínico. El trazo punteado, a veces con trama, representa lo provisorio, lo futuro o lo digital (IA). Se aplica a ilustraciones, tarjetas, chips y estados.
4. **Orgánico + geométrico.** Las formas orgánicas (curvas, ondas, manchas) se combinan siempre con elementos geométricos (círculos, rectas, grillas, ramas paralelas).
5. **Movimiento con propósito.** Una animación principal por pantalla, breve, que se repite al volver. Todo el movimiento se desactiva con la preferencia "reducir movimiento" del sistema.

## Color

La base es crema con tinta verde muy oscura. Los verdes bosque son el color de marca, las superficies salvia, menta y lima diferencian tarjetas, y el amarillo es el único acento.

### Base

| Token | Valor | Uso |
|---|---|---|
| crema | `#F5F3EB` | Fondo general de pantallas y páginas |
| superficie | `#FFFFFF` | Tarjetas blancas, controles y ventanas flotantes |
| tinta | `#1B2A23` | Texto principal |
| tinta-suave | `#5D6A63` | Texto secundario, bajadas y descripciones |
| tinta-tenue | `#8A958F` | Metadatos, pies y textos de apoyo |
| linea | `#E2DFD3` | Bordes y separadores |

### Marca

| Token | Valor | Uso |
|---|---|---|
| bosque | `#1E4033` | Color de marca. Títulos, botones primarios y fondos oscuros |
| bosque-2 | `#2A5543` | Variante para hover, énfasis en itálica y el corazón del logo sobre fondo oscuro |
| verde-medio | `#2F6B51` | Etiquetas, enlaces y el color único de los gráficos |
| bosque-claro | `#EAF1EC` | Texto sobre fondos bosque |

### Superficies

| Token | Valor | Uso |
|---|---|---|
| salvia | `#D6E7DC` | Tarjetas destacadas, manchas de fondo y sesiones en curso |
| menta | `#E7F1EA` | Tarjetas suaves, botones de control y paneles de notas |
| lima | `#E6EDC4` | Etiquetas de sección y tarjetas de contraste |
| lima-fuerte | `#C8D98A` | Bordes y etiquetas sobre fondo bosque |

### Acento

| Token | Valor | Uso |
|---|---|---|
| amarillo | `#F5C33B` | Único acento. Puntos destacados, subrayados, botón principal de una pantalla y "colgar" en la videollamada |
| amarillo-suave | `#FBE9B0` | Fondos de avisos, chips de "en revisión" y valores por definir |

El amarillo se usa con moderación: uno o dos puntos por pantalla. Sobre amarillo, el texto va siempre en tinta. Nunca se usa amarillo como color de texto sobre crema.

### Escala secuencial

Para etapas u órdenes. El más oscuro va primero.

| Token | Valor | Uso |
|---|---|---|
| etapa-1 | `#1E4033` | Primera etapa |
| etapa-2 | `#2F6B51` | Segunda etapa |
| etapa-3 | `#5E9677` | Tercera etapa |
| etapa-4 | `#8DBA9E` | Cuarta etapa |
| etapa-5 | `#B7CF95` | Quinta etapa |
| neutro | `#CFCAB9` | Lo que no aplica o no tiene etapa |

### Categóricos

Para identidades o ítems distintos entre sí, por ejemplo el color propio de cada terapeuta.

| Token | Valor | Uso |
|---|---|---|
| cat-amarillo | `#F5C33B` | Primera identidad |
| cat-salvia | `#9FC9AE` | Segunda identidad |
| cat-lima | `#E6EDC4` | Tercera identidad |

Para chips se usan las versiones claras: menta `#E7F1EA`, lima `#E6EDC4`, salvia `#D6E7DC` y amarillo suave `#FBE9B0`.

### Degradés

| Token | Valor | Uso |
|---|---|---|
| degrade-oscuro | `#1E4033` → `#2F6B51` → `#7FB394` | Logo sobre fondos claros |
| degrade-claro | `#BFDCC9` → `#DCEBDF` → `#E9F0C8` | Logo sobre fondos oscuros |

Los dos degradés van en diagonal, de abajo a la izquierda hacia arriba a la derecha.

## Tipografía

Dos familias: una serif moderna para títulos y una sans geométrica para leer y para la interfaz.

| Rol | Familia | Detalle |
|---|---|---|
| Títulos | Fraunces | Serif variable, eje SOFT en 60, pesos de 460 a 560 |
| Texto e interfaz | Manrope | Sans variable, pesos de 400 a 800 |
| Etiquetas | Manrope | Peso 700, mayúsculas, espaciado de 0,12 a 0,16 em |

### Escala

| Estilo | Familia | Tamaño | Interlineado | Peso |
|---|---|---|---|---|
| Display | Fraunces | 72–80 px | 1,02 | 460 |
| Título 1 | Fraunces | 53–58 px | 1,06 | 500 |
| Título 2 | Fraunces | 34 px | 1,12 | 500 |
| Título 3 | Fraunces | 24 px | 1,18 | 560 |
| Bajada | Manrope | 18–19 px | 1,5 | 400 |
| Cuerpo | Manrope | 16 px | 1,6 | 400 |
| Pequeño | Manrope | 14 px | 1,5 | 500 |
| Etiqueta | Manrope | 11,5–12 px | 1,4 | 700 |

En los títulos grandes, una palabra clave puede ir en itálica, en `bosque-2`, con un subrayado ondulante amarillo que se mueve lentamente (por ejemplo, "Terapia que se adapta al *ritmo* de cada persona"). Se usa una sola vez por pantalla.

## Logo

- El símbolo es un corazón de trazo continuo que termina en la "cola" de un globo de diálogo: escucha y conversación. Está redibujado en vector a partir del PNG original, **sin cambiar la forma**.
- Sobre fondos claros va con el `degrade-oscuro`. Sobre fondos oscuros, con el `degrade-claro`.
- Junto al símbolo va la palabra **MOTIVARCARE** en Manrope 800, en mayúsculas, con espaciado de 0,16 em y en color bosque.
- No se deforma, no se rota, no se le agregan sombras ni contornos, y no se cambia el degradé por otros colores.
- La forma de corazón con cola también se usa, en salvia y sin trazo, como mancha de fondo detrás de fotos y pantallas.

## Fotografía

- Personas reales en situaciones cotidianas y cálidas: la psicóloga en su consultorio y el paciente en su casa. Sin poses de banco de imágenes ni símbolos clínicos.
- **Tratamiento:** degradé diagonal bosque → salvia → amarillo en luz suave, con grano y una trama de puntos muy sutil. Se aplica igual a todas las fotos para que convivan.
- Las fotos se recortan al doble del tamaño en que se muestran, para que la trama tenga la misma escala en todas.
- Composición de referencia: la videollamada. Una ventana grande con la persona profesional, una ventana chica con el paciente y una barra de controles, sobre la mancha de corazón salvia.
- Escena de cierre: el paciente en su casa, cerrando la laptop al terminar la sesión, con la libreta abierta y una taza al lado. Transmite calma y continuidad después del encuentro.
- Escena en casa: una paciente en el sillón, con una taza y la sesión abierta en la laptop. Es la foto de los mockups de la landing y muestra la terapia integrada a la vida cotidiana.
- Las fotos actuales son generadas con Figma AI.

## Patrón visual

- Las ilustraciones son de línea y se integran al fondo de la tarjeta o de la pantalla. No van en recuadros ni se reemplazan por íconos convencionales.
- Trazo verde bosque con opacidad entre 0,22 y 0,42, de 1,2 a 1,8 px, con extremos redondeados.
- Siempre combinan una parte orgánica (curva, onda, mancha) con una geométrica (círculo, recta, grilla, ramas paralelas).
- **Texturas:** grano y trama de puntos. La trama se usa sobre manchas y fondos, y sobre lo punteado para reforzar "provisorio" o "IA".
- **Sólido** = existe hoy, humano, clínico. **Punteado** = provisorio, futuro, digital o IA.

## Iconografía

- Íconos de línea de 2 px de trazo, con extremos y uniones redondeados, sobre una grilla de 24 px.
- **Íconos sobre manchas:** una mancha orgánica de color, semitransparente y sin contorno, que se deforma muy lento en loop. El ícono va calado en línea crema (el color del fondo), con trazo limpio.
- No se usan emojis como íconos.

## Personas y sesiones

Lenguaje gráfico para representar pacientes, profesionales y sesiones en diagramas, calendarios y estados.

| Elemento | Representación |
|---|---|
| Paciente | Punto bosque sólido |
| Terapeuta | Círculo con contorno bosque y un relleno de color propio (mismo color = mismo terapeuta) |
| Sesión reservada | Par paciente–terapeuta dentro de un círculo punteado sin relleno |
| Sesión en curso | Círculo salvia con borde bosque, que late lento en loop |
| Sesión completada | Igual que en curso, con un tilde (círculo bosque con check crema) |
| Grupo amplio | Conjunto con contorno punteado |
| Subgrupo concreto | Conjunto con contorno sólido y relleno salvia |

- **Calendario:** grilla de 4 semanas × 7 días, con celdas 4:3 de esquinas redondeadas y sin caja alrededor. Tres estados: salvia con borde sólido y tilde (hecho), salvia con borde sólido (reservado) y solo contorno punteado (libre o futuro).
- **Listas de estado:** un ítem que existe lleva un círculo salvia con tilde. Uno pendiente lleva un círculo punteado vacío y el texto en gris.

## Formas y elevación

| Token | Valor | Uso |
|---|---|---|
| radio-grande | 24 px | Tarjetas grandes y paneles |
| radio-medio | 18 px | Tarjetas y filas |
| radio-chico | 10 px | Imágenes, notas y bloques de código |
| radio-pildora | 999 px | Botones, chips y etiquetas |

- **Sombras:** largas, suaves y teñidas de verde, solo para lo que flota (ventanas y controles), por ejemplo `0 30px 60px -28px` en bosque al 45 %. Las tarjetas no llevan sombra: se separan por color o por borde.
- **Mockups de producto:** la pantalla se dibuja como una ventana de navegador de línea bosque sobre una mancha salvia horizontal, con ventanitas flotantes que desbordan el marco. La de IA (Maca) va siempre con borde punteado.

## Componentes

- **Etiqueta de sección:** píldora lima con texto bosque en mayúsculas y un punto amarillo al inicio.
- **Botones:** el primario de cada pantalla es amarillo con texto bosque. Le siguen el bosque con texto bosque-claro y el de contorno, blanco con borde `linea`. Todos en píldora, de 44 px de alto.
- **Tarjetas:** blanca con borde, menta, salvia, lima y bosque (con texto claro). Lo provisorio se muestra como tarjeta sin relleno y con borde punteado.
- **Chips de estado:** sin iniciar (punteado y gris), en curso (salvia, con un punto que late), en revisión (amarillo suave) y completado (bosque con tilde).
- **Numeral:** círculo de 40 px con el número en Manrope 800. Sobre bosque, el círculo es amarillo.
- **Nota:** texto chico en tinta-suave con un círculo amarillo suave con la "i" al inicio.
- **Controles de videollamada:** botones redondos menta con ícono bosque. "Colgar" va en amarillo.

## Visualización de datos

- La paleta de marca no sirve para gráficos de cinco o más series: no pasa la validación para daltonismo.
- Por eso los gráficos usan **un solo color** (`#2F6B51`), con etiquetas directas sobre los datos, sin leyenda y con una grilla muy tenue.
- Para etapas u órdenes se usa la escala secuencial de verdes.

## Movimiento

| Animación | Duración | Uso |
|---|---|---|
| Entrada | 0,55–0,9 s | Aparición de bloques al entrar, con desplazamiento de 18 a 24 px hacia arriba |
| Latido | 2,4–2,8 s, en loop | Sesiones en curso y estado "en curso" |
| Barras de audio | 1,6 s, en loop | Indicador de que alguien habla en la videollamada |
| Subrayado ondulante | 4,8 s, en loop | Palabra clave del título |
| Mancha que respira | 14 s, en loop | Manchas de fondo e íconos sobre manchas |

- Una animación principal por pantalla. Se repite al volver a la pantalla.
- Curva de entrada `cubic-bezier(.2, .7, .2, 1)`. Los loops usan `ease-in-out`.
- Con "reducir movimiento" no hay animaciones: se muestra directamente el estado final.

## Aplicaciones

- **Investor deck (octubre de 2026):** es donde se definió este lenguaje. Las decisiones propias de cada slide se documentan en el frente Comercial (`02-comercial`).
- **Portal interno (`web/`):** usa la paleta, la tipografía, el logo, los chips de estado y la ilustración de portada.
- **Plataforma (landing, app del paciente y portal del profesional):** pendiente.
