/*
 * Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 */

function sonOrtogonales(a, b) {
    if (a.length !== b.length) {
        return false
    }   else if (a.length === 0 || b.length === 0) {
        return true
    }
    let productoEscalar = 0;
    for (let i = 0; i < a.length; i++) {
        productoEscalar += a[i] * b[i];
    }
    return productoEscalar === 0 ? true : false;
}

function testOrtogonalidad() {
    const cases = [
        { a: [1, 0], b: [0, 1], expected: true },
        { a: [1, 2], b: [2, -1], expected: true },
        { a: [3, 4], b: [-4, 3], expected: true },
        { a: [1, 2, 3], b: [4, -8, 4], expected: true },
        { a: [2, 2], b: [2, 2], expected: false },
        { a: [0, 0], b: [0, 0], expected: true },
        { a: [1, 2], b: [1], expected: false },
        { a: [5, -5], b: [5, 5], expected: true }
    ];

    cases.forEach(({ a, b, expected }, i) => {
        try {
            const result = sonOrtogonales(a, b);
            const passed = result === expected;
            console.log(`Test ${i + 1}:`, passed ? "✔ Passed" : "❌ Failed", `| A: ${JSON.stringify(a)} | B: ${JSON.stringify(b)} | Expected: ${expected} | Got: ${result}`);
        } catch {
            console.log(`Test ${i + 1}: ❌ Failed | Exception thrown`);
        }
    });
}
testOrtogonalidad()