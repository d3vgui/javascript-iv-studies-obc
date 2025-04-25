const a = 0 // false

const b = null // false

const c = 'teste' // true

console.log(a || b || c)

console.log(a ?? b ?? c)



let numero = 0

let numero2 = numero || 42

console.log({numero, numero2})

let numero3 = 0 ?? 42

console.log({c})