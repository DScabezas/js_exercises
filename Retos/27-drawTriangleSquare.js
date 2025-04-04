/*
 * Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - EXTRA: ¿Eres capaz de dibujar más figuras?
 */

function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
        console.log('*'.repeat(i));
    }
}
function drawSquare(size) {
    for (let i = 0; i < size; i++) {
        console.log('*'.repeat(size));
    }
}

function drawRectangle(lado1, lado2) {
    for (let i = 0; i < lado1; i++) {
        console.log('*'.repeat(lado2));
    }
}
