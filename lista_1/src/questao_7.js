/* 
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require("prompt-sync")()
function getValor(qtde)
{
    if( qtde < 12) return 0.30
    else return 0.25
}
const qtde = prompt("Digite a quantidade de maças: ")

console.log("Valor total:", qtde * getValor(qtde))
