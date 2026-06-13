# TechCam Solutions - Página Web de Servicios

Página web profesional para servicios de tecnología e instalación de cámaras. **100% personalizable**, fácil de modificar y lista para publicar.

## 🚀 Guía Rápida de Customización

### 1. **Cambiar nombre de la empresa**
Abre `index.html` y busca estos textos:
- `<h1>🔧 TechCam Solutions</h1>` - Cambia el nombre y emoji
- `<title>TechCam Solutions - ...</title>` - Actualiza el título de la pestaña
- Busca todos los "TechCam" y reemplázalos con tu nombre

### 2. **Cambiar fotos**
Las imágenes vienen de URLs (Unsplash). Para poner tus propias fotos:

**Opción A: Usar URLs de internet**
```html
<img src="https://ejemplo.com/mi-foto.jpg" alt="Descripción">
```

**Opción B: Subir fotos locales (recomendado)**
1. Crea una carpeta `images` en tu proyecto
2. Sube tus fotos ahí (ej: `images/camara-1.jpg`)
3. Reemplaza las URLs:
```html
<!-- De esto: -->
<img src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=400&fit=crop" alt="">

<!-- A esto: -->
<img src="images/mi-foto.jpg" alt="Mi foto profesional">
```

### 3. **Cambiar textos y títulos**
Busca en `index.html`:
- **Títulos de servicios**: Busca "Instalación de Cámaras", "Sistemas de Seguridad", etc.
- **Descripciones**: Cambia los textos debajo de cada servicio
- **Contacto**: Reemplaza el teléfono, email y ubicación
- **Redes sociales**: Cambia los enlaces (Facebook, Instagram, etc.)

### 4. **Cambiar colores**
Abre `styles.css` y modifica estas variables al inicio:
```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #ff6b35;    /* Naranja - botones */
    --dark-color: #1a1a1a;         /* Gris oscuro - fondo */
}
```

Colores sugeridos:
- Verde profesional: `#00a86b`
- Azul corporativo: `#003d82`
- Rojo llamativo: `#e31c23`

### 5. **Hacer funcionar el formulario de contacto**
El formulario está listo pero necesita configuración:

**Opción A: Usar Formspree (GRATIS y RECOMENDADO)**
1. Ve a https://formspree.io
2. Regístrate gratis con tu email
3. Crea un nuevo formulario
4. Copia el ID que te dan (algo como: `mzdvowle`)
5. En `script.js`, busca `https://formspree.io/f/FORMID`
6. Reemplaza `FORMID` con tu ID

Ejemplo:
```javascript
const response = await fetch('https://formspree.io/f/mzdvowle', {
```

**Opción B: Usar tu proveedor de hosting**
Si tu hosting tiene cPanel, muchos permiten configurar PHP para enviar emails directamente.

## 📱 Estructura de Carpetas

```
mi-proyecto/
├── index.html          (página principal)
├── styles.css          (estilos)
├── script.js           (funcionalidades)
├── images/             (carpeta para tus fotos)
│   ├── foto1.jpg
│   ├── foto2.jpg
│   └── ...
├── README.md           (este archivo)
└── .gitignore          (archivos a ignorar en Git)
```

## 🔧 Subir a GitHub

### Paso 1: Crear repositorio en GitHub
1. Ve a https://github.com y crea una cuenta (si no tienes)
2. Haz click en "+" > "New repository"
3. Nombre: `mi-empresa-web` (sin espacios)
4. Selecciona "Public" para que sea visible
5. Haz click en "Create repository"

### Paso 2: Subir tus archivos (sin terminal)
1. En tu nuevo repositorio, haz click en "Add file" > "Upload files"
2. Arrastra todos tus archivos (index.html, styles.css, script.js, carpeta images)
3. Escribe un mensaje: "Código inicial de la página"
4. Haz click en "Commit changes"

### Paso 3: Usar Git desde tu PC (OPCIONAL - más profesional)
Si quieres actualizar código localmente:

```bash
# Instala Git desde https://git-scm.com

# En tu carpeta del proyecto:
git init
git add .
git commit -m "Código inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/mi-empresa-web.git
git push -u origin main
```

## 🌐 Publicar en Render

### Paso 1: Crear cuenta
1. Ve a https://render.com
2. Regístrate con tu cuenta de GitHub (fácil!)
3. Autoriza a Render para acceder a tus repositorios

### Paso 2: Crear un nuevo sitio
1. Haz click en "New +" > "Static Site"
2. Selecciona tu repositorio `mi-empresa-web`
3. En "Build Command": déjalo vacío (es HTML puro)
4. En "Publish directory": escribe `.` (punto - toda la carpeta)
5. Haz click en "Create Static Site"

### Paso 3: ¡Listo!
- Render te dará una URL tipo: `mi-empresa-web.onrender.com`
- Cada vez que hagas push a GitHub, Render actualiza automáticamente
- ¡Tu página estará online en minutos!

## 🌍 ¿Necesitas un dominio propio?

**NO es obligatorio al principio.** Pero si quieres tu propio dominio:

1. Compra un dominio en:
   - **Namecheap** (~$8/año) - https://namecheap.com
   - **Google Domains** (~$12/año) - https://domains.google.com
   - **Nic.ar** (~$500 ARS/año) - Si quieres .com.ar

2. Conecta el dominio a Render:
   - En Render, ve a tu sitio > "Settings"
   - En "Custom Domains", agrega tu dominio
   - Sigue las instrucciones para configurar DNS

**Costo total con dominio**: ~$8-15 USD/año (muy barato)

## 🎨 Tips de Customización

### Cambiar emojis
Los emojis están en:
- Navegación: `🔧 TechCam Solutions`
- Servicios: `📹`, `🔒`, `🌐`, `💻`

Puedes cambiarlos por otros de https://emojipedia.org

### Agregar más servicios
Copia este bloque en `index.html` dentro de `.servicios-grid`:

```html
<div class="servicio-card">
    <div class="servicio-icon">🆕</div>
    <h3>Mi nuevo servicio</h3>
    <p>Descripción del servicio...</p>
</div>
```

### Cambiar número de columnas
En `styles.css`, busca:
```css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

Cambia `250px` a más grande (más ancho) o más chico (más columnas).

## 📧 Preguntas frecuentes

**¿Cuánto cuesta esto?**
- Render: GRATIS
- Dominio: ~$8-15 USD/año (opcional)
- Todo lo demás: ¡GRATIS!

**¿Es seguro?**
Sí, Render usa HTTPS (candado verde). Completamente seguro.

**¿Puedo cambiar el diseño?**
Claro! Todo está en `styles.css`. Si quieres algo más radical, podes contratar a un diseñador.

**¿Funciona en celular?**
100% responsive. Se adapta a cualquier pantalla.

## 🆘 Si algo falla

1. Abre la consola del navegador (F12)
2. Mira los errores (suelen dar pistas)
3. Verifica que:
   - Los nombres de archivos sean exactos (mayúsculas/minúsculas)
   - Las imágenes existan en las rutas correctas
   - El `script.js` esté bien configurado (Formspree)

---

**¡Éxito con tu página!** 🚀

Si necesitás ayuda, consultá la documentación de:
- Render: https://docs.render.com
- Formspree: https://formspree.io/docs
- GitHub: https://docs.github.com
