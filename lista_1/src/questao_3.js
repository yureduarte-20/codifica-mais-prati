const prompt = require('prompt-sync')()

try {
    let nota = prompt('Digite a nota: ');
    if (Number.isNaN(Number(nota))) throw Error();
    nota = parseInt(nota)
    if (nota >= 7) {
        console.log("Aprovado")
    } else if (nota >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado")
    }
} catch(e){
    console.error("Número formato inválido")
}