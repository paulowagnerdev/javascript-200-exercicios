/*Escreva um programa que verifica se uma palavra é um palíndromo. */

const palavra = "";

verificaPalin(palavra);

function verificaPalin(palavra){

    const palavraArray = palavra.split("");
    const palavraArrayReverse = palavra.split("");

    palavraArrayReverse.reverse();


    console.log(palavraArray.join(''));
    console.log(palavraArrayReverse.join(''));

    if(palavraArray.join('')===palavraArrayReverse.join('')){
        console.log(`É PALÍNDROMO! ${palavra}`);
        
    }else{
        console.log("NÃO É PALÍNDROMO");
    }
}

