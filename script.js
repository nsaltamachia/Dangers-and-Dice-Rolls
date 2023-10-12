/*----- constants -----*/
const players = {
  '1': {
    name: 'Player',
    health: 50
  },
  '-1': { //purely for two-human-player future development
    name: 'Enemy',
    health: 50
  }
};





/*----- state variables -----*/
let playerHealth = 100;
let computerHealth = 100;
let currentPlayer = "1";
let currentPlayerRoll = 0;
let currentComputerRoll = 0;
let pHealthBar = 100;
let pHealthNumber = 100;
let cHealthBar = 100;
let cHealthNumber = 100;
let playerRollTotal = 0;
let computerRollTotal = 0;
let pPastRolls = [];
let cPastRolls = [];




/*----- cached elements  -----*/
const rollEl = document.getElementById("rollButton");
const gameMessageEl = document.querySelector(".message");
//console.log(gameMessageEl);
const resetEl = document.getElementById("resetButton");
const rollReadoutEl = document.getElementById("rollReadout");
let pHealthBarEl = document.querySelector(".pHealthBar");
let pHealthNumberEl = document.getElementById("pHealthNumber");
let cHealthBarEl = document.querySelector(".cHealthBar");
let cHealthNumberEl = document.getElementById("cHealthNumber");
let pPastRollsEl = document.getElementById("playerRolls");
let cPastRollsEl = document.getElementById("computerRolls")

gameMessageEl.innerText = `You've been ambushed 
    on your way to the castle!
    Click ROLL to attack!`;


/*----- event listeners -----*/

rollEl.addEventListener("click", () => {
    currentPlayerRoll = rollDice();
    console.log(currentPlayerRoll, "this is the player roll");
    rollReadoutEl.innerHTML = `${currentPlayerRoll} / 20`;
    currentComputerRoll = rollDice()
    computerRollTotal += currentComputerRoll;
    playerRollTotal += currentPlayerRoll;
    console.log(currentComputerRoll, "this is the computer roll");
    displayGameMessage();
    updatePlayerStats();
    updateComputerStats();
    checkforDraw()
    addRollToLists();
})

resetEl.addEventListener("click", resetGame);





/*----- functions -----*/
function initializeGame() {
    cHealthBarEl.style.width = 100;
    cHealthNumberEl.innerHTML = 100;
    pHealthBarEl.style.width = 100;
    pHealthNumberEl.innerHTML = 100;
    rollReadoutEl.innerHTML = ``;
    gameMessageEl.innerText = `You've been ambushed 
    on your way to the castle!
    Click ROLL to attack!`;
}

function addRollToLists() {
    pPastRolls.push(currentPlayerRoll);
    pPastRollsEl.innerHTML = pPastRolls;
    cPastRolls.push(currentComputerRoll);
    cPastRollsEl.innerHTML = cPastRolls;
}

function rollDice() {
    return Math.floor(Math.random() * 20) + 1;
}

function displayGameMessage() {
    gameMessageEl.innerText = `The computer rolled a ${currentComputerRoll}.`;
}

function updatePlayerStats() {
    pHealthBar -= currentComputerRoll;
    pHealthNumber -= currentComputerRoll;
    pHealthBarEl.style.width = pHealthBar + "%";
    pHealthNumberEl.innerHTML = pHealthNumber;
    
}

function updateComputerStats() {
    cHealthBar -= currentPlayerRoll ;
    cHealthNumber -= currentPlayerRoll;
    cHealthBarEl.style.width = cHealthBar + "%";
    cHealthNumberEl.innerHTML = cHealthNumber;
    
}

function checkforDraw() {
    if (cHealthNumber <= 0) {
        cHealthNumberEl.innerHTML = 0;
        cHealthBarEl.style.opacity = 0;
        gameMessageEl.innerText = `You defeated the ogre! 
        Congratulations! 
        Press RESET to play again!`
    } else if (pHealthNumber <= 0) {
        pHealthNumberEl.innerHTML = 0;
        pHealthBarEl.style.opacity = 0;
        gameMessageEl.innerText = `You lost the battle...
        Press RESET to try again!`;
    } else if (pHealthNumber <= 0 && cHealthNumber <= 0) 
        gameMessageEl.innerText = `It's a draw! 
        Press RESET to play again!`;
    }

function resetGame() {
    playerHealth = 100;
    computerHealth = 100;
    currentPlayer = "1";
    currentPlayerRoll = 0;
    currentComputerRoll = 0;
    pHealthBar = 100;
    pHealthNumber = 100;
    cHealthBar = 100;
    cHealthBarEl.style.opacity = 1;
    pHealthBarEl.style.opacity = 1;
    cHealthNumber = 100;
    playerRollTotal = 0;
    computerRollTotal = 0;
    pPastRolls = [];
    cPastRolls = [];
    cHealthBarEl.style.width = "100%";
    cHealthNumberEl.innerHTML = 100;
    pHealthBarEl.style.width = "100%";
    pHealthNumberEl.innerHTML = 100;
    rollReadoutEl.innerHTML = "";
    pPastRollsEl.innerHTML = "";
    cPastRollsEl.innerHTML = "";
    gameMessageEl.innerText = `You've been ambushed 
    on your way to the castle!
    Click ROLL to attack!`;
}