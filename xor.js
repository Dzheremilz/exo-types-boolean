let a = false
let b = true
let xor

xor = (a || b) && !(a && b)
console.log(xor)

xor = (!a && b) || (a && !b)
console.log(xor)