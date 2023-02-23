console.log(7 / 0) //tende a infinito na matemática
console.log("10" / 2) //converte o valor da string em numérico
console.log('3' + 2) //concatena result 32
console.log('3' - 2) //menos não faz sentido em string e é realizada a operação matemática
console.log("Show!" * 2) //algumas linguagens repetem o valor duas vezes, o JS apresenta NaN
console.log(0.1 + 0.7) //a especificação de ponto flutuante do IEEE que o JS suporta gera algumas imprecisões para tornar mais rápido
//console.log(10.toString()) não pode converter o valor literal diretamente
console.log((10.345).toFixed(2))
console.log((10.345).toString()) //pode chamar a função com o literal dentro de parenteses