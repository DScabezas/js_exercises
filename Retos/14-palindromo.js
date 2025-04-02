/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
 * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

function isPalindrome(expresion) {
    const expressionReversed = expresion.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "").split("").reverse().join("")
    return expressionReversed === expresion.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "") ? true : false;
}

function testIsPalindrome() {
    const cases = [
        { input: "Ana lleva al oso la avellana", expected: true },
        { input: "Anita lava la tina", expected: true },
        { input: "A mama Roma le aviva el amor a mama", expected: true },
        { input: "No subas, abuson", expected: true },
        { input: "Dabale arroz a la zorra el abad", expected: true },
        { input: "Esto no es un palindromo", expected: false },
        { input: "Hello World", expected: false },
        { input: "A Toyota's a Toyota", expected: true },
        { input: "La ruta natural", expected: true },
        { input: "Was it a car or a cat I saw?", expected: true },
        { input: "Never odd or even", expected: true },
        { input: "", expected: true },
        { input: "123321", expected: true },
        { input: "123456", expected: false }
    ];

    cases.forEach(({ input, expected }, index) => {
        const result = isPalindrome(input);
        console.log(`Test ${index + 1}:`, result === expected ? "✔ Passed" : "❌ Failed",
            `| Input: "${input}" | Expected: ${expected} | Got: ${result}`);
    });
}

testIsPalindrome();
