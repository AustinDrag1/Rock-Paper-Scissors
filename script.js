// Randomize computer choice string
function getComputerChoice()
{

    // Randomize choice
    const choice = Date.now() % 3;
    let compChoice = choiceNumToStr(choice);

    console.log("The computer chose " + compChoice);
    computerChoice = compChoice;
}

// Turn number or string into choice string
// Also prompt the computer to pick a choice and start a game
function getHumanChoice( choice )
{

    if( typeof choice === "number" )
    {
        result = choiceNumToStr( choice );
    }
    else if( typeof choice === "string" )
    {
        result = choice.toLowerCase();
    }

    if( !["rock","paper","scissors"].includes(result) )
    {
        console.log("Your choice was not clear but it looks close enough to rock");
        result = "rock";
    }

    console.log("You chose " + result);
    humanChoice = result;

    getComputerChoice();
    playGame();
}

// Turn number into choice
function choiceNumToStr( choice )
{
    if( choice === 0 ) { result = "rock"; }
    else if( choice === 1 ) { result = "paper"; }
    else if( choice === 2 ) { result = "scissors"; }
    else { console.error( choice + " is not a valid choice"); }

    return result;
}

// Compare choices and award points if a winner
function playRound( humanChoice, computerChoice )
{
    let result;

    // Compare choices
    if( humanChoice === computerChoice )
    {
        result = "tie";
    }
    if( humanChoice === "rock" )
    {
        if( computerChoice === "scissors" ) result = "win";
        else if ( computerChoice === "paper" ) result = "loss";
    }
    if( humanChoice === "paper" )
    {
        if( computerChoice === "rock" ) result = "win";
        else if ( computerChoice === "scissors" ) result = "loss";
    }
    if( humanChoice === "scissors" )
    {
        if( computerChoice === "paper" ) result = "win";
        else if ( computerChoice === "rock" ) result = "loss";
    }

    // Award points
    if( result === "win" )
    {
        humanScore++;
        console.log("You win!");
    }
    else if( result === "loss" )
    {
        computerScore++;
        console.log("You lose!");
    }
    else
    {
        console.log("There was a tie.")
    }
}

function playGame()
{
    playRound(humanChoice, computerChoice);

    if( humanScore === 5 )
    {
        console.log("You won 5 times! Points have been reset.");
        humanScore = 0;
        computerScore = 0;
    }

    if( computerScore === 5 )
    {
        console.log("You lost 5 times! Points have been reset.");
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;