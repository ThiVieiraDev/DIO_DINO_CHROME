const background = document.querySelector('.background');
// import { position } from "./dino.js";
let resultado;

// início do jogo
var tempo = 0;

// referência ao timer
var tempo_controle = 0;

// está parado (=1) ou não (=0)
var parado = 1;

function atualiza_tempo()
{
    if (parado)
        return;
    var tempo_segundos = Math.floor((+new Date() - tempo) / 1000);
    var display = tempo_segundos.toString() + " seg";
    document.getElementById("display_tempo").innerHTML = display;
    return;
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    tempo = +new Date();
    parado = 0;
    atualiza_tempo();
    tempo_controle = window.setInterval(atualiza_tempo, 600);

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if (cactusPosition < 60 && cactusPosition > 0 && position < 60) {
            //Gamer Over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
            resultado = window.prompt('Você perdeu! Deseja jogar novamente ? <S/N>');
            if (resultado === 'S') {
                window.location.reload();
            }
            else {
                //exibirPlacar();
            }
        }
        else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

// createCactus();