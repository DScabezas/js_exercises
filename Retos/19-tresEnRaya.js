/*
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O"
 * y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta.
 *   O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta.
 * Se podría representar con un vacío "", por ejemplo.
 */

function analizarMatriz(matriz) {
    const plano = matriz.flat();
    const xCount = plano.filter(c => c === 'X').length;
    const oCount = plano.filter(c => c === 'O').length;
    if (Math.abs(xCount - oCount) > 1 || xCount < oCount || xCount + oCount + plano.filter(c => c === '').length !== 9) return 'Nulo';

    const comb = [
        [matriz[0][0], matriz[0][1], matriz[0][2]],
        [matriz[1][0], matriz[1][1], matriz[1][2]],
        [matriz[2][0], matriz[2][1], matriz[2][2]],
        [matriz[0][0], matriz[1][0], matriz[2][0]],
        [matriz[0][1], matriz[1][1], matriz[2][1]],
        [matriz[0][2], matriz[1][2], matriz[2][2]],
        [matriz[0][0], matriz[1][1], matriz[2][2]],
        [matriz[0][2], matriz[1][1], matriz[2][0]]
    ];

    const xWins = comb.some(c => c.every(v => v === 'X'));
    const oWins = comb.some(c => c.every(v => v === 'O'));
    if (xWins && oWins) return 'Nulo';
    if (xWins) return 'X';
    if (oWins) return 'O';
    return xCount + oCount === 9 ? 'Empate' : 'Nulo';
}

function testAnalizarMatriz() {
    const cases = [
        {
            input: [
                ['X', 'X', 'X'],
                ['O', 'O', ''],
                ['', '', '']
            ],
            expected: 'X'
        },
        {
            input: [
                ['O', 'X', 'X'],
                ['O', '', 'X'],
                ['O', '', '']
            ],
            expected: 'O'
        },
        {
            input: [
                ['X', 'O', ''],
                ['O', 'X', 'O'],
                ['', '', 'X']
            ],
            expected: 'X'
        },
        {
            input: [
                ['X', 'O', 'X'],
                ['X', 'O', 'O'],
                ['O', 'X', 'X']
            ],
            expected: 'Empate'
        },
        {
            input: [
                ['X', 'X', 'X'],
                ['X', 'O', ''],
                ['', '', '']
            ],
            expected: 'Nulo'
        },
        {
            input: [
                ['X', 'X', 'X'],
                ['O', 'O', 'O'],
                ['', '', '']
            ],
            expected: 'Nulo'
        },
        {
            input: [
                ['X', 'O'],
                ['X', 'O']
            ],
            expected: 'Nulo'
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        try {
            const result = analizarMatriz(input);
            const passed = result === expected;
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Expected: ${expected} | Got: ${result}`);
        } catch (error) {
            console.log(`Test ${index + 1}: ❌ Failed | Exception thrown`);
        }
    });
}

testAnalizarMatriz();
