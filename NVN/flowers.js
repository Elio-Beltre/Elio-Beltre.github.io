// Función para crear flores dinámicas
function createFlowers() {
    const flowerContainer = document.getElementById('flowerContainer');

    for (let i = 0; i < 100; i++) {
        const flower = document.createElement('div');
        flower.classList.add('flower');

        // Posición aleatoria para las flores
        flower.style.left = Math.random() * window.innerWidth + 'px';
        flower.style.animationDuration = 3 + Math.random() * 2 + 's'; // Duración variable

        flowerContainer.appendChild(flower);

        // Remover las flores después de la animación
        setTimeout(() => {
            flower.remove();
        }, 5000);
    }
}

// Ejecutar la función de crear flores
createFlowers();
setInterval(createFlowers, 5000); // Crear más flores cada 5 segundos