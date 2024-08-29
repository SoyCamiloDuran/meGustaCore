let botones = document.querySelectorAll('.meGusta');
let contador = document.querySelectorAll('.contador');

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function() {
        contador[i].textContent = parseInt(contador[i].textContent) + 1;
    });
}