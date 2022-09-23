'use strict'

let playerScore = 0;
let computerScore = 0;
let playerRoll;
let computerRoll;
let wait = false;



// EVENT LISTENERS
// ----------------

// player rps selection
document.querySelector('.rps').addEventListener('click', e =>{
    if(wait) return;
    const str = `${e.target.className} ${e.target.parentElement.className}`;
    setPlayerRoll(str);
    setComputerRoll();
    animateRPS();

    play();
});





// FUNCTIONS
// ---------

// play (main function)
function play(){    
     
    
    // console.log(`./images/${computerRoll}.png`);

    
}

// animates the computer v player battle section
function animateRPS(){
    const rollComp = document.querySelector('.battle .computer');
    const rollPlayer = document.querySelector('.battle .player');
    let roundWinner;

    rollComp.classList.add('animate_shake--left');
    rollPlayer.classList.add('animate_shake--right');
    wait = true;
    setTimeout(()=>{
        rollComp.children[0].src =`./images/${computerRoll}.png`;
        rollPlayer.children[0].src =`./images/${playerRoll}.png`;
        setTimeout(() => {
            rollComp.classList.remove('animate_shake--left');
            rollPlayer.classList.remove('animate_shake--right');
            roundWinner = playRound(playerRoll, computerRoll);
            animateScoreIncrement(roundWinner);
            updateCommentary(roundWinner);
            setTimeout(() => {
                rollComp.classList.add('animate_reset');
                rollPlayer.classList.add('animate_reset');
                setTimeout(() => {
                    rollComp.children[0].src =`./images/rock.png`;
                    rollPlayer.children[0].src =`./images/rock.png`;
                    rollComp.classList.remove('animate_reset');
                    rollPlayer.classList.remove('animate_reset');
                    setTimeout(() => {
                        removeCommentary();
                        wait = false;
                    }, 500);
                }, 250);
            }, 1000);
        }, 750);
    }, 2000)
}

// increments the winner of the rounds score (playerScore or computerScore)
// shows the new score with animation  
function animateScoreIncrement(victor){
    if(victor == 'draw') return;
    const element = document.querySelector(`.${victor} .score`);
    const animationClass = 'animiate_incremental-score';
    
    // increment score
    let score;
    if(victor == 'player'){
        playerScore++;
        score = playerScore;
    } else {
        computerScore++;
        score = computerScore;
    }

    // add animation class to current counter element
    element.children[0].classList.add(animationClass);

    // create and append new score element with animation class
    const div = document.createElement('div');
    div.textContent = score;
    div.classList.add(animationClass);
    element.appendChild(div);

    // remove first element (reset the counter elements)
    setTimeout(() => {
        element.children[1].classList.remove(animationClass)
        element.removeChild(element.children[0]);
    }, 1500);
}

// sets computerRoll variable
function setComputerRoll(){
    const arr = ['rock', 'paper', 'scissors'];
    computerRoll = arr[Math.floor(Math.random()*arr.length)];
}

// sets playerRoll variable
function setPlayerRoll(str){
    str.includes('rock')? playerRoll = 'rock': false;
    str.includes('paper')? playerRoll = 'paper': false;
    str.includes('scissors')? playerRoll = 'scissors': false;
}

// evaluates the roll and returns the winner of the round
function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            return 'computer';
        }else if(computerSelection == 'scissors'){
            return 'player';
        }else{
            return 'draw';
        }         
    }

    if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            return 'player';
        }else if(computerSelection == 'scissors'){
            return 'computer';
        }else{
            return 'draw';
        }         
    }

    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            return 'player';
        }else if(computerSelection == 'rock'){
            return 'computer';
        }else{
            return 'draw';
        }         
    }
}

// display commentary
function updateCommentary(victor){
    const commentary = document.querySelector('.commentary');
    let message;
    
    if(victor == 'draw'){
        message = "It's a draw. Play again."
    } else if(victor == 'player') {
        message = 'Player wins. Well done!'
    } else {
        message = 'Computer wins.'
    }

    // create and display commentary element
    const h1 = document.createElement('h1');
    h1.innerText = message;
    h1.classList.add('animate_fade-in-out');
    
    if(commentary.children.length > 0) commentary.removeChild(commentary.firstElementChild);
    commentary.appendChild(h1);
}

// delete any commentary
function removeCommentary(){
    const commentary = document.querySelector('.commentary');
    if(commentary.children.length > 0) commentary.removeChild(commentary.firstElementChild);
}

