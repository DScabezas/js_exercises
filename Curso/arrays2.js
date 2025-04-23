let juegos = ['Zelda', 'Mario']

console.log(juegos.length)

console.log(juegos[juegos.length - 1])

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr)
})

juegos.push('F-zero')

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr)
})

juegos.unshift('Fire Emblem')

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr)
})

let juegoBorrado = juegos.pop()

juegos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice, arr)
})

console.log(juegoBorrado)

let fIndex = juegos.indexOf('F-zero')

console.log(fIndex)