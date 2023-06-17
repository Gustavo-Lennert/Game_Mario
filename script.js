function game(){ 

    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const clound = document.querySelector('.clounds');
    const floor = document.querySelector('.background-floor');
    const gameOver = document.querySelector('.game-over');
    const pressContinue = document.querySelector('.continue');
    const score = document.querySelector('.value-score');
    const pause = document.querySelector('.paused');
    let pipePosition = pipe.offsetLeft;
    let secounds = 0;
    let counter = 0;

    //Jump mario
    document.addEventListener("keydown", function(e){
        if(e.key === " "){
            mario.classList.add('jump');
        
            //setTimeout -> executa apenas uma vez, assim que for chamada ou após um tempo passado por parâmetro
            setTimeout(() => {
    
                //Fuction for to remove jump class
                mario.classList.remove('jump');
    
            }, 500);
        }
    });

    function startScore(){
        counter = setInterval(() =>{
            // Secounds counter
            secounds++;
            score.innerHTML = secounds;
        }, 200);        
    }
        
    startScore();

    //setInterval -> executa um loop durante o tempo passado por parâmetro
    const loop = setInterval(() => {
          
       let pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloundPosition = +window.getComputedStyle(clound).left.replace('px', '');

        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

            //Pause score
            clearInterval(counter);        
            floor.classList.remove('floor-animation');
            clound.classList.remove('clound-animation');
            clound.style.left = `${cloundPosition}px`;

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            gameOver.style.display = 'flex';

            //Animation press to contine
            setTimeout(() => {
                pressContinue.style.opacity = '1';
                pressContinue.style.animation = 'continue-animation 1.5s infinite ease';
                document.addEventListener('keydown', () =>{
                    location.reload();
                });
            }, 1500);

            //End of loop
            clearInterval(loop);
        }
    }, 10);
}
//Chamada da função pai
game();