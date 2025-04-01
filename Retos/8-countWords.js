/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function countWords(sentence){
    const words = sentence.trim().toLowerCase().replace(/[^a-z\s]/g, '').split(" ")
    const wordsCount = {}

    words.forEach(word => {
        wordsCount[word] = (wordsCount[word] || 0) + 1
    });

    return wordsCount
}

const granOracion = `/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */`
console.log(countWords(granOracion))