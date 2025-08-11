/*Usando um laço do-while, imprima todos os números pares de 1 a 100. */


let numeroPar = 1;

do{
    if(numeroPar%2==0){
        console.log(numeroPar);
    }
    numeroPar++;
}while(numeroPar<=100)