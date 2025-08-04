// Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

const game = ["PEDRA", "PAPEL", "TESOURA"];
let escolha = "PAPEL";
let theGameIsFinish = false;


do{

  let randomChoice = game[getRandomInt(3)];

  console.log(`VOCÊ ESCOLHEU ${escolha}`);
  console.log(`COMPUTADOR ESCOLHEU ${randomChoice}`);  
 
    if(escolha===randomChoice){
      console.log('\n\nHOUVE EMPATE!'); 
     }

     
    if(escolha === "PAPEL"){
        switch(randomChoice){
          case "TESOURA":
            console.log("\nCOMPUTADOR GANHOU");
            break;
          case "PEDRA":
            console.log("\nVOCÊ GANHOU");
            break;
        }  
        theGameIsFinish = true;
   }

     if(escolha === "TESOURA"){
      switch(randomChoice){
        case "PEDRA":
          console.log("\nCOMPUTADOR GANHOU");
          break;
        case "PAPEL":
          console.log("\nVOCÊ GANHOU");
          break;
       }  
      theGameIsFinish = true;
   }

   if(escolha === "PEDRA"){
    switch(randomChoice){
      case "PAPEL":
        console.log("\nCOMPUTADOR GANHOU");
        break;
      case "TESOURA":
        console.log("\nVOCÊ GANHOU");
        break;
     }  
    theGameIsFinish = true;
 }
  
      

}while(theGameIsFinish === false)
   

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }