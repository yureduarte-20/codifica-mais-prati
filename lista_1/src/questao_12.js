/* 
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/
const prompt = require("prompt-sync")()
let valor = Number(prompt("Digite um número: "))
console.log("Tabuada de", valor)
for (let i = 1; i <=10; i++)
{
    console.log(`${valor} x ${i} = ${valor * i}`)
}