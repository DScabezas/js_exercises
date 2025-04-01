// Strings

let myName = "Dario"
let myGreeting = "Hola, " + myName

console.log(myGreeting)

// Longitud

console.log(myGreeting.length)

// Acceso a caracteres

console.log(myGreeting[10])

// Metodos comunes

console.log(myGreeting.toLocaleLowerCase())
console.log(myGreeting.toLocaleUpperCase())
console.log(myGreeting.indexOf("Dario"))
console.log(myGreeting.includes("Hola"))
console.log(myGreeting.slice(0,5))
console.log(myGreeting.replace("Dario", "Sebastian"))

// Template literals.

let message = `Hola, este es mi curso
de aprendizaje ${myName}`

console.log(message)