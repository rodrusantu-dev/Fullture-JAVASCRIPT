
let opcao = 1;

switch(opcao){
    case 0:
    sair();
    breack;
    case 1:
    enviar_mensagem("Olha, Funcinou");
    breack;
    case 2:
    enviar_foto();
    breack;
    case 3:
    enviar_video();
    breack;
    default:
    exibir_mensagens();
}