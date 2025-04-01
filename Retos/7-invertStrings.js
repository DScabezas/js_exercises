/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertString(word){
    temp = ''
    for (const letter of [...word].reverse()){
        temp += letter
    }
    return temp
}