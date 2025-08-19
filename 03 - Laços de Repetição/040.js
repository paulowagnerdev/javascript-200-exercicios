/*Exercício 40: Usando um laço while, crie um programa que inverta uma string. */

let s = 'PAULO';

for (let i = 0; i < Math.floor(s.length/2); i++) {

    let last = s[s.length - (i+1)];
    let first = s[i];



    console.log(first);
    console.log(last);
   
}


