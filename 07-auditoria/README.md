---
titulo: Auditoría
numero: "07"
estado: en-curso
resumen: "Auditoría UX de la plataforma en producción, con las heurísticas de Nielsen adaptadas a la salud mental digital. 10 casos registrados en la bitácora."
actualizado: 2026-10-14
proximos_pasos:
  - "Seguir con la auditoría caso por caso."
  - "Pasar al informe los hallazgos de cada caso cerrado."
iniciativas:
  - titulo: Informe de auditoría UX
    tipo: Informe web
    fecha: Septiembre 2026
    estado: en-curso
    descripcion: "Informe interactivo con el diagnóstico de la experiencia de usuario de MotivarCare en sus tres entornos (landing, app del paciente y portal del profesional): resumen ejecutivo, hallazgos por área y severidad, y el detalle de cada caso con sus capturas."
    imagen: /img/auditoria/informe-auditoria.jpg
    enlace: https://motivarcare.github.io/motivarcare-audit/
    boton: Ver el informe
---

# 07 · Auditoría

Auditoría UX de la plataforma en producción (heurísticas de Nielsen adaptadas a salud mental digital).

## Informe web

El informe está en el repositorio [`motivarcare/motivarcare-audit`](https://github.com/motivarcare/motivarcare-audit) y se publica en https://motivarcare.github.io/motivarcare-audit/ con cada push a `main`. Los hallazgos de cada caso se pasan al informe cuando el caso se cierra.

## Contenido

| Elemento | Qué es |
|---|---|
| `bitacora-auditoria-ux/` | Registro caso por caso (`caso-NN-slug/`), con el `.md` de cada caso y su carpeta `capturas/`. Es la fuente de verdad de los hallazgos. |
| `auditoria-ux.md` | Documento general de la auditoría |
| `contexto.md` | Contexto del proyecto de auditoría: objetivos, audiencia, dirección de arte y metodología |
| `presentacion-auditoria-ux/` | Guion y recursos de la presentación de la auditoría |
| `exploracion/` | Propuestas de estilo y mockups previos del informe |
| `medios/` | Logos e imágenes generales (las referencias de estilo están en `exploracion/medios/`) |
| `Claude outputs/` | Archivos sueltos de trabajo: una variante de botón para la tarjeta "Tu profesional" (caso 03) y un .zip con la actualización del informe del caso 02 |
