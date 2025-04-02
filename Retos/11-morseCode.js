/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

function morseCoderDecoder(message) {
    const Morse = {
        A: "._", B: "_...", C: "_._.", D: "_..", E: ".", F: ".._.", G: "__.", H: "....",
        I: "..", J: ".___", K: "_._", L: "._..", M: "__", N: "_.", O: "___", P: ".__.",
        Q: "__._", R: "._.", S: "...", T: "_", U: ".._", V: "..._", W: ".__", X: "_.._",
        Y: "_.__", Z: "__..", "0": "_____", "1": ".____", "2": "..___", "3": "...__",
        "4": "...._", "5": ".....", "6": "_....", "7": "__...", "8": "___..", "9": "____."
    }

    const MorseReverse = Object.fromEntries(Object.entries(Morse).map(([k, v]) => [v, k]));

    if (message.includes(".") || message.includes("_")) {
        return message.split("   ").map(word =>
            word.split(" ").map(char => MorseReverse[char] || "?").join("")
        ).join(" ");
    } else {
        return message.toUpperCase().split("").map(char => Morse[char] || " ").join(" ");
    }
}

console.log(morseCoderDecoder("Hola como estas"));
console.log(morseCoderDecoder(".... ___ ._.. ._   _._. ___ __ ___   . ... _ ._ ..."));
