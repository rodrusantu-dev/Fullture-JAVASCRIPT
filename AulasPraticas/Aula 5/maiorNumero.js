const promptSync = require('prompt-sync')
const prompt = promptSync()

/* 
Crie uma função em JavaScript que receba como argumento três números. Essa função deverá verificar qual é
o maior número entre os três e exibir esse número no console. Para resolver este exercício você deverá fazer
uso de variáveis e estrutura de decisão IF.
*/

    let numero1 = prompt("Digite um PRIMEIRO número: ")
    let numero2 = prompt("Digite um SEGUNDO número: ")
    let numero3 = prompt("Digite um TERCEIRO número: ")
    
    function compara() {

      let maior;
      
      // encontrando o maior
      if(numero1 > numero2){
      if(numero1 > numero3)
      
      maior = numero1;
      else
      maior = numero3;
      }
      
      else{
      if(numero2 > numero3)
      maior = numero2;
      else
      maior = numero3;
      }
      
      console.log("O Maior numero é ", maior);
      }
      
      compara(numero1, numero2, numero3)
   
 