//Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

function verificaMedia(nota) {
    let result = 0;

    for (let i = 0; i < nota.length; i++) {
        result = result + nota[i];
    }
    result = result / nota.length;  

    imprimeSituacao(result);
   
}

function imprimeSituacao(resultadoNota){
    if(resultadoNota>=7){
        console.log("APROVADO! " + resultadoNota);
    }else{
        console.log("REPROVADO! " + resultadoNota);
    }
}

verificaMedia([7, 7, 6.9]);