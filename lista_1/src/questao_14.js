/* 
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/
const prompt = require("prompt-sync")()
let valor = Number(prompt("Digite um número: "))
let fatorial = 1;
while(valor > 0){
    fatorial *= valor
    valor--
}
console.log(fatorial)