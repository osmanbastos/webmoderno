const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //verificar se é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

//fazendo uma operação considerando que cada avaliação tem um peso diferente

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //não altera o valor da media mas fixa as casa decimais em duas
console.log(media.toString()) 
console.log(media.toString(2)) //converte em binario ao passar o parametro 2
console.log(typeof media)
console.log(typeof Number)
