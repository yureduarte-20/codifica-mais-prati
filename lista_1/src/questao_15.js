/* 
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

let anterior = 0
let atual  = 1
for(let i = 0; i < 10; i++)
{
    if(i == 0 ){
        console.log(1)
        continue;
    }
    let proximo = anterior + atual
    console.log(proximo)
    anterior = atual
    atual = proximo
}