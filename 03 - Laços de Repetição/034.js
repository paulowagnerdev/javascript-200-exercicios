/*Exercício 34: Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" e para múltiplos de 5 imprima "Buzz". 
Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz). */

let i = 1;

do{

    if(i%3==0&&i%5==0){
        console.log(`FIZZBUZZ ${i}`)
    }else if(i%3==0){
        console.log(`FIZZ ${i}` );
    }else if(i%5==0){
        console.log(`BUZZ ${i}` );
    }

    i++
}while(i<=100)