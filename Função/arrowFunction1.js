//função padrão, por bloco (return obrigatório)
let dobro = function(a) {
    return 2 * a
}

//funcão anonima
dobro = (a) => {
    return 2 * a
}

//função arrow, com apenas uma variável
dobro = a => 2 * a

console.log(dobro(Math.PI))

let ola = function () {
    return "Olá"
}

ola = () => 'Olá' //função sem parâmetros
ola = _ => 'Olá' //função com 1 unico parametro "underline"
console.log(ola())
