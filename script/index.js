function startGame() {
    // O jogo inicia assim que começam a surgir os cactus
    createCactus();
    // Iniciando distância
    parado = 0;

    // Logo que o jogo inicia, é disparado o timer
    tempo = +new Date();
    parado = 0;
    atualiza_tempo();
    tempo_controle = window.setInterval(atualiza_tempo, 600);

    document.getElementById('pause').style.opacity = 1;
    document.getElementById('start').style.opacity = 0;
}

function pauseGame() {
    // Com o alert abaixo o jogo pausa, porém quando volta os cactus estão a milhão por hora kkk
    // alert('Jogo pausado');

    console.log('fui selecionado');
    if (parado != 0) {
        alert('Favor iniciar o jogo antes');
    }
    else {
        // O time~distância pausa porém precisa criar a lógica para o cactus parar
        parado = 1;
        document.getElementById('pause').setAttribute('onclick', 'resumeGame()');
        document.getElementById('pause').innerHTML = "Resume";
    }
}

function resumeGame() {
    parado = 0;
    createCactus();
    tempo = +new Date();
    parado = 0;
    atualiza_tempo();
    tempo_controle = window.setInterval(atualiza_tempo, 600);

    document.getElementById('pause').setAttribute('onclick', 'pauseGame()');
    document.getElementById('pause').innerHTML = "Pausar";
}

// var sim = confirm("Selecione OK para iniciar o jogo ou cancelar para sair!");
// if (sim == true) {
//     parado = 0;
//     // O jogo inicia assim que começam a surgir os cactus
//     createCactus();

//     // Logo que o jogo inicia, é disparado o timer
//     tempo = +new Date();
//     parado = 0;
//     atualiza_tempo();
//     tempo_controle = window.setInterval(atualiza_tempo, 600);
//     teste = false;
// }
// else {
//     parado = 1;
//     nao = "Sua distância é: ";
//     document.getElementById("info").innerHTML = display + nao;
// }




// let inicia_jogo = window.prompt('Deseja inicia o jogo ? <S/N>');
// if (inicia_jogo === 'S') {
//     parado = 0;
//     // O jogo inicia assim que começam a surgir os cactus
//     createCactus();

//     // Logo que o jogo inicia, é disparado o timer
//     tempo = +new Date();
//     parado = 0;
//     atualiza_tempo();
//     tempo_controle = window.setInterval(atualiza_tempo, 600);
// }
// else {

// }