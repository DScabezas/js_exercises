// Crea una variable para cada operacion aritmetica

let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 17 % 3;
let exponente = 2 ** 4;
console.log(suma, resta, multiplicacion, division, modulo, exponente);

// Crea una variabl para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas

suma += 2
resta -= 2
multiplicacion *= 2
division /= 2
modulo %= 2
exponente **= 2
console.log(suma, resta, multiplicacion, division, modulo, exponente);

// Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

console.log(10 > 5);        // true
console.log(3 <= 3);        // true
console.log("a" !== "b");   // true
console.log(4 + 2 === 6);   // true
console.log(5 * 2 >= 10);   // true

// Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(8 < 2);         // false
console.log(7 === "7");     // false
console.log(10 !== 10);     // false
console.log(3 * 3 > 10);    // false
console.log("hello" === "world"); // false

// Utiliza el operador logico and

console.log(true && 5 > 2);  // true

// Utiliza el operador logico or

console.log(false || 10 < 20); // true

// Combina ambos operadores logicos

console.log((5 > 2 && 8 < 10) || 3 === 4); // true

// Añade una negacion

console.log(!(6 * 2 < 15));  // true

// Utiliza el operador ternario

const resultado = 10 > 5 ? "Mayor" : "Menor";
console.log(resultado); // "Mayor"

// Combina operadores aritmeticos, comparacion y logicos

console.log((4 + 6 > 9) && (10 / 2 === 5) || !(3 * 3 > 10)); // true