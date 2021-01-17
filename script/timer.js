// início do jogo
var tempo = 0;

// referência ao timer
var tempo_controle = 0;

// está parado (=1) ou não (=0)
var parado = 1;

// tempo para alterar o fundo

function atualiza_tempo() {
    if (parado)
        return;
    var tempo_segundos = Math.floor((+new Date() - tempo) / 1000);
    var display = "Distância: " + tempo_segundos.toString() * 100 + "km";
    document.getElementById("display_time").innerHTML = display;

    // Alterando para modo dark após 3 segundos (distancia 300 km)
    if (tempo_segundos >= 3) {
        document.querySelector('body').style.background = "black";
        document.querySelector('#display_time').style.color = "white";
        document.querySelector('.background').style.background = "url(background_dark.png)";
    }

    // Alterando para modo white após 8 segundos (distancia 300 km)
    if (tempo_segundos >= 8) {
        document.querySelector('body').style.background = "white";
        document.querySelector('#display_time').style.color = "black";
        document.querySelector('.background').style.background = "url(background.png)";
    }

    // Alterando para modo dark após 3 segundos (distancia 300 km)
    if (tempo_segundos >= 15) {
        document.querySelector('body').style.background = "black";
        document.querySelector('#display_time').style.color = "white";
        document.querySelector('.background').style.background = "url(background_dark.png)";
    }

    return;
}