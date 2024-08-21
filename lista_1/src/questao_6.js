/* 
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
 */
const prompt = require('prompt-sync')()

const a = Number(prompt("Digite A: "))
const b = Number(prompt("Digite B: "))
const c = Number(prompt("Digite C: "))

const isSquare = function(a,b,c)
{
    if([a,b,c].some(v => Number.isNaN(v)) ) return false;
    return a < (b+c) && b < (a+c) && c < (a+b)
}
if(isSquare(a,b,c))
{
    if(a == b && b == c){
        console.log("equilátero")
    }
    else if( (a == b) || (b == c) || (c == a) )
    {
        console.log("isósceles")
    } else {
        console.log("Escaleno")
    }
} else {
    console.error('Não é um triângulo.')
}