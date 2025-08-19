// Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.


let target = 25;
let min = 0;
let max = 100;
let chute;

while(chute != target){

    chute = Math.floor((max + min)/2);

    if(chute > target){
        max = chute;
    }else if(chute < target){
        min = chute;
    }
}

console.log("O NÚMERO QUE PENSOU FOI: " + chute);





