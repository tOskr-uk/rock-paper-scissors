function getComputerChoice(){
    const arr = ['rock', 'paper', 'scissors'];
    const roll = Math.floor(Math.random()*3);
    return arr[roll];
}

function getPlayerChoice(){
    const choice = prompt('Rock, Paper or Scissors?')
    if(choice == 'rock' || choice =='paper' || choice =='scissors'){
        return choice;
    } else {
        getPlayerChoice()
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            return 'Computer Wins!';
        }else if(computerSelection == 'scissors'){
            return 'Player Wins!';
        }else if(computerSelection == 'scissors'){
            return 'Its a draw!';
        }         
    }

    if(playerSelection == 'paper'){
        if(computerSelection == 'rock'){
            return 'Player Wins!';
        }else if(computerSelection == 'scissors'){
            return 'Computer Wins!';
        }else if(computerSelection == 'scissors'){
            return 'Its a draw!';
        }         
    }

    if(playerSelection == 'scissors'){
        if(computerSelection == 'paper'){
            return 'Player Wins!';
        }else if(computerSelection == 'rock'){
            return 'Computer Wins!';
        }else if(computerSelection == 'scissors'){
            return 'Its a draw!';
        }         
    }
}

function game(){
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
}

game();


// console.log(getPlayerChoice());
// console.log(getComputerChoice());
