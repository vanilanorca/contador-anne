// Data e hora do pedido de namoro (ajuste para a data e hora certa)
const dataPedido = new Date("2024-08-01T21:29:00"); // Exemplo: 15 de agosto de 2024 às 20h30

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataPedido;

    // Cálculo do tempo decorrido
    const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
    const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const dias = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    if(anos == 0){
        document.getElementById("contador").innerHTML = meses + " meses, " + dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s";
    }else if(anos == 1){
        document.getElementById("contador").innerHTML = anos + " ano, " + meses + " meses, " + dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s";
    }else{
        document.getElementById("contador").innerHTML = anos + " anos, " + meses + " meses, " + dias + " dias, " + horas + "h " + minutos + "m " + segundos + "s";
    }

    // Atualiza o contador na tela
    
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função ao carregar a página
atualizarContador();