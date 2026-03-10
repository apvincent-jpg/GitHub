(function(){
    console.log("reading js"); 
    "use strict"; 

    //VARIABLES
    const gameImages = document.querySelector('.gameImages'); 
    const scoreDisplay = document.querySelectorAll('.score'); 
    const shootButton = document.querySelector('#shootButton'); 

    const overlay = document.querySelector('.frontOverlay');
    const gamePage = document.querySelector(".gamePage"); 

    let playerImgNum;

    const gameData = {
        object: ['game_rock.png', 'game_scissors.png', 'game_paper.png'],
        names: ['rock', 'paper', 'scissors'], 
        players: ['player 1', 'player 2'], 
        score: [0, 0], 
        playerChoice: null, 
        computerChoice: null, 
        gameEnd: 5
    }; 


    //START GAME
    function startGame(){
        overlay.style.display = "none";
        gamePage.style.display = "block";
        gameData.computerChoice = Math.floor(Math.random()*3); 
    }
    

    // OVERLAY CHOICE
    //player choice 
    document.querySelector('#chooseRock').addEventListener('click', function(){
       
        playerImgNum = 0;
         startGame(); 
    });

     document.querySelector('#choosePaper').addEventListener('click', function(){
        
         playerImgNum = 1;
          startGame(); 
    });

     document.querySelector('#chooseScissors').addEventListener('click', function(){
        
         playerImgNum = 2;
          startGame(); 
    });


    // SHOOT BUTTON
    shootButton.addEventListener('click', function(){
        console.log('shoot pressed');
       gameImages.innerHTML = `<img src = images/${gameData.object[playerImgNum]}> <img src = images/${gameData.object[gameData.computerChoice]}>`
    });

    function playRound() {
        // show images
        game.innerHTML = `
        <img src="images/${gameData.objects[gameData.playerChoice]}">
        <img src="images/${gameData.objects[gameData.computerChoice]}">`;

        //what happens during round
        checkWinner(); 
        updateScore();
    }

    // UPDATING SCORE

    function updateScore(){
        const player = gameData.playerChoice; 
        const computer = gameData.computerChoice; 

    if (
        (player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)
    ) {
        gameData.score[0]++; 
    }
    else{
        gameData.score[1]++; 
    }
    }

    //winner 
    //player 1 - user
    //player 2 - computer 
    function checkGameEnd(){
        if(gameData.score[0] === gameData.gameEnd){
            alert('You Win!'); 
            // location.reload(); 
        }
        
        if(gameData.score[1] === gameData.gameEnd){
            alert('You Lost :(');
            // location.reload();
        }
    }


    
})(); 