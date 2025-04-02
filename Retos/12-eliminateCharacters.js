/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function eliminateCharacters ( str1, str2 ){

    let out1 = [...str1].filter(char => !str2.includes(char)).join("")
    let out2 = [...str2].filter(char => !str1.includes(char)).join("")

    return {out1, out2}
}

function testUniqueCharacters() {
    const cases = [
        { str1: "abc", str2: "bcd", expected: { out1: "a", out2: "d" } },
        { str1: "hello", str2: "world", expected: { out1: "he", out2: "wrd" } },
        { str1: "abcd", str2: "abcd", expected: { out1: "", out2: "" } },
        { str1: "abcdef", str2: "xyz", expected: { out1: "abcdef", out2: "xyz" } },
        { str1: "12345", str2: "34567", expected: { out1: "12", out2: "67" } },
        { str1: "same", str2: "same", expected: { out1: "", out2: "" } },
        { str1: "mismatch", str2: "", expected: { out1: "mismatch", out2: "" } },
        { str1: "", str2: "nonempty", expected: { out1: "", out2: "nonempty" } },
        { str1: "aaaa", str2: "aaab", expected: { out1: "", out2: "b" } },
        { str1: "space test", str2: "test case", expected: { out1: "p", out2: "" } }
    ];

    cases.forEach(({ str1, str2, expected }, index) => {
        const result = eliminateCharacters(str1, str2);
        console.log(`Test ${index + 1}:`, result.out1 === expected.out1 && result.out2 === expected.out2 ? "✔ Passed" : "❌ Failed", 
            `| Input: ("${str1}", "${str2}") | Expected: (${expected.out1}, ${expected.out2}) | Got: (${result.out1}, ${result.out2})`);
    });
}

testUniqueCharacters();