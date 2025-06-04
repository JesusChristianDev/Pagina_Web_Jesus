// script.js
// Mensaje de bienvenida en consola
console.log("Hola Jesús, ¡mi landing ya está corriendo!");

// script.js

// Mostrar / ocultar menú en móvil
// Este bloque gestiona el menú responsive para dispositivos móviles
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-visible');
    // Alterna la visibilidad del menú al hacer click en el botón hamburguesa
});
