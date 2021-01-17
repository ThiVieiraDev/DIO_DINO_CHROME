const background = document.querySelector('.background');
// import { position } from "./dino.js";
let resultado;


function createCactus() {
    let colorStatus = document.querySelector('#display_time').style.color
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
            if (cactusPosition < -60) {
                clearInterval(leftInterval);
                background.removeChild(cactus);
            } else if (cactusPosition < 60 && cactusPosition > 0 && position < 60) {
                //Gamer Over
                // debugger;
                clearInterval(leftInterval);
                parado = 1;
                window.clearInterval(tempo_controle);
                resultado = window.prompt('Você perdeu! Deseja jogar novamente ? <S/N>');
                if (resultado === 'S' || resultado === 's') {
                    window.location.reload();
                } else {
                    document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
                    return;
                }
            } else {
                cactusPosition -= 10;
                cactus.style.left = cactusPosition + 'px';
                if (colorStatus == "white") {
                    cactusPosition -= 15;
                    cactus.style.left = cactusPosition + 'px';
                }

            }
        },
        20);

    setTimeout(createCactus, randomTime);
}


// createCactus();