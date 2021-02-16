let isRainy = false
let isSunny = true
let isWindy = true
let temperature = 20
let clothes = ''

if (isRainy) {
  clothes += 'an umbrella, ' // concatenation de string
} if (isSunny) {
  clothes += 'sunglasses, '
} if (isWindy && temperature <= 20) {
  clothes += 'a scarf, '
}

if (temperature < 10) {
  clothes += 'a coat, '
} else if (temperature >= 10 && temperature <= 20) {
  clothes += 'a sweater, '
}

if (temperature <= 35) {
  clothes += 'and a t-shirt, '
}

console.log(`Je vous recommande de porter: ${clothes}bonne journée.`)