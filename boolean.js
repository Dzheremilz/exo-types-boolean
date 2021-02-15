let res1 = (true && false) || (false && true) // false
let res2 = 10 > 11 && 11 > 10 // false
let res3 = (true || false) && true // true
let res4 = (!true && !false) || (!false && !false) // true
let res5 = 'Hello' === 'Hello' && 'World' == 'Word' // false
let res6 = (!(20 >= 20) && 7 === 7) || true // true
let res7 = '1' === 1 && '2' == 2 && '3' === 3 // false && true && false => false | === egalite stricte compare les type int # string
let res8 = !res7 // true
let res9 = !res8 // false
let res10 = (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9) // true

console.log(`res1 = ${res1}\nres2 = ${res2}\nres3 = ${res3}\nres4 = ${res4}\nres5 = ${res5}\nres6 = ${res6}\nres7 = ${res7}\nres8 = ${res8}\nres9 = ${res9}\nres10 = ${res10}`)