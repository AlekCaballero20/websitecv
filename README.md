# Alek Caballero · Landing profesional

Landing page sencilla, oscura y responsive para presentar el perfil laboral de **Alek Caballero** en vacantes administrativas, operativas, de coordinación, asistencia virtual, soporte de procesos y roles remotos o flexibles.

El proyecto está pensado para publicarse fácilmente en **GitHub Pages**.

---

## Archivos del proyecto

```txt
alek-landing-profesional/
├── index.html
├── styles.css
├── app.js
├── README.md
└── Alek_Caballero_CV.pdf  ← opcional, debes agregarlo tú
```

---

## Qué incluye

- Landing de una sola página.
- Diseño oscuro con acentos azules.
- Navegación responsive.
- Menú móvil funcional.
- Animaciones suaves al hacer scroll.
- Botón de WhatsApp.
- Botón de correo.
- Botón para descargar CV.
- Secciones de perfil, aportes, experiencia, habilidades, proyectos y contacto.
- Código listo para GitHub Pages.

---

## Cómo editar tus datos

Abre `index.html` y busca estos textos:

### Nombre

```html
Alek Caballero
```

### Correo

```html
alekcaballeromusic@gmail.com
```

### WhatsApp

```html
573195477475
```

El enlace de WhatsApp usa este formato:

```html
https://wa.me/573195477475
```

Si cambias el número, recuerda mantener el indicativo de Colombia `57` y quitar espacios.

---

## Cómo agregar tu LinkedIn

En `index.html`, busca:

```html
https://www.linkedin.com/in/tu-usuario
```

Reemplázalo por tu enlace real.

También cambia el texto visible:

```html
linkedin.com/in/tu-usuario
```

---

## Cómo agregar tu CV descargable

Cuando tengas el PDF final de tu hoja de vida, renómbralo exactamente así:

```txt
Alek_Caballero_CV.pdf
```

Luego colócalo en la misma carpeta donde están `index.html`, `styles.css` y `app.js`.

El botón de descarga ya está preparado en el HTML:

```html
<a href="Alek_Caballero_CV.pdf" download>
```

---

## Cómo cambiar enlaces de proyectos

En la sección `Proyectos digitales`, por ahora los botones tienen:

```html
href="#"
```

Cuando tengas enlaces reales, reemplaza `#` por la URL del proyecto.

Ejemplo:

```html
<a href="https://tusitio.github.io/proyecto/" target="_blank" rel="noopener">
```

---

## Cómo subirlo a GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube estos archivos:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `Alek_Caballero_CV.pdf`, cuando ya tengas el CV final.
3. Entra a **Settings**.
4. Ve a **Pages**.
5. En **Branch**, selecciona:
   - `main`
   - `/root`
6. Guarda los cambios.
7. GitHub generará una URL parecida a:

```txt
https://tuusuario.github.io/nombre-del-repositorio/
```

---

## Recomendaciones

- No agregues cédula, dirección completa ni fecha de nacimiento.
- Mantén la web breve y profesional.
- Usa esta landing como complemento del CV, no como reemplazo.
- Actualiza los proyectos cuando tengas enlaces públicos reales.
- Revisa que el CV descargable esté en la raíz del proyecto y tenga el nombre correcto.

---

## Personalización visual

Los colores principales están en `styles.css`, dentro de `:root`.

Ejemplo:

```css
--c-bg: #080c14;
--c-blue: #0af;
--c-cyan: #4dfff3;
```

Puedes ajustar estos valores si quieres cambiar la estética sin tocar toda la hoja de estilos.

---

## Créditos

Perfil profesional de Alek Caballero.  
Bogotá, Colombia.
