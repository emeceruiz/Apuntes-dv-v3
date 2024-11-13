// Obtener elementos del DOM
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

// Función para mostrar o ocultar el menú
menuButton.addEventListener('click', () => {
    // Comprobar si el menú está visible
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';  // Mostrar el menú
    } else {
        menu.style.display = 'none';  // Ocultar el menú
    }
});