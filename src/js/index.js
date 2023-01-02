const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let x = 0;

const jump = () => {
    mario.style.animation = "";
    setTimeout(() => mario.style.animation = 'jump 500ms ease-out', 10);
    console.log("j")
}


const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;
    
        mario.style.animation ='none';
        mario.style.left = `${marioPosition}px`;

        mario.src = 'src/img/game/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }else{
       
    }

    if(Keydown){
        x = x + 1;
        console.log(x);
    }
}, 10);

document.addEventListener('keydown', jump);