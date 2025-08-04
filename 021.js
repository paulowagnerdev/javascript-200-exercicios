// Escreva um programa que determina a estação do ano com base no mês.

let mes = "JUNHO";

function verrificaEstacao(mes){
    const meses = ["JANEIRO","FEVEREIRO","MARÇO","ABRIL","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DESEMBRO"];

    for(let i=0;i<=meses.length;i++){
        if(mes===meses[i]){
            if(i>=0&&i<=2){
                console.log("VERÃO!");
                break;
            }else if(i>=3&&i<=6){
                console.log("PRIMAVERA!");
            }
        }
    }
}

verrificaEstacao(mes.toUpperCase());