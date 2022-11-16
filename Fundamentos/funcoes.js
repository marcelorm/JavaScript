//let x = "";
//console.log(x)
//x = "oi";

//DECLARAÇÃO DE FUNÇÃO

//1) declara a função

                    //era string e se tornou o valor de soma()
function imprimeTexto(texto) {
    console.log(texto)
}

//2) executa a função (1 ou + vezes)

imprimeTexto(soma());
//imprimeTexto("outro texto")

//três formas de escrever funções

function soma (){
  //a linha do retorno deve ser o último elemento antes de fechar o código, pois se houver algo, isto não será executado
    return 2 + 2;
}

//console.log(soma())