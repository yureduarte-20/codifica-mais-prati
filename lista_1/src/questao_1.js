const prompt = require('prompt-sync')()
try {
    
    let int = prompt('Digite um número inteiro: ');
    if (Number.isNaN( parseInt(int) ) ) throw new Error()
    int = parseInt(int)
    function isEven(value) {
        return value % 2 == 0
    }
    console.log(isEven(int) ? 'Par' : 'Ímpar')
} catch (e) {
    console.error("Número formato inválido")
}