/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function mcd(a, b) {
    if (a === 0 || b === 0) return Math.abs(a + b);
    let res = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) res = i;
    }
    return res;
}


function mcm(a, b) {
    if (a === 0 || b === 0) return 0;
    let max = Math.max(a, b);
    while (true) {
        if (max % a === 0 && max % b === 0) return max;
        max++;
    }
}


function testMcdYMcm() {
    const cases = [
        { a: 10, b: 5, expectedMCD: 5, expectedMCM: 10 },
        { a: 18, b: 24, expectedMCD: 6, expectedMCM: 72 },
        { a: 7, b: 3, expectedMCD: 1, expectedMCM: 21 },
        { a: 21, b: 6, expectedMCD: 3, expectedMCM: 42 },
        { a: 100, b: 10, expectedMCD: 10, expectedMCM: 100 },
        { a: 13, b: 13, expectedMCD: 13, expectedMCM: 13 },
        { a: 1, b: 99, expectedMCD: 1, expectedMCM: 99 },
        { a: 0, b: 25, expectedMCD: 25, expectedMCM: 0 },
        { a: 25, b: 0, expectedMCD: 25, expectedMCM: 0 },
        { a: 0, b: 0, expectedMCD: 0, expectedMCM: 0 }
    ];

    cases.forEach(({ a, b, expectedMCD, expectedMCM }, i) => {
        try {
            const mcdResult = mcd(a, b);
            const mcmResult = mcm(a, b);
            const passedMCD = mcdResult === expectedMCD;
            const passedMCM = mcmResult === expectedMCM;
            console.log(`Test ${i + 1} MCD:`, passedMCD ? "✔ Passed" : "❌ Failed", `| Expected: ${expectedMCD} | Got: ${mcdResult}`);
            console.log(`Test ${i + 1} MCM:`, passedMCM ? "✔ Passed" : "❌ Failed", `| Expected: ${expectedMCM} | Got: ${mcmResult}`);
        } catch (error) {
            console.log(`Test ${i + 1}: ❌ Failed | Exception thrown`);
        }
    });
}
testMcdYMcm();