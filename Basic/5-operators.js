//Operadores

// Operadores Aritmeticos

let a = 5
let b = 10

console.log(a+b)
console.log(a-b)
console.log(a/b)
console.log(a*b)
console.log(a%b)
console.log(a**b)
console.log(++a)
console.log(--a)

// Operadores de asignacion

let myVariable = 2
console.log(myVariable)

myVariable += 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable **= 2
console.log(myVariable)

// Operadores de comparación

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a == b)
console.log(a)
console.log(a == 5)
console.log(a == "5")
console.log(a === "5")
console.log(a !== 6)

// truly y falsy
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(0n));         // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

console.log(Boolean(true));       // true
console.log(Boolean(1));          // true
console.log(Boolean(-1));         // true
console.log(Boolean(3.14));       // true
console.log(Boolean(1n));         // true
console.log(Boolean("hello"));    // true
console.log(Boolean("false"));    // true
console.log(Boolean({}));         // true
console.log(Boolean([]));         // true
console.log(Boolean(function(){})); // true
console.log(Boolean(Symbol()));   // true
console.log(Boolean(Infinity));   // true
console.log(Boolean(-Infinity));  // true

// Operadores Logicos

// AND

console.log( 5 > 10 && 15 < 20)
console.log( 5 < 10 && 15 < 20)

// OR

console.log( 5 > 10 || 15 < 20)
console.log( 5 < 10 || 15 < 20)

// NOT

console.log( !(5 > 10) && 15 < 20)
console.log( 5 < 10 && 15 < 20)

// Operadores Ternarios

const isRaining = false

isRaining ? console.log("Llueve") : console.log("No llueve")