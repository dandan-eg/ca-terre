// Racine carré d'un nombre
//
if (process.argv.length <= 2) {
    console.log("Usage: terre04.js <number>")
    process.exit(1)
}

const arg = process.argv[2]
const number = parseInt(arg)

if (isNaN(number) || number < 1) {
    console.log(`Expected a valid number got=${arg}`)
    process.exit(1)
}

let i = 1
while (i * i < number) {
    i++
}

console.log(i)


