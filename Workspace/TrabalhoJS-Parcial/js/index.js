// Criação de VARIÁVELl e de EVENTO (submit).
let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    //Criação de variável CONST.
    const tarefa = document.getElementById("entrada").value
    const listaDeTarefas = document.querySelector('todo-list')

    //Criação de Objeto
    let obj = {
        'tarefa': tarefa,
        'listaDeTarefas': listaDeTarefas,
    }

    //Criação de função - VERIFICA CAMPOS
    verificaCampos(obj)
    
    function verificaCampos(obj) {
        if (tarefa == "") {
            alert("Ops! Você esqueceu de digitar a tarefa.")
            console.log("Ops! Você esqueceu de digitar a tarefa.")
            
        } else {
            alert("A tarefa digitada foi: " + tarefa)
            console.log("A tarefa digitada foi: " + tarefa)
        }         
    }
    
    // Criação do Array que irá receber a lista da tarefas digitadas:
    let armazenaTarefas = ["Estudar Algoritmo", "Estudar JavaScript","Entregar desafio JavaScript"];
    if (tarefa == "") {
        
    } else {
        armazenaTarefas.push(tarefa);
        console.table(armazenaTarefas)
    }
})

    //FUNÇÕES ADICIONAIS

        // Função Excluir Tarefa
        function criaBotaoTrash() {
        }

        // Função Filtrar - Tarefas FINALIZADAS
        function finalizadas() {
        }

        // Função Filtrar - Tarefas PENDENTES
        function naoFinalizadas() {
        }

        // Função Filtrar - Tarefas TODAS
        function todas() {
        }


