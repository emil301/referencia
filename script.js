// Script para el formulario de contacto
document.getElementById('formulario-contacto').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const nombre = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const mensaje = form.querySelector('textarea').value;

    // Usar Formspree para enviar el email (gratis)
    try {
        const response = await fetch('https://formspree.io/f/FORMID', {
            method: 'POST',
            body: JSON.stringify({
                nombre: nombre,
                email: email,
                telefono: telefono,
                mensaje: mensaje
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.');
            form.reset();
        } else {
            alert('Hubo un error al enviar el mensaje. Intenta más tarde.');
        }
    } catch (error) {
        // Fallback: mostrar un mensaje si no está configurado Formspree
        alert('Formulario listo para enviar. Configura Formspree para que funcione completamente.');
        console.log('Datos del formulario:', { nombre, email, telefono, mensaje });
    }
});

// Smooth scroll para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Log para ayudarte con el desarrollo
console.log('Página cargada correctamente. Para configurar el formulario de contacto:');
console.log('1. Ve a https://formspree.io');
console.log('2. Crea una cuenta gratis');
console.log('3. Copia tu Form ID y reemplaza "FORMID" en el código');
