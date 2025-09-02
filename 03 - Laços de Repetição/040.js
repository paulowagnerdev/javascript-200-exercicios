/*Exercício 40: Usando um laço while, crie um programa que inverta uma string. */

let s = 'PAULO WAGNER';
let i = 0;
let invert = ''

while(i<Math.floor(s.length)){
    let last = s[s.length-(i+1)];
    invert = invert + last;
    console.log(invert);
    i++
}




