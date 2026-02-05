 (function(){
    "use strict";
    console.log('reading js');

    const madLib = document.querySelector('#madlib');
    const form = document.querySelector('form');
    const madlibOverlay = document.querySelector('#madlib-overlay'); 
    const exitBtn = document.querySelector('#exit'); 
    const errorMessage = document.querySelector('#error');
    const overlayArticle = document.querySelector('#madlib-output');

    form.addEventListener('submit', function(event){
        event.preventDefault();

        madlibOverlay.style.display = 'block';
        
       const game = document.querySelector('#game').value;
       const adj = document.querySelector('#adj').value;
       const number1 = document.querySelector('#number1').value;
       const verb = document.querySelector('#verb').value;
       const number2 = document.querySelector('#number2').value;
       const disaster = document.querySelector('#disaster').value;
       const time1 = document.querySelector('#time1').value;
       const noun = document.querySelector('#noun').value;
       const holiday = document.querySelector('#holiday').value;
       const time2 = document.querySelector('#time2').value;
       
       //filling out form
       let myText;
        if( game == ''){
            myText = "please provide a game";
            document.querySelector('#game').focus();
            errorMessage.innerHTML = myText;
        }else  if( adj == ''){
            myText = "please provide a adjective";
            document.querySelector('#adj').focus();
            errorMessage.innerHTML = myText;
        }else if( number1 == ''){
            myText = "please provide an number";
            document.querySelector('#number1').focus();
            errorMessage.innerHTML = myText;
        }else if( verb == ''){
            myText = "please provide a verb";
            document.querySelector('#verb').focus();
            errorMessage.innerHTML = myText;
        }else if( number2 == ''){
            myText = "please provide a number";
            document.querySelector('#number2').focus();
            errorMessage.innerHTML = myText;
        }else if( disaster == ''){
            myText = "please provide a disaster";
            document.querySelector('#disaster').focus();
            errorMessage.innerHTML = myText;
        }else if( time1 == ''){
            myText = "please provide a length of time";
            document.querySelector('#time1').focus();
            errorMessage.innerHTML = myText;
        }else if( noun == ''){
            myText = "please provide a noun";
            document.querySelector('#noun').focus();
            errorMessage.innerHTML = myText;
        }else if( holiday == ''){
            myText = "please provide a holiday";
            document.querySelector('#holiday').focus();
            errorMessage.innerHTML = myText;
        }else if( time2 == ''){
            myText = "please provide a length of time";
            document.querySelector('#time2').focus();
            errorMessage.innerHTML = myText;

        } else {
            myText = `<h2>Game Instructions</h2>
      <p>Okay, the game is actually very simple. It’s just like <span>${game}</span> but a bit more <span>${adj}</span>.</p>
      <p>First, each player draws <span>${number1}</span> cards from the playing deck.</p> <p>If someone accidentally draws a heart, then everyone must <span>${verb}</span>, and if you don’t immediately, you have to <span>${verb}</span> for the rest of the game.</p>
      <p>The game ends when someone reaches <span>${number2}</span> points, or when a(n) <span>${disaster}</span> happens, which usually takes about <span>${time1}</span> years.</p>
      <p>That is, unless the <span>${noun}</span> rule is in effect, which is on every day except <span>${holiday}</span>. This rule makes it so that if a(n) ace is played, the round immediately pauses for <span>${time2}</span>, all scores are reversed, and the game starts over.</p> <p>But it is very easy, you’ll get the hang of it after the practice round.</p>`
        

        // clearing form
       madLib.innerHTML = myText;
       document.querySelector('#game').value = '';
       document.querySelector('#adj').value = '';
       document.querySelector('#number1').value = '';
       document.querySelector('#verb').value = '';
       document.querySelector('#number2').value = '';
       document.querySelector('#disaster').value = '';
       document.querySelector('#time1').value = '';
       document.querySelector('#noun').value = '';
       document.querySelector('#holiday').value = '';
       document.querySelector('#time2').value = '';

       madlib.innerHTML = myText; 
       madlibOverlay.style.display = "block";
      
       }
    })

    //closing form
       exitBtn.addEventListener('click', function(event){
        event.preventDefault(); 
        madlibOverlay.style.display = 'none';

     //madlib on page
       overlayArticle.innerHTML = myText + `<p><a href="#" id="exit">Restart Mad Lib!</a></p>`;



    })

    
})();


