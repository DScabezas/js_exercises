/*
 * Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes
 *   de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes
 *   de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function compararArrays(arr1, arr2, bool) {
    res = [];
    if (bool) {
        for (const e of arr1) {
            if (arr2.includes(e) && !res.includes(e)) {
                res.push(e);
            }
        }
        return res;
    } else {
        for (const e of arr1) {
            if (!arr2.includes(e)) {
                res.push(e);
            }
        }
        for (const e of arr2) {
            if (!arr1.includes(e) && !res.includes(e)) {
                res.push(e);
            }
        }
        return res;
    }
}

function testCompararArrays() {
    const cases = [
        {
            input: { arr1: [1, 2, 3], arr2: [3, 4, 5], bool: true },
            expected: [3]
        },
        {
            input: { arr1: [1, 2, 3], arr2: [3, 4, 5], bool: false },
            expected: [1, 2, 4, 5]
        },
        {
            input: { arr1: ['a', 'b'], arr2: ['b', 'c'], bool: true },
            expected: ['b']
        },
        {
            input: { arr1: ['a', 'b'], arr2: ['b', 'c'], bool: false },
            expected: ['a', 'c']
        },
        {
            input: { arr1: [], arr2: [1, 2], bool: true },
            expected: []
        },
        {
            input: { arr1: [], arr2: [1, 2], bool: false },
            expected: [1, 2]
        },
        {
            input: { arr1: [1, 1, 2], arr2: [1, 3], bool: true },
            expected: [1]
        },
        {
            input: { arr1: [1, 1, 2], arr2: [1, 3], bool: false },
            expected: [2, 3]
        }
    ];

    cases.forEach(({ input, expected }, index) => {
        try {
            const result = compararArrays(input.arr1, input.arr2, input.bool);
            const passed = JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
            console.log(`Test ${index + 1}:`, passed ? "✔ Passed" : "❌ Failed",
                `| Input: (${JSON.stringify(input)}) | Expected: ${JSON.stringify(expected)} | Got: ${JSON.stringify(result)}`);
        } catch (error) {
            console.log(`Test ${index + 1}: ❌ Failed | Exception thrown`);
        }
    });
}
testCompararArrays()