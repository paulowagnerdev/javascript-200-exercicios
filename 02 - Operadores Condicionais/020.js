// Escreva um programa que imprime uma classificação baseada na nota de um aluno.

function calcNota(nota){
    if(nota > 9.0){
        console.log("A")
    }else if(nota < 9.0 && nota >= 8.0){
        console.log("B")
    }else if(nota < 8.0 && nota >= 6.0){
        console.log("C")
    }else if(nota < 6.0 && nota >= 5.0){
        console.log("D")
    }else{
        console.log("F")
    }
}

calcNota(8);
calcNota(7);
calcNota(5);
calcNota(3);
calcNota(10);
calcNota(9);
calcNota(3);
calcNota(0);
calcNota(7);