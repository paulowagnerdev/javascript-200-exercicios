// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let fib = 0;
let n = 1;


for(let i = 1; i<= 10; i++){
    
    console.log(fib);

    fib = fib+n;
    n = fib-1;
   
}



/*0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584

0+1=1
1+1=2
2+3=5
3+5=8

*/