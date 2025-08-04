// Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

function verificaHabilitacao(idade){
    if(idade>=18){
        console.log("HABILITADO PARA DIRIGIR!")
    }else{
        console.log("NÃO ESTÁ HABILITADO PARA DIRIGIR!");
    }
}

verificaHabilitacao(18);
verificaHabilitacao(17);
verificaHabilitacao(35);