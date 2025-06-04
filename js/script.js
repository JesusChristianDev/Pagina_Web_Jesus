// Mensaje de bienvenida en consola
console.log("Hola Jesús, ¡tu landing ya está corriendo!");

// script.js

// Mostrar / ocultar menú en móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-links-visible');
});
