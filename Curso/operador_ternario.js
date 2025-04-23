const dia = new Date
const diasSemana =  dia.getDay()
console.log(diasSemana)

console.log(6 > diasSemana > 0 ? 'abre a las 9' : 'abre a las 11')