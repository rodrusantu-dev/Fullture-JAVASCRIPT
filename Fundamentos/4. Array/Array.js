//CRIAÇÃO ARRAY BÁSICO
let names = ["Rodrigo", "José", "Ana"]

    names.push ("Silvia")     //INCLUI mais uma item FINAL no Array - informar o novo item.
    names.pop ()               //RETIRA o ULTIMO nome do Array
    names.unshift ("Maria")    //INCLUI mais um item no INICIO do Array
    names.shift ()             //RETIRA o PRIMEIRO nome do Array

// Mostra o array em forma de tabela.
console.table(names)       

//Lista a quantidade de nomes dentro do array.
let qtdnomes = names.length
console.table(`A quantidade de nomes é ${qtdnomes} dentro do array.`)   

// Achar a posição de um item dentro do Array com o indexOf.
let posNome = names.indexOf("José")
console.log(`A posição  do item pesquisado está na vaga de nº: ${posNome}`)

// Como demonstrar as posições do seu ARRAY e o que tem em cada.
for(let pos in names){
    console.log(`A posição ${pos} tem os valores: ${names[pos]}`)
}

  
//NOMES DO ARRAY EM ORDEM ALFABÉTICA
let frutas = ["Banana", "Melão", "Maça", "Caju"]
frutas.sort()
console.table(frutas)
console.log(`Segue lista de frutas para o mercado: ${frutas}`)

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

//FUNÇÃO "REDUCE"
// Usado no caso para totalizar carrinho de compras, ou seja, soma as posições do array.
let numeros2 = [1,2,3,4,5]
let resultado3 = numeros2.reduce((result, valor) => {
    return result + valor
},0)

console.log(resultado3)
