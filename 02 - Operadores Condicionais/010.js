/*Exercício 10: Escreva um programa que recebe duas notas de um aluno, 
calcula a média e imprime se o aluno foi 
aprovado ou reprovado (considerando que a média para aprovação é 7). */

let notasAlunos = [6,7];

calculaMedia(notasAlunos);

function calculaMedia(notas){
    let media = (notas[0]+notas[1]) / 2;
    if(media>=7){
        console.log("APROVADO");
        return;
    }else{
        console.log("REPROVADO");
        return;
    }

}