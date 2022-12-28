const promptSync = require('prompt-sync')
const prompt = promptSync()

// CALCULA IMC
    let peso = prompt("Digite seu peso: ")
    let altura = prompt("Digite sua altura: ")
    let resultado = peso / altura**2

    console.log(resultado.toFixed(2));