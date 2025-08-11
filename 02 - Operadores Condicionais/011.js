/*Escreva um programa que verifica se uma pessoa pode votar com base na idade. */


function verificaIdadeVoto(idade){
    if(idade>=16){
        return true;
    }else{
        return false;
    }
}

console.log(verificaIdadeVoto(16));
console.log(verificaIdadeVoto(10));
console.log(verificaIdadeVoto(28));
console.log(verificaIdadeVoto(35));