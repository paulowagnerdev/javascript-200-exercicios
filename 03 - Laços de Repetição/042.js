/*Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal. */

let binario = '1001010101001';
let count = 0
let pow = 0;
let j = 0;

for(let i=binario.length-1;i>=0;i--){
    pow = parseInt(binario[j]);
    count += pow * Math.pow(2,i)
    j++
}

console.log(count);

