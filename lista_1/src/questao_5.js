/* 
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/
const prompt = require('prompt-sync')()
function imc(peso, altura) {
    return peso / (altura * altura)
}
function categorias(imc) {
    if (imc < 16.9) {
        return "Muito abaixo do peso"
    } else if (imc < 18.4) {
        return "baixo peso"
    } else if (imc < 24.9) {
        return "Peso normal"
    } else if (imc < 29.9) {
        return "Sobrepeso"
    } else {
        return "Obesidade"
    }
}

let peso = prompt({ ask: 'Digite seu peso (KG): ' })
let altura = prompt({ ask: 'Digite sua altura (Metros): ' })

const valor_imc = imc(peso, altura)
console.log(categorias(valor_imc), valor_imc)