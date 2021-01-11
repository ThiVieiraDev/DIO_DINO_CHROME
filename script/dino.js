const dino = document.querySelector('.dino');
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if (event.keyCode === 32 || event.keyCode === 38) {
        if(!isJumping){
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    
    let upInterval = setInterval(() => {

        //Verificando a posição do Dino
        if (position >= 150) {

            //Limitando altura do Dino
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                }
                else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }
        else {

            //Pulo do Dino
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp);
// export { position };