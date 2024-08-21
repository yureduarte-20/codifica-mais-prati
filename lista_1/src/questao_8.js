/* 
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const prompt = require('prompt-sync')()

const a = prompt("Primeiro número: ")
const b = prompt("Segundo número: ")

console.log( a < b ? (a +" "+ b) : (b +" "+ a) )