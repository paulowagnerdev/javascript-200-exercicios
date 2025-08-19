// Escreva um programa que determina o número de dias em um mês.

function verificaMes(mes){
    if(mes == 2){
        return console.log("28 dias! ou 29 dias!")
    }else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){
        return console.log("30 dias!")
    }else{
         return console.log("31 dias!")
    }
}

verificaMes(2);
verificaMes(4);
verificaMes(1);