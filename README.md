<p align="center">
  <img src="web/public/favicon.svg" alt="Logo de MotivarCare" width="96">
</p>

<h1 align="center">MotivarCare</h1>

<p align="center">Espacio de trabajo sobre la plataforma <a href="https://www.motivarcare.com/">MotivarCare</a>, de salud mental digital.</p>

---

## Organización

Cada frente de trabajo tiene su carpeta. El `README.md` de cada una explica qué contiene.

| Carpeta | Contenido |
|---|---|
| [`00-resumen`](00-resumen) | Presentación general del proyecto |
| [`01-investigacion`](01-investigacion) | Investigación de usuarios, mercado y competencia |
| [`02-comercial`](02-comercial) | Plan de negocio, investor deck y modelo de negocio |
| [`04-design-system`](04-design-system) | Lenguaje visual de la plataforma |
| [`05-diseno`](05-diseno) | Flujos, pantallas y prototipos |
| [`06-desarrollo`](06-desarrollo) | Especificaciones técnicas e implementación |
| [`07-auditoria`](07-auditoria) | Auditoría UX de la plataforma en producción |
| [`08-pruebas`](08-pruebas) | Pruebas de usabilidad y QA |
| [`09-marketing`](09-marketing) | Estrategia, contenidos y campañas |
| [`web`](web) | Portal interno que muestra el trabajo de cada frente |

El archivo [`contexto.md`](contexto.md) reúne las decisiones generales y la forma de trabajo.

## Portal interno

El portal arma sus páginas a partir de los archivos `.md` del repositorio. Para verlo en tu computadora:

```bash
cd web
npm install
npm run dev
```
