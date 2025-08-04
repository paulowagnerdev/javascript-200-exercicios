/*
Exercício 7: Declare três variáveis e atribua valores numéricos a elas. 
Use operadores de comparação para comparar os valores entre as variáveis. Imprima os resultados
*/

let num = Math.floor(10 * Math.random());
let num2 = Math.floor(10 * Math.random());
let num3 = Math.floor(10 * Math.random());



console.log(`OS NÚMEROS ESCOLHIDOS SÃO: \n\nNÚMERO 1: ${num} \nNÚMERO 2: ${num2} \nNÚMERO 3: ${num3}\n`);

console.log(Math.floor(num)===Math.floor(num2));
console.log(Math.floor(num3)===Math.floor(num2));
console.log(Math.floor(num)===Math.floor(num3));