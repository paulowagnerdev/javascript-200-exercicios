// Escreva um programa que determina o maior entre três números.

function verificaMaiorNumero(num1,num2,num3){
    let arrayNumbers = [num1,num2,num3];

    const maiorNumero = arrayNumbers.toSorted(function(a,b) {return a-b});

    console.log(maiorNumero[maiorNumero.length-1]);
}

 

verificaMaiorNumero(50,50000,1);