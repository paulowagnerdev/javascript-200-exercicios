/*Escreva um programa que verifica se um ano é bissexto. */

function verificaAno(year){
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log(`O ano ${year} é bissexto`);
    }else{
        console.log(`O ano ${year} NÃO é bissexto`);
    }
}

for(let i=2000; i<2100; i++){
    verificaAno(i);
}