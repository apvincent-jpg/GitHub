(function(){
    console.log("reading js"); 
    "use strict"; 

    const game = document.querySelector('.gameImages'); 
    const scoreDisplay = document.querySelectorAll('.score'); 
    const shootButton = document.querySelector('.shootButton'); 

    const overlay = document.querySelector('.frontOverlay');
    const gamePage = document.querySelector(".gamePage"); 

    const gameData = {
        object: ['game_rock.png', 'game_scissors.png', 'game_paper.png'],
        names: ['rock', 'paper', 'scissors'], 
        players: ['player 1', 'player 2'], 
        score: [0, 0], 
        playerChoice: null, 
        computerChoice: null, 
        gameEnd: 5
    }; 

    function startGame(choice){
        gameData.playerChoice = choice; 
        
        overlay.style.display = "none";
        gamePage.style.display = "block";

        playRound();
    }

    // when the player chooses
    document.querySelector('#chooseRock').addEventListener('click', function(){
        startGame(0); 
    });

     document.querySelector('#choosePaper').addEventListener('click', function(){
        startGame(1); 
    });

     document.querySelector('#chooseScissors').addEventListener('click', function(){
        startGame(2); 
    });


    function playerSelection(choice) {
        gameData.playerChoice = choice;
    }

    // shoot button

    shootButton.addEventListener('click', function(){
        playRound(); 
    });

    function playRound() {
        if(gameData.playerChoice === null){
            alert('pick rock paper, or scissors first!');
            return;
        }

        // computer pick, generate random array number
        gameData.computerChoice = Math.floor(Math.random()*3); 

        // show images
        game.innerHTML = `
        <img src="images/${gameData.objects[gameData.playerChoice]}">
        <img src="images/${gameData.objects[gameData.computerChoice]}">`;

        checkWinner(); 
        updateScore();
    }

    // finding who wins

    function checkWinner(){
        const player = gameData.playerChoice; 
        const computer = gameData.computerChoice; 

    //player wins 

    if (
        (player === 0 && computer === 2) || (player === 1 && computer === 0) || (player === 2 && computer === 1)
    ) {
        gameData.score[0]++; 
    }
    else{
        gameData.score[1]++; 
    }

    }

    //updating score 

    function updateScore(){
        scoreDisplay[0].textContent = gameData.score[0]; 
        scoreDisplay[1].textContent = gameData.score[1]; 
    }

    function checkGameEnd(){
        if(gameData.score[0] === gameData.gameEnd){
            alert('You Win!'); 
            location.reload(); 
        }
        
        if(gameData.score[1] === gameData.gameEnd){
            alert('You Lost :(');
            location.reload();
        }
    }





    
})(); 