/*
 * Lee el fichero "calculate.txt" incluido en el proyecto, calcula su
 * resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un
 *   símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*"
 *   y división "/".
 * - El resultado se muestra al finalizar la lectura de la última
 *   línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han
 *   podido resolver las operaciones.
 */

const fs = require('fs');

function calcularDesdeTxt(archivo) {

    const lineas = fs
        .readFileSync(archivo, 'utf8')
        .split('\n')
        .map(linea => linea.trim())
        .filter(linea => linea !== '');
    if (lineas.length < 1 || (lineas.length - 1) % 2 !== 0) {
        console.error("Error: Formato no válido");
        return;
    }

    let resultado = parseFloat(lineas[0]);

    for (let i = 1; i < lineas.length; i += 2) {
        const operador = lineas[i];
        const valor = parseFloat(lineas[i + 1]);

        switch (operador) {
            case '+':
                resultado += valor;
                break;
            case '-':
                resultado -= valor;
                break;
            case '*':
                resultado *= valor;
                break;
            case '/':
                if (valor === 0) {
                    console.error("Error: División por cero");
                    return;
                }
                resultado /= valor;
                break;
            default:
                console.error("Error: Operación no válida");
                return;
        }
    }

    return resultado;
}