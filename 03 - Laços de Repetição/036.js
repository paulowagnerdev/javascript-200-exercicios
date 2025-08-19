/*
Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100 
(um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).
*/


let count = 0;

for (let num = 1; num < 100; num++) {
    for (let divisor = 1; divisor < num; divisor++) {
        if (num % divisor == 0 && num != 0 && num != divisor) {
            count += divisor;
        }
    }
    if (count == num) {
        console.log(`O número: ${num} é perfeito!`);
    }
    count = 0;
}

