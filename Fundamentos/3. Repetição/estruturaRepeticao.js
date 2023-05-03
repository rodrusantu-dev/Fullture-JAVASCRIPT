// *** WHILE quer dizer ENQUANTO.
// *** MESMA COISA - QUE PODE SER FEITA DE 3 FORMAS DIFERENTES.
// *** O QUE VOCÊ QUER QUE ACONTECE MÚLTIPLAS VEZES.

// BLOCO VARIÁVEIS DE REFERÊNCIA
let total_alunos = 11;
let contador = 1;

  //** while - Quando você NÃO sabe quantas vezes a repetição deve ocorrer

  while( contador < total_alunos ){
    console.log(`Aluno número: ${contador}`);
    contador++;
  }

  //** do while 

  do {
      console.log(`Aluno número: ${contador}`);
      contador++;
  } while ( contador < total_alunos ){
 
 }

  //** for - Quando você sabe a quantidade de vezes que a interação deve repetir

  for (let contador = 1; contador < total_alunos ;contador++  ) {
    console.log(`Aluno número: ${contador}`);
  }




