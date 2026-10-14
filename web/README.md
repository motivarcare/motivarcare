# web · Portal interno

Portal de trabajo de MotivarCare. Muestra el estado de cada frente, sus documentos y sus materiales. **Todo el contenido sale de los archivos `.md` del repositorio**: al editar un `.md`, el portal se actualiza solo.

Está hecho con [Astro](https://astro.build/), con los estilos del investor deck (Fraunces + Manrope, crema, verdes bosque, salvia y acento amarillo).

## Cómo correrlo

Necesita Node.js 18.20.8 o más nuevo.

```bash
cd web
npm install      # solo la primera vez, o cuando cambie package.json
npm run dev      # abre el portal en http://localhost:4321
```

Con `npm run dev` andando, cualquier cambio en un `.md` (agregar, editar o borrar) se ve al instante en el navegador.

Otros comandos:

- `npm run build`: genera el sitio estático en `web/dist/`.
- `npm run preview`: sirve la versión generada para revisarla.

## De dónde sale cada página

| Página | Archivo |
|---|---|
| Inicio (`/`) | `00-resumen/index.md` |
| Página de cada frente (`/07-auditoria/`) | `README.md` de la carpeta del frente |
| Documentos de un frente | Cualquier otro `.md` dentro de la carpeta del frente, en cualquier subcarpeta |
| Materiales de un frente | Todos los archivos que no son `.md` (pptx, docx, imágenes, html…), con enlace a GitHub |
| Contexto (`/contexto/`) | `contexto.md` en la raíz |

### Encabezado (frontmatter) de cada frente

El `README.md` de cada frente empieza con este bloque. El portal lo usa para la tarjeta de la portada y la cabecera de la página:

```yaml
---
titulo: Auditoría
numero: "07"
estado: en-curso        # sin-iniciar | en-curso | en-revision | completado
resumen: "Una o dos frases sobre el frente."
actualizado: 2026-10-14
proximos_pasos:
  - "Primer paso pendiente."
  - "Segundo paso pendiente."
---
```

### Encabezado de la portada

```yaml
---
titulo: Título grande de la portada, con una *palabra* destacada
bajada: Frase que va debajo del título.
actualizado: 2026-10-14
---
```

La palabra entre `*asteriscos*` del título lleva el subrayado amarillo ondulante del investor deck.

### Documentos

Los documentos no necesitan encabezado. El título se toma del primer `# Título` del archivo. Opcionalmente se puede agregar:

```yaml
---
titulo: Título que reemplaza al del archivo
estado: en-revision
---
```

## Estructura del código

```
web/
├── astro.config.mjs        configuración (permite leer las carpetas del repo)
├── src/content.config.ts   qué .md se leen y qué campos lleva cada uno
├── src/lib/portal.ts       utilidades: estados, URLs, listado de materiales
├── src/layouts/Base.astro  estructura común: barra superior y pie
├── src/components/         logo, chip de estado, ilustración de la portada (la del investor deck), mapa de frentes
├── src/pages/              portada, página de frente, documento y contexto
├── src/styles/global.css   estilos (paleta y tipografía del investor deck)
└── public/img/             fotos intervenidas de la portada del investor deck
```
