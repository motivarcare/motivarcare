# Bitácora de Auditoría UX — MotivarCare

Esta carpeta contiene el registro caso por caso de la auditoría UX de MotivarCare. El proceso completo, la metodología y las decisiones de fondo están documentados en `../auditoria-ux.md`.

## Estructura

Cada caso propuesto por el Evaluador UX genera una subcarpeta propia:

```
caso-NN-<slug-descriptivo>/
├── caso-NN-<slug-descriptivo>.md   ← detalle y resultados del caso
└── capturas/                       ← screenshots de evidencia
```

## Valores definidos

**Estado del caso:**
1. En progreso
2. Completado
3. Parcial
4. Sin evaluación

**Severidad (por hallazgo):**
1. Crítica
2. Mayor
3. Menor
4. Recomendación
5. A revisar (probablemente no implique ninguna acción)

**Clasificación (por hallazgo, lista abierta — se amplía con el tiempo):**
1. Identidad visual
2. Usabilidad
3. Accesibilidad
4. Responsive
5. Otros

## Un caso puede tener 0, 1 o varios hallazgos

Son los **hallazgos** —no los casos— los que se listan en el informe web, cada uno vinculado a su caso de origen, área, severidad, clasificación, heurística y viewport. Por eso, dentro de "Pasos y hallazgos" cada hallazgo se documenta como un bloque individual (ver plantilla).

## Idioma y Viewport

- **Idioma** (campo 12): a nivel de todo el caso — ej. Castellano.
- **Viewport**: a nivel de cada hallazgo, no del caso — ej. Escritorio (1440×900), Tablet, Móvil. Un mismo caso puede ir sumando hallazgos de distintos viewports con el tiempo (por ejemplo: se abre en escritorio, y más adelante se agregan hallazgos de una pasada en tablet/móvil sobre ese mismo caso).

## Plantilla de caso

```markdown
# Caso NN — <Título>

1. **Número de caso:** NN
2. **Título:**
3. **Estado:** En progreso | Completado | Parcial | Sin evaluación
4. **Área de evaluación:** Landing Page Pública | Experiencia del Paciente | Experiencia del Profesional
5. **Severidad:** (solo si el caso tiene un único hallazgo; si tiene varios, dejar "Ver hallazgos")
6. **Descripción del caso:**
7. **Heurística:** (solo si el caso tiene un único hallazgo; si tiene varios, dejar "Ver hallazgos")
8. **Clasificación:** (solo si el caso tiene un único hallazgo; si tiene varios, dejar "Ver hallazgos")
9. **Pasos y hallazgos:**

   Pasos realizados durante la evaluación:
   - ...

   ### Hallazgo 1 — <Título del hallazgo>
   - **Heurística:** H0X — <nombre>
   - **Severidad:** Crítica | Mayor | Menor | Recomendación | A revisar
   - **Clasificación:** Identidad visual | Usabilidad | Accesibilidad | Responsive | Otros
   - **Viewport:** Escritorio (1440×900) | Tablet (<resolución>) | Móvil (<resolución>)
   - **Descripción:**
   - **Evidencia:** `capturas/<archivo>.png`
   - **Recomendación:**

   ### Hallazgo 2 — <Título del hallazgo>
   (repetir estructura por cada hallazgo adicional)

10. **Feedback positivo:**
11. **Pendientes o próximos pasos:**
12. **Idioma:** Castellano
```
