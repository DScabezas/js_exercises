/* function crearPersona(name, lastname) {
    return {
        name,
        lastname
    }
} */

const crearPersona = (name, lastname) => ({ name, lastname })

const persona = crearPersona('Fernando', ' Herrera')
console.log(persona)

/* function imprimeArguments() {
    console.log(arguments)
} */

const imprimeArguments = ( edad, ...arguments) => (console.log(edad, arguments))

imprimeArguments(10, 10, 2, true, false)