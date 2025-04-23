let personaje = {
    name: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coors: {
        lat: 34,
        lng: -118
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster '],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
}

/* console.log(personaje.coors.lat)
console.log(personaje.trajes.length)

const x = 'vivo'
console.log(personaje[x])

delete personaje.edad

console.log(personaje)

personaje.casado = true

const entriesPares = Object.entries( personaje)
console.log(entriesPares)
 */
Object.freeze(personaje)

const properties = Object.getOwnPropertyNames(personaje)
console.log(properties)

const values = Object.values(personaje)
console.log(values)