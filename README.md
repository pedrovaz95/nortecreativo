# Nortecreativo

Sitio de Nortecreativo — creación de sitios web para pymes y diseño de
soluciones creativas con tecnología. Construido con [Astro](https://astro.build)
y desplegado en Cloudflare Pages.

## Cómo se trabaja este repo

Claude escribe el código y lo deja listo. Tú lo revisas en VS Code, y si
todo se ve bien, lo subes a GitHub. Cloudflare Pages está conectado al
repositorio y publica solo cada push a `main` — no hay que tocar nada más
para que el cambio quede en línea.

## Primeros pasos (una sola vez)

```bash
npm install
npm run dev
```

Abre `http://localhost:4321` para ver el sitio local.

## Comandos

| Comando           | Qué hace                                        |
| ------------------ | ------------------------------------------------ |
| `npm install`       | instala las dependencias                         |
| `npm run dev`        | corre el sitio en local, con recarga automática   |
| `npm run build`       | genera la versión de producción en `dist/`        |
| `npm run preview`      | sirve esa versión de producción en local          |

## Estructura

```
src/
  components/   piezas reutilizables (el logo, etc.)
  layouts/      el molde de cada página (header, footer)
  pages/        cada archivo .astro aquí es una URL del sitio
  styles/       tokens de marca — colores, tipografías
public/         archivos que se sirven tal cual (favicon, imágenes)
```

## Estado

Fase 3 del plan de trabajo (entorno): completa. El sitio no tiene todavía
contenido final — eso es la fase 2, sigue después de este setup.
