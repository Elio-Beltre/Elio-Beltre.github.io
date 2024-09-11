// Función para mover el botón de "No"
function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Función para redirigir a la página de flores
function redirectToFlowers() {
    window.location.href = 'flores.html';  // Redirecciona a la página de flores
}
