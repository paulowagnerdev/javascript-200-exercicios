/*Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem 
indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.*/

calculaImc(66,1.62);

function calculaImc(peso,altura){

    const result = peso / (Math.pow(altura,2));

    if(result<=18.5){
        console.log("MAGREZA O " + result);
        return;
    }else if(result>=18.6&&result<=24.9){
        console.log("NORMAL O");
        return;
    }else if(result>=25&&result<=29.9){
        console.log("SOBREPESO I");
    }else if(result>=30&&result<=39.9){
        console.log("SOBREPESO II");
    }else{
        console.log("OBESIDADE GRAVE III");
    }
}
