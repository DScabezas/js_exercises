/*
 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function capitalizeWords(oracion) {
    words = oracion.toLowerCase().trim().match(/\p{L}+/gu) || ""
    for (const word of words) {
        oracion = oracion.replace(word, String.fromCharCode(word[0].charCodeAt(0) - 32) + word.slice(1))
    }
    return oracion
}

function testCapitalizeWords() {
    const cases = [
        { input: "hola mundo", expected: "Hola Mundo" },
        { input: "javascript es genial", expected: "Javascript Es Genial" },
        { input: "ESTO ES UNA PRUEBA", expected: "ESTO ES UNA PRUEBA" },
        { input: "123 abc", expected: "123 Abc" },
        { input: "a", expected: "A" },
        { input: "  espacio   al inicio", expected: "  Espacio   Al Inicio" },
        { input: "espacios    entre palabras", expected: "Espacios    Entre Palabras" },
        { input: "", expected: "" },
        { input: "único carácter", expected: "Único Carácter" },
        { input: "¿cómo estás?", expected: "¿Cómo Estás?" },
        { input: "hola-mundo", expected: "Hola-Mundo" }
    ];

    cases.forEach(({ input, expected }, index) => {
        const result = capitalizeWords(input);
        console.log(`Test ${index + 1}:`, result === expected ? "✔ Passed" : "❌ Failed",
            `| Input: "${input}" | Expected: "${expected}" | Got: "${result}"`);
    });
}

testCapitalizeWords();