let valor // não inicializado
console.log(valor)
/*console.log(valor2)
/valor não definido, dá erro
*/
valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto.preco)

produto.preco = undefined
console.log(produto.preco)
console.log(!!produto.preco)

produto.preco = null // sem preço
console.log(produto.preco)
