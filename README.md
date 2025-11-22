## **Proyecto:** Code & Coffee — Landing page de cafetería tech

**Descripción**
- **Propósito:** Página de aterrizaje moderna para una cafetería tech ficticia.
- **Objetivo:** Mostrar ambiente, bebidas y snacks destacados, y facilitar contacto/reserva.

**Características implementadas**
- **Navbar:** Barra con logo y enlaces a secciones (`Inicio`, `Nosotros`, `Menú`, `Galería`, `Contacto`).
- **Hero:** Imagen grande, nombre del restaurante y botones `Ver Menú` / `Reservar`.
- **Sobre Nosotros:** Breve historia y valores con feature boxes.
- **Menú Destacado:** 4 cards Bootstrap con bebidas/snacks, imagen, descripción y precio.
- **Galería:** Carrusel de Bootstrap con 5 imágenes y captions.
- **Formulario de Reservas:** Validación completa (Nombre, Email, Fecha, Número de personas, Teléfono, Mensaje).
- **Modal de Confirmación:** Se abre al enviar el formulario exitosamente ✅
- **Modal de Interés:** Al hacer clic en el corazón de un producto.
- **Footer:** Horario, dirección, teléfono, email y enlaces a redes.

**Estructura de archivos**
- `index.html` — página principal (estructura semántica HTML5 con header, nav, main, section, footer).
- `assets/css/styles.css` — estilos mínimos complementarios a Bootstrap.
- `assets/js/main.js` — JavaScript para validación de formulario y manejo de modales.
- `assets/img/` — carpeta para imágenes locales.
- `VERIFICACION_REQUISITOS.md` — Documento detallado de cumplimiento de todos los requisitos.

**Tecnologías**
- **Bootstrap 5** (CDN) — sistema de grillas y componentes responsivos.
- **Font Awesome** (CDN) — iconos profesionales.
- **HTML5 / CSS3 / JavaScript (vanilla)** — código optimizado para proyecto educativo.

**Componentes de Bootstrap utilizados**
✅ Navbar — Barra de navegación responsiva con collapse en móvil  
✅ Botones — Variantes (warning, outline-warning, lg, sm)  
✅ Cards — 4 cards de productos y feature boxes  
✅ Formularios — Validación nativa de HTML con Bootstrap styling  
✅ Modales — 2 modales diferentes (interés en producto y confirmación de éxito)  
✅ Carrusel — Galería automática con indicadores y controles  
✅ Grid System — Sistema responsivo con container, row, col-md-*, col-lg-*  
✅ Utilidades — Flexbox, espaciado, colores y alineación de Bootstrap

**Validación de Requisitos Fundamentales**
Para ver el cumplimiento detallado de TODOS los requisitos, consulta: [`VERIFICACION_REQUISITOS.md`](./VERIFICACION_REQUISITOS.md)

**Cómo ver el proyecto**

Opción 1 — Servidor local (recomendado):
```powershell
python -m http.server 5500
# Luego abrir: http://localhost:5500
```

Opción 2 — Live Server en VS Code:
Clic derecho en `index.html` → "Open with Live Server"

Opción 3 — Abrir directamente:
```powershell
Start-Process "index.html"
```

Opción 4 — GitHub Pages:
https://jlosses.github.io/EF-M2/

**Instrucciones de uso**
1. Navega por las secciones usando el menú superior
2. Explora los productos haciendo clic en los corazones
3. Completa el formulario con datos válidos
4. Al enviar correctamente, se abre un modal de confirmación verde ✅
5. Prueba en tu móvil redimensionando la ventana (F12)

**Créditos**
- Iconos: Font Awesome (CDN)
- Framework: Bootstrap 5
- Diseño web: Generado por GitHub Copilot
- Imágenes: imagenes generadas por Google Gemini.

**Licencia**
- Proyecto de ejemplo para aprendizaje educativo. Libre para uso en cursos. No comercial sin permiso.

**Autor**
- Proyecto creado por el estudiante José Luis Osses Martínez.
