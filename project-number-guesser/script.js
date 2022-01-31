let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 9);
};

function compareGuesses(human,comp,secret) {
    let humanGuess = Math.abs(human - secret);
    let compGuess = Math.abs(comp - secret);
    // make more compact? like:
    return (humanGuess <= compGuess) ? true : false;
};

function updateScore(winner) {
    switch (winner) {
        case ('human'):
            humanScore += 1;
            break;
        case ('computer'):
            computerScore += 1;
            break;
        default: 
            'error'
            break;
    }
};

function advanceRound() {
    currentRoundNumber += 1;
};