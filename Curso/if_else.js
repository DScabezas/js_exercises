const hoy = new Date()
const dia = hoy.getDay()
const diasSemana = {
    '0': 'Domingo',
    '1': 'Lunes',
    '2': 'Martes',
    '3': 'Miercoles',
    '4': 'Jueves',
    '5': 'Viernes',
    '6': 'Sabado',
}

console.log(diasSemana[dia])