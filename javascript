/*
    Função responsável por mostrar ou esconder
    a resposta de cada cartão.

    O parâmetro "numero" indica qual cartão
    foi selecionado.
*/
function mostrarResposta(numero) {

    /*
        Montamos o ID do elemento HTML.

        Por exemplo:

        numero = 1
        resultado = "resposta1"
    */
    const resposta = document.getElementById("resposta" + numero);


    /*
        Verificamos se a resposta está escondida.
    */
    if (resposta.style.display === "none" || resposta.style.display === "") {

        /*
            Mostra a resposta.
        */
        resposta.style.display = "block";

    } else {

        /*
            Esconde novamente a resposta.
        */
        resposta.style.display = "none";
    }
}
