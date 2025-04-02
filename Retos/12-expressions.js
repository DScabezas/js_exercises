/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function expressionChecker(expression) {
    const openParentesis = "("
    const openCorchete = "["
    const openLlave = "{"
    const closeParentesis = ")"
    const closeCorchete = "]"
    const closeLlave = "}"
    let stack = []
    for (const char of expression.replace(/ /g, "")) {
        if (char === openCorchete || char === openLlave || char === openParentesis) {
            stack.push(char)
        } else if (char === closeCorchete || char === closeLlave || char === closeParentesis) {
            if (char === closeCorchete) {
                if (stack[stack.length - 1] === openCorchete) {
                    stack.pop()
                }
                else {
                    return false
                }
            } else if (char === closeLlave) {
                if (stack[stack.length - 1] === openLlave) {
                    stack.pop()
                }
                else {
                    return false
                }
            } else if (char === closeParentesis) {
                if (stack[stack.length - 1] === closeParentesis) {
                    stack.pop()
                }
                else {
                    return false
                }
            }

        }
    }
    if ( stack.length === 0) {
        return true
    };
}

console.log(expressionChecker('{ [ a * ( c + d ) ] - 5 }'))