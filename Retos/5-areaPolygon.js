/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function calculateArea(poligono) {
    const { tipo, base, altura } = poligono
    switch (tipo.toLowerCase()) {
        case "triangulo":
            return (base*altura)/2
        case "cuadrado":
            return base**2
        case "rectangulo":
            return base*altura
        default:
            return null
    }
}

console.log(calculateArea({ tipo: "Triangulo", base: 10, altura: 5 }))
console.log(calculateArea({ tipo: "Cuadrado", base: 4 }))
console.log(calculateArea({ tipo: "Rectangulo", base: 8, altura: 3 }))