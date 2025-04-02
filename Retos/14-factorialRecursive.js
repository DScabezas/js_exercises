/*
 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n-1)
}

function testFactorial() {
    const cases = [
        { input: 0, expected: 1 },
        { input: 1, expected: 1 },
        { input: 2, expected: 2 },
        { input: 3, expected: 6 },
        { input: 4, expected: 24 },
        { input: 5, expected: 120 },
        { input: 6, expected: 720 },
        { input: 7, expected: 5040 },
        { input: 8, expected: 40320 },
        { input: 9, expected: 362880 },
        { input: 10, expected: 3628800 },
        { input: 12, expected: 479001600 },
        { input: 15, expected: 1307674368000 }
    ];

    cases.forEach(({ input, expected }, index) => {
        const result = factorial(input);
        console.log(`Test ${index + 1}:`, result === expected ? "✔ Passed" : "❌ Failed",
            `| Input: ${input} | Expected: ${expected} | Got: ${result}`);
    });
}

testFactorial();
