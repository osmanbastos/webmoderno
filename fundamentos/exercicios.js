//1
{
    const cumprimentar = nome => console.log(`Olá, ${nome}!`)
    cumprimentar("Leonardo")
    cumprimentar("Maria")
}
//2
{
    const converterIdadeEmAnosParaDias = anos => console.log(`${anos * 365}`)
    converterIdadeEmAnosParaDias(25)
    converterIdadeEmAnosParaDias(70)
}
//3
{
    const calcularSalario = function (horas, dinheiro){
        console.log(`Salário é igual a R$${horas * dinheiro}`)       
    }
    calcularSalario(150, 40.5)
}
//4
{
    const nomeDoMes = function (numero){
        switch(numero){
            case 1:
                console.log("janeiro")
                break;
            case 4:
                console.log("abril")
                break;
        }
    }
    nomeDoMes(1)
    nomeDoMes(4)
}
//5
{
    const maiorOuIgual = function(num1, num2){
        console.log(!!(num1 > num2 || num1 === num2))
    }
    maiorOuIgual(0, 0)
    maiorOuIgual(0, "0")
    maiorOuIgual(5, 1)
}
//6
{
    const inverso = function (valor) {
        const tipo = typeof valor
        if (tipo == "number") {
            console.log(-valor)
        }else if (tipo == "boolean") {
            console.log(!valor)
        }else{
            console.log(`booleano ou números esperados, mas o parâmetro é do tipo ${typeof valor}`)
        }
    }
    inverso(true)
    inverso("6")
    inverso(-2000)
    inverso("programação")
}
//7
