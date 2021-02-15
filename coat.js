// Programme qui va m'aider à décider si je dois mettre mon manteau
// ou pas en fonction d'une méteo pluvieuse ou venteuse ainsi que de la temperature
let isRainy = false
let isWindy = false
let temperature = 8

if (isRainy || isWindy || temperature <= 10) {
  console.log('Mettez votre manteau')
} else {
  console.log('Vous n\'avez pas besoin de manteau today')
}