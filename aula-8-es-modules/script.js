import { name, label, input, br } from "./functions.js"

console.log(name)
console.log(label({for: 'fullname', textContent: 'Nome completo'}))
console.log(input({id: 'fullname', placeholder: 'Digite seu nome completo'}))
console.log(br())