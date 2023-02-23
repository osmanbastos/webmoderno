const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//permite quebra de linha, exemplo:
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`) //a soma é feita dentro das chaves {}


//Dentro de template string pode-se chamar uma funcao
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)