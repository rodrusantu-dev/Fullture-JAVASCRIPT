const promptSync = require('prompt-sync')
const prompt = promptSync()

// EXECUTANDO:

//CRIAÇÃO ARRAY BÁSICO
    let names = ["primeiroNome", "segundoNome","terceiroNome"]

        names.push  ("quartoNome") //INCLUI mais uma item FINAL no Array
        names.pop ()               //RETIRA o ULTIMO nome do Array

        names.unshift ("zeroNome") //INCLUI mais um item no INICIO do Array
        names.shift ()             //RETIRA o PRIMEIRO nome do Array

    console.table(names)                         //Lista os nomes
    console.table(names.length)                  //Lista a quantidade de nomes finais
    console.log(names.indexOf('segundoNome'))    //A posição do nome dentro do Array

    
//NOMES DO ARRAY EM ORDEM ALFABÉTICA
let nomes = ["Rodrigo", "Ana", "Zeus", "Barbara", "Camila"]
nomes.sort()
console.table(nomes)

//NÚMEROS EM ORDEM CRESCENTE
let x = [3,2,7,8]
x.sort()
console.table(x)

//NÚMEROS EM ORDEM DECRESCENTE
let y = [3,2,7,8]
y.reverse()
console.table(y)

// FUNÇÃO "MAP" 
//ELE CRIA UM NOVO ARRAY, PEGANDO O ANTIGO E O QUE EU FIZER COM ELE.
let valores = [80,100,120,140,160]
let resultado = valores.map(valor => valor * 2)
console.log(resultado)

// FUNÇÃO "FILTER"   
// ELE FILTRA O ARRAY. SE A "INSTRUÇÃO" FOR VERDADEIRO EXIBE, SE NÃO FOR NÃO EXIBE.
let numeros = [10,20,30,40,51]
let resultado2 = numeros.filter(numero => numero % 2 ==0)
console.log(resultado2)

// OUTRO JEITO DE FAZER CASO ENTRE EM MODO MAIS COMPLEXO:
// let resultado2 = numeros.filter(numero => {
//    return numero % 2 ==0
// })
// console.log(resultado2)

//FUNÇÃO "REDUCE"
// Usado no caso para totalizar carrinho de compras, ou seja, soma as posições do array.
let numeros2 = [1,2,3,4,5]
let resultado3 = numeros2.reduce((result, valor) => {
    return result + valor
},0)

console.log(resultado3)