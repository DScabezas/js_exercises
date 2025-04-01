/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(n){
    res = true
    for (let i=2; i<n; i++){
        if ( n%i==0 ){
            res = false
            break
        } 
    }
    return res
}

for (let i=3; i<101; i++){
    console.log(i,isPrime(i))
}