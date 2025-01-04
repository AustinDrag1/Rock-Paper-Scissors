// Randomize computer choice string
function getComputerChoice()
{
    const choice = Date.now() % 3;

    if( choice === 0 ) { result = "rock"; }
    else if( choice === 1 ) { result = "paper"; }
    else if( choice === 2 ) { result = "scissors"; }
    else { console.error( choice + " is not a valid choice"); }

    return result;
}

// Compare choices, award points if a winner, and update result element
function playRound( e )
{
    // Confirm selection
    const humanChoice = e.target.name;
    const computerChoice = getComputerChoice();
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
    if( result === "win" ) { humanScore++; }
    else if( result === "loss" ) { computerScore++; }

    updateResultDisplay(result, humanChoice, computerChoice);
}

// Displays the game result and the score
function updateResultDisplay( result, humanChoice, computerChoice )
{
    let display = "<p>"

    if( result === "win" )
    {
        display = "You won! (" + humanChoice + " beats " + computerChoice + ")</p>";

    }
    else if( result === "loss" )
    {
        display = "You lost (" + computerChoice + " beats " + humanChoice + ")</p>";

    }
    else
    {
        display = "It's a tie (you both chose " + computerChoice + ")</p>";
    }

    display += "<p>You: " + humanScore + "</p><p>Computer: " + computerScore + "</p>";

    resultDisplay.innerHTML = display;
}

let humanScore = 0;
let computerScore = 0;

const optionList = document.querySelector("#option-list");
optionList.addEventListener("click", (e) => {
    playRound(e);
});

const resultDisplay = document.querySelector("#result-display");