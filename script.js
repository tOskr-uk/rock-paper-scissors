'use strict'

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const arr = ['rock', 'paper', 'scissors'];
    const roll = Math.floor(Math.random()*3);
    console.log(`Computer rolls ${arr[roll]}`);
    return arr[roll];
}

function getPlayerChoice(){
    const choice = prompt('Rock, Paper or Scissors?')
    if(choice == 'rock' || choice =='paper' || choice =='scissors'){
        console.log(`Player rolls ${choice}`);
        return choice;
    } else {
        getPlayerChoice()
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            return 'Computer Wins!';
            computerScore++;
        }else if(computerSelection == 'scissors'){
            return 'Player Wins!';
            playererScore++;
        }else if(computerSelection == 'scissors'){
            return 'Its a draw!';
        }         
    }

    if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            return 'Player Wins!';
            playererScore++;
        }else if(computerSelection == 'scissors'){
            return 'Computer Wins!';
            computerScore++;
        }else if(computerSelection == 'paper'){
            return 'Its a draw!';
        }         
    }

    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            return 'Player Wins!';
            playererScore++;
        }else if(computerSelection == 'rock'){
            return 'Computer Wins!';
            computerScore++;
        }else if(computerSelection == 'scissors'){
            return 'Its a draw!';
        }         
    }
}



function game(){
    for(let i=0;i<5;i++){
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }

    if(playerScore > computerScore) {
        console.log(`Player has won. Player ${playerScore} - ${computerScore} Computer`);
        console.log('Congratulations Player.');
    } else {
        console.log(`Computer has won. Player ${playerScore} - ${computerScore} Computer`);
        console.log('Congratulations Computerer.');
    }
}

// game();


// console.log(getPlayerChoice());
// console.log(getComputerChoice());




// TEMP
const body = document.querySelector('main');
// ---------------------------------------------------


// EVENT LISTENERS
// ----------------
body.addEventListener('click', ()=>{
    const arr = ['computer', 'player']
    animateScoreIncrement(arr[Math.floor(Math.random()*2)])
    animateRoll();
})


function animateRoll(){
    const computerRoll = document.querySelector('.battle .computer');
    const playerRoll = document.querySelector('.battle .player');

    computerRoll.classList.add('animate_shake--left');
    playerRoll.classList.add('animate_shake--right');
    setTimeout(()=>{
        
    }, 1000)
    setTimeout(() => {
        computerRoll.classList.remove('animate_shake--left');
        playerRoll.classList.remove('animate_shake--right');
    }, 2500);
}

function animateScoreIncrement(victor){
    const element = document.querySelector(`.${victor} .score`);
    const animationClass = 'animiate_incremental-score';
    
    // increment score
    let score;
    if(victor == 'player'){
        playerScore++
        score = playerScore
    } else {
        computerScore++
        score = computerScore
    }

    // add animation class to existing counter
    element.children[0].classList.add(animationClass);

    // create and append new score element with animation class
    const div = document.createElement('div');
    div.textContent = score;
    div.classList.add(animationClass);
    element.appendChild(div);

    // reset the counter elements (remove first element)
    setTimeout(() => {
        element.children[1].classList.remove(animationClass)
        element.removeChild(element.children[0]);
    }, 1500);
}