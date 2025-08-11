/*Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero. */

function verificaNumero(numero){
    if(numero===0){
        console.log("NÚMERO É 0");
        return;
    }else if(numero>=1){
        console.log(`NÚMERO É POSITIVO: ${numero}`);
    }else{
        console.log(`NÚMERO É NEGATIVO: ${numero}`)
    }
}

verificaNumero(1);
verificaNumero(-5);
verificaNumero(10);
verificaNumero(0);
verificaNumero(151);