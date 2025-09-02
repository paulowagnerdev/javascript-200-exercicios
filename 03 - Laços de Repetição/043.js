/*Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).*/

let numero = 333;
let numeroInvertido = '';
let i = 0;


while(i<numero.toString().length){
    let c = numero.toString(); 
    numeroInvertido += c[numero.toString().length - (i+1)]
    i++
}   

if(numero.toString() == numeroInvertido){
    console.log("É palíndromo");
}else{
    console.log("Número não é palíndromo");
}