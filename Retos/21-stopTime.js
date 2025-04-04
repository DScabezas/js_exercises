/*
 * Crea una función que sume 2 números y retorne su resultado pasados
 * unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que
 *   debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma
 *   asíncrona, es decir, sin detener la ejecución del programa principal.
 *   Se podría ejecutar varias veces al mismo tiempo.
 */

function sumarConRetardo(a, b, s) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, s * 1000);
    });
}


async function testSumarConRetardo() {
    const cases = [
        { input: { a: 1, b: 2, s: 1 }, expected: 3 },
        { input: { a: -5, b: 5, s: 2 }, expected: 0 },
        { input: { a: 100, b: 200, s: 0 }, expected: 300 },
        { input: { a: 0, b: 0, s: 1 }, expected: 0 },
        { input: { a: -10, b: -20, s: 3 }, expected: -30 }
    ];

    for (let i = 0; i < cases.length; i++) {
        const { a, b, s } = cases[i].input;
        const expected = cases[i].expected;
        try {
            const result = await sumarConRetardo(a, b, s);
            const passed = result === expected;
            console.log(`Test ${i + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: (${a}, ${b}, ${s}s) | Expected: ${expected} | Got: ${result}`);
        } catch {
            console.log(`Test ${i + 1}: ❌ Failed | Exception thrown`);
        }
    }
}
testSumarConRetardo()