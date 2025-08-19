// Escreva um programa que verifica as cores de um semafáro.

function estado(cor) {
    if (cor === "VERDE") {
        console.log("Siga em frente.");
    } else if (cor === "AMARELO") {
        console.log("Atenção, diminua a velocidade.");
    } else if (cor === "VERMELHO") {
        console.log("Pare seu veículo.");
    } else {
        console.log("Envie uma cor válida.");
    }
}

function amarelo() {
    estado("AMARELO");
    setTimeout(() => {
        vermelho()
    }, 3000)
}

function verde() {
    estado("VERDE");
    setTimeout(() => {
        amarelo()
    }, 8000)
}

function vermelho() {
    estado("VERMELHO");
    setTimeout(() => {
        verde();
    }, 8000)
}

verde();