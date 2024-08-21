/* 
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/
const prompt = require('prompt-sync')()
const numeros = []
let numero = 0
do {
    numero = Number(
        prompt("Digite um número: ")
    )
    if(numero > 0) numeros.push(numero)
} while(numero > 0)

console.log( "Média:", numeros.reduce((prev, curr) => prev + curr, 0) / numeros.length )