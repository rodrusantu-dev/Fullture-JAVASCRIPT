function somaNumeros(){
    let resultado = 1+1;
    
    if (resultado == 2){
        sucessoCallBack();
    }else{
        errorCallBack();
    }
    }
    
    function sucessoCallBack(){
    console.log("Sucesso!!!!!");
    }
    
    function errorCallBack(){
    console.log("Opa!!! Algo deu errado :( ");
    }
    
    somaNumeros();
    
    console.log("Código executado após a execução da função somaNumeros");