/*
 * Crea una función que reciba días, horas, minutos y segundos (como enteros)
 * y retorne su resultado en milisegundos.
 */

function tiempoEnMilisegundos(d, h, m, s) {
    if (typeof d !== 'number' || typeof h !== 'number' || typeof m !== 'number' || typeof s !== 'number') {
        throw new Error("Todos los parámetros deben ser números");
    }
    if (d < 0 || h < 0 || m < 0 || s < 0) {
        throw new Error("Los parámetros no pueden ser negativos");
    }
    const diasEnMilisegundos = d * 24 * 60 * 60 * 1000;
    const horasEnMilisegundos = h * 60 * 60 * 1000;
    const minutosEnMilisegundos = m * 60 * 1000;
    const segundosEnMilisegundos = s * 1000;
    return diasEnMilisegundos + horasEnMilisegundos + minutosEnMilisegundos + segundosEnMilisegundos;
}

function testTiempoEnMilisegundos() {
    const cases = [
        { input: { d: 0, h: 0, m: 0, s: 0 }, expected: 0 },
        { input: { d: 0, h: 0, m: 0, s: 1 }, expected: 1000 },
        { input: { d: 0, h: 0, m: 1, s: 0 }, expected: 60000 },
        { input: { d: 0, h: 1, m: 0, s: 0 }, expected: 3600000 },
        { input: { d: 1, h: 0, m: 0, s: 0 }, expected: 86400000 },
        { input: { d: 1, h: 1, m: 1, s: 1 }, expected: 90061000 },
        { input: { d: 2, h: 3, m: 4, s: 5 }, expected: 183845000 },
        { input: { d: 0, h: 0, m: 0, s: 123 }, expected: 123000 },
        { input: { d: 0, h: 25, m: 0, s: 0 }, expected: 90000000 },
        { input: { d: 7, h: 0, m: 0, s: 0 }, expected: 604800000 },
        { input: { d: -1, h: 0, m: 0, s: 0 }, expected: 'error' },
        { input: { d: 0, h: -1, m: -1, s: -1 }, expected: 'error' }
    ];

    cases.forEach(({ input, expected }, index) => {
        try {
            const result = tiempoEnMilisegundos(input.d, input.h, input.m, input.s);
            const passed = result === expected;
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: (${input.d}, ${input.h}, ${input.m}, ${input.s}) | Expected: ${expected} | Got: ${result}`);
        } catch (error) {
            const passed = expected === 'error';
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: (${input.d}, ${input.h}, ${input.m}, ${input.s}) | Expected: ${expected} | Got: error`);
        }
    });
}

testTiempoEnMilisegundos()