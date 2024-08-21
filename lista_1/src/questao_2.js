const prompt = require('prompt-sync')()
try {

    let idade = prompt('Digite a idade: ');
    if (Number.isNaN(Number(idade))) throw Error();
    idade = parseInt(idade)
    if (idade < 12) {
        console.log("Criança")
    } else if (idade < 18) {
        console.log("Adolescente")
    } else if (idade < 60) {
        console.log("Adulto")
    } else {
        console.log("Idoso")
    }

} catch (e) {
    console.error("Número formato inválido")
}