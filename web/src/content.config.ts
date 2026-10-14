import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Todo el contenido sale de los .md del repositorio (la carpeta padre de web/).
 * Astro vigila estas carpetas: al guardar un .md, el portal se actualiza solo.
 */

export const ESTADOS = ['sin-iniciar', 'en-curso', 'en-revision', 'completado'] as const;

// Portada del portal: 00-resumen/index.md
const resumen = defineCollection({
  loader: glob({ pattern: '*.md', base: '../00-resumen' }),
  schema: z.object({
    titulo: z.string(),
    bajada: z.string().default(''),
    actualizado: z.coerce.date().optional(),
  }),
});

// Ficha de cada frente: el README.md de cada carpeta NN-nombre/
const frentes = defineCollection({
  loader: glob({
    pattern: '0[1-9]-*/README.md',
    base: '..',
    generateId: ({ entry }) => entry.split('/')[0],
  }),
  schema: z.object({
    titulo: z.string(),
    numero: z.string(),
    estado: z.enum(ESTADOS).default('sin-iniciar'),
    resumen: z.string().default(''),
    actualizado: z.coerce.date().optional(),
    proximos_pasos: z.array(z.string()).default([]),
  }),
});

// Todos los .md dentro de cada frente (documentos de trabajo).
// Incluye el README principal de cada frente, que se filtra al usarla (ver esDocumento).
// No se usan patrones negativos: el vigilante de cambios los interpreta mal.
const documentos = defineCollection({
  loader: glob({
    pattern: '0[1-9]-*/**/*.md',
    base: '..',
    generateId: ({ entry }) => entry.replace(/\.md$/i, ''),
  }),
  schema: z
    .object({
      titulo: z.string().optional(),
      estado: z.enum(ESTADOS).optional(),
      resumen: z.string().optional(),
    })
    .passthrough(),
});

// Contexto general del proyecto: contexto.md en la raíz
const contexto = defineCollection({
  loader: glob({ pattern: 'contexto.md', base: '..' }),
});

export const collections = { resumen, frentes, documentos, contexto };
