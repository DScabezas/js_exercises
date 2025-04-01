/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function decimalBinario(decimal) {
    let binario = '';

    if (decimal === 0) return '0';
    
    while (decimal > 0) {
        const residuo = decimal % 2;
        binario = residuo + binario;
        decimal = Math.floor(decimal / 2);
    }
    
    return binario;
}

console.log(decimalBinario(100))