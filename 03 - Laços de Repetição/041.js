/*Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário. */

let num = 5000;
let i = 1;
let binario = '';

do{
    binario = Math.floor((num % 2)) + binario;
    num /= 2;
    console.log(num)
}while(i<=num)

console.log(binario);

    