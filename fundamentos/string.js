//tipo mais básico aspas simples ou duplas
const escola = "Cod3r"

//puxa o caractere no índice escolhido
console.log(escola.charAt(4)) 

//ao puxar uma letra que não existe na string o JS não mostra erro, apenas não mostra resultado.
console.log(escola.charAt(5)) 

//valor do caractere na tabela ASCI ou unicode
console.log(escola.charCodeAt(3)) 

//retorna o índice onde está o valor
console.log(escola.indexOf('d')) 

//imprime do índice 1 até o final
console.log(escola.substring(1)) 

//vai do primeiro ao último sem incluir o último
console.log(escola.substring(0,3)) 
console.log(escola.substring(0, 5))

/*
diferente do numéro que não dava pra chamar a função, aqui pode
.concat retorna uma string que concatena duas ou mais strings
*/
console.log('Escola '.concat(escola).concat("!"))

//replace substitui o valor passado pelo novo valor
//pode-se usar a expressão regula /\d/
console.log(escola.replace(3, 'e')) 

//substitui todos os digitos pela letra e
console.log(escola.replace(/\d/, 'e')) 

//substitui todos os digitos e com a flag global 'g' todas as letras. Sem a flag só a primeira letra é substituída
console.log(escola.replace(/\w/g, 'e')) 

//converte em array e separa com a vírgula
console.log('Ana,Maria,Pedro'.split(',')) 
console.log('Ana,Maria,Pedro'.split(/,/)) //mesma função

