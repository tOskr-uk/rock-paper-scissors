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

game();


// console.log(getPlayerChoice());
// console.log(getComputerChoice());
