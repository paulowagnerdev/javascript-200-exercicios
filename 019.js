// Escreva um programa que verifica se um número está dentro de um determinado intervalo.

const intervalo = [0,50];

function verificaIntervalo(intervalo,numero){
    if(numero>=intervalo[0]&&numero<=intervalo[1]){
        console.log("NÚMERO ESTÁ NO INTERVALOR");
    
    }else{
        console.log("NÚMERO NÃO ESTÁ NO INTERVALO");
       
    }
}

verificaIntervalo(intervalo,5);
verificaIntervalo(intervalo,51);
verificaIntervalo(intervalo,25);
verificaIntervalo(intervalo,35);