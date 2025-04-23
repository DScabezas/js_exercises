const carros = ['Ford', 'Mazda', 'Honda']

for (let i = 0; i < carros.length; i++) {
    console.log(carros[i])
}

for ( let i in carros) {
    console.log(carros[i])
}

for ( let carro of carros){
    console.log(carro)
}