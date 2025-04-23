let deck = []
const tipos = ['C', 'D', 'S', 'H']
const especiales = ['A', 'J', 'Q', 'K']

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo)
        }
    }
    for (let esp of especiales) {
        for (let tipo of tipos) {
            deck.push(esp + tipo)
        }
    }
    deck = _.shuffle(deck)
    return deck
}

crearDeck()

const tomarCarta = () => {
    return deck.length > 0 ? deck.pop() : null
}

const valorCarta = (carta) => {
    switch (carta[0]) {
        case '1': return 10
        case '2': return 2
        case '3': return 3
        case '4': return 4
        case '5': return 5
        case '6': return 6
        case '7': return 7
        case '8': return 8
        case '9': return 9
        case 'A': return 11
        case 'J':
        case 'Q':
        case 'K': return 10
        default: return 0
    }
}

console.log(valorCarta('2C')) // 2
console.log(valorCarta('JH')) // 10
console.log(valorCarta('AS')) // 9
console.log(valorCarta('10D')) // 10
console.log(valorCarta('7H')) // 7
console.log(valorCarta('Z9')) // 0
