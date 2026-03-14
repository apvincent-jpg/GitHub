(function(){
    console.log("reading js"); 
    "use strict"; 

    //VARIABLES
    //fireball to other person
    let fireballActive = false; 

    const gameImages = document.querySelector('.gameImages'); 
    const scoreDisplay = document.querySelectorAll('.score'); 
    const shootButton = document.querySelector('#shootButton'); 
    const nextRoundButton = document.querySelector('#nextRoundButton');
    const restartButton = document.querySelector('#restartButton'); 
    const helpButton = document.querySelector('.helpButton');
    const returnGame = document.querySelector("#returnGame")

    const overlay = document.querySelector('.frontOverlay');
    const gamePage = document.querySelector(".gamePage"); 
    const winOverlay = document.querySelector('.winOverlay');
    const winMessage = document.querySelector('#winMessage'); 
    const fireNotice = document.querySelector('#fireNotice'); 
    const helpOverlay = document.querySelector('.helpOverlay');

    const rockAudio = document.getElementById('rockBeatsScissors'); 
    const paperAudio = document.getElementById('paperBeatsRock');
    const scissorsAudio = document.getElementById('scissorsBeatsPaper'); 
    const fireAudio = document.getElementById('fireSound');
    const buttonAudio = document.getElementById('buttonSound');

    let playerImgNum;

    const gameData = {
        object: ['game_rock.png', 'game_paper.png', 'game_scissors.png'],
        names: ['rock', 'paper', 'scissors'], 
        players: ['player 1', 'player 2'], 
        score: [0, 0], 
        playerChoice: null, 
        computerChoice: null, 
        gameEnd: 5
    }; 


    //START GAME
    function startGame(){

        fireNotice.innerHTML = "";
        gameImages.innerHTML = ""; 

        overlay.style.display = "none";
        gamePage.style.display = "block";

        shootButton.disabled = false; 

        gameData.playerChoice = playerImgNum; 
        gameData.computerChoice = Math.floor(Math.random()*3); 
    }
    

    // OVERLAY CHOICE
    //player choice 
    document.querySelector('#chooseRock').addEventListener('click', function(){

        buttonAudio.currentTime = 0;
        buttonAudio.play();
       
        playerImgNum = 0;
         startGame(); 
    });

     document.querySelector('#choosePaper').addEventListener('click', function(){

        buttonAudio.currentTime = 0;
        buttonAudio.play();
        
         playerImgNum = 1;
          startGame(); 
    });

     document.querySelector('#chooseScissors').addEventListener('click', function(){

        buttonAudio.currentTime = 0;
        buttonAudio.play();
        
         playerImgNum = 2;
          startGame(); 
    });


    // SHOOT BUTTON
    shootButton.addEventListener('click', function(){
       console.log('shoot pressed');
       shootButton.disabled = true;

       // fireball random 
       const fireballChance = Math.floor(Math.random()*10); 

       if (fireballChance === 0) {
        fireballEvent(); 
        return; 
       }

       shootButton.classList.add('noHover'); 

       //normal round with no fireball
       gameData.playerChoice = playerImgNum; 
       gameData.computerChoice = Math.floor(Math.random() * 3); 

    gameImages.innerHTML = `
    <img id="playerImg" src="images/${gameData.object[playerImgNum]}">
    <img id="computerImg" src="images/${gameData.object[gameData.computerChoice]}">
    `;

    
       updateScore(); 
       displayScore(); 
       checkGameEnd(); 

    
    });

    // HELP BUTTON 

    helpButton.addEventListener('click', function(){
        helpOverlay.style.display = "block"; 
        document.body.classList.add("darkBackground");
        gamePage.classList.add("dimGame");
        
    })

    returnGame.addEventListener('click', function(){
        helpOverlay.style.display = "none";
        document.body.classList.remove("darkBackground");
        gamePage.classList.remove("dimGame");
    });

    // NEXT ROUND BUTTON
    nextRoundButton.addEventListener('click', function(){
        fireNotice.innerHTML = "";
        gameImages.innerHTML = ""; 

        shootButton.classList.remove('noHover'); 
        shootButton.disabled = false;

        overlay.style.display = "block"; 
        gamePage.style.display = "none";
    })




    function playRound() {
        // show images
        game.innerHTML = `
        <img src="images/${gameData.objects[gameData.playerChoice]}">
        <img src="images/${gameData.objects[gameData.computerChoice]}">`;

        //what happens during round
        checkWinner(); 
        updateScore();
    }

    // DISPLAY SCORE
    function displayScore() {
        scoreDisplay[0].innerHTML = gameData.score[0]; 
        scoreDisplay[1].innerHTML = gameData.score[1]; 
    }

    // UPDATING SCORE
    function updateScore(){
        const player = gameData.playerChoice; 
        const computer = gameData.computerChoice; 

        const playerImg = document.getElementById("playerImg");
        const computerImg = document.getElementById("computerImg");

    if (
        (player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)
    ) {
        gameData.score[0]++; 

        scoreDisplay[0].classList.add('scorePulse'); 

        setTimeout(function(){
            scoreDisplay[0].classList.remove("scorePulse"); 
        }, 600); 

        setTimeout(function(){
            playerImg.classList.add("winner");
            computerImg.classList.add("loserRight");

        }, 500); 

        

        //audio
        if (player === 0 && computer === 2) rockAudio.play(); 
        if (player === 1 && computer === 0) paperAudio.play(); 
        if (player === 2 && computer === 1) scissorsAudio.play(); 

    }
    else if (player !== computer) {
        gameData.score[1]++; 

        scoreDisplay[1].classList.add('scorePulse'); 

        setTimeout(function(){
            scoreDisplay[1].classList.remove("scorePulse"); 
        }, 600);

        setTimeout(function(){
            computerImg.classList.add("winner");
            playerImg.classList.add("loserLeft");
        }, 500)

        

        //audio
        if (computer === 0 && player === 2) rockAudio.play(); 
        if (computer === 1 && player === 0) paperAudio.play(); 
        if (computer === 2 && player === 1) scissorsAudio.play();
    }
    
    displayScore(); 
    }

    //FIREBALL
    function fireballEvent() {
    console.log('FIREBALL TRIGGERED');

    fireAudio.currentTime = 0;
    fireAudio.play();

    const thrower = Math.floor(Math.random() * 2);

    const target = thrower === 0 ? 1 : 0;
    gameData.score[target] = 0;

    //need player 1 vs player 2 hit
    if (target === 0) {
        gameImages.innerHTML = `
            <img id="playerImg" class="fireball" src="images/game_fireball.png">
            <img id="computerImg" src="images/game_rock.png">
        `;
        fireNotice.innerHTML = 'Player 1 hit by fireball!';
    } else {
        gameImages.innerHTML = `
            <img id="playerImg" src="images/game_rock.png">
            <img id="computerImg" class="fireball" src="images/game_fireball.png">
        `;
        fireNotice.innerHTML = 'Player 2 hit by fireball!';
    }


    displayScore();


    document.body.style.backgroundColor = "orange";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 1500);
}
    //winner 
    //player 1 - user
    //player 2 - computer 
    function checkGameEnd(){
        if(gameData.score[0] === gameData.gameEnd){
            winMessage.innerHTML = "Player 1 Wins!"; 
            winOverlay.style.display = "block"; 
            gamePage.style.display = "none"; 
        }
        
        if(gameData.score[1] === gameData.gameEnd){
            winMessage.innerHTML = "Player 2 Wins!"; 
            winOverlay.style.display = "block"; 
            gamePage.style.display = "none"; 
        }
    }

    restartButton.addEventListener('click', function(){
        gameData.score[0] = 0; 
        gameData.score[1] = 0; 

        displayScore(); 

        winOverlay.style.display = "none"; 

        overlay.style.display = "block"; 
        gamePage.style.display = "none"; 
    })


    
})(); 