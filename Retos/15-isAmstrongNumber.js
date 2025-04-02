/*
 * Escribe una función que determine si un número dado es un Número de Armstrong (o número narcisista).
 * Un Número de Armstrong es aquel que es igual a la suma de sus propios dígitos elevados a la potencia
 * de la cantidad de dígitos que lo componen.
 * Ejemplo:
 * - 153 es un Número de Armstrong porque: 1³ + 5³ + 3³ = 153.
 * - 9474 es un Número de Armstrong porque: 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474.
 * - 123 no es un Número de Armstrong porque: 1³ + 2³ + 3³ ≠ 123.
 */

function isArmstrongNumber(number) {
    sum = 0
    for (const char of String(number)) {
        sum += char**String(number).length
    }
    return sum === number
}

function testArmstrongNumber() {
    const cases = [
        { input: 0, expected: true },
        { input: 1, expected: true },
        { input: 9, expected: true },
        { input: 10, expected: false },
        { input: 153, expected: true },
        { input: 370, expected: true },
        { input: 371, expected: true },
        { input: 407, expected: true },
        { input: 9474, expected: true },
        { input: 9475, expected: false },
        { input: 100, expected: false },
        { input: 9473, expected: false },
        { input: 9926315, expected: true },
        { input: 9926314, expected: false }
    ];

    cases.forEach(({ input, expected }, index) => {
        const result = isArmstrongNumber(input);
        console.log(`Test ${index + 1}:`, result === expected ? "✔ Passed" : "❌ Failed",
            `| Input: ${input} | Expected: ${expected} | Got: ${result}`);
    });
}

testArmstrongNumber();
