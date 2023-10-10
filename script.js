/*----- constants -----*/
const players = {
  '1': {
    name: 'Player',
    health: 50
  },
  '-1': {
    name: 'Enemy',
    health: 50
  }
};


/*----- state variables -----*/
let playerHealth = 50;
let computerHealth = 50;
let currentPlayer = "1";
let currentPlayerRoll = 0;
let currentComputerRoll = 0;


/*----- cached elements  -----*/
const rollEl = document.getElementById("rollButton");

const gameMessageEl = document.querySelector(".message");
console.log(gameMessageEl);
const resetEl = document.getElementById("resetButton");

const rollReadoutEl = document.getElementById("rollReadout");

/*----- event listeners -----*/


rollEl.addEventListener("click", () => {
    const currentPlayerRoll = playerRoll();
    console.log(currentPlayerRoll, "this is the player roll");
    rollReadoutEl.innerHTML = `${currentPlayerRoll} / 20`;
    const currentComputerRoll = playerRoll()
    console.log(currentComputerRoll, "this is the computer roll");
    displayGameMessage();
})

function playerRoll() {
    return Math.floor(Math.random() * 20) + 1;
}


/*----- functions -----*/
// intialize game
// function initializeGame() {
//     playerHealth = players['1'].health;
//     computerHealth = players['-1'].health;
//     currentPlayer = "1";
//     displayGameMessage();
    // listen for player roll button click
    // generate random 1-20 for computer
   
// compare the two intiative rolls

// higher number sets turn
// }
// initializeGame();



// function initiativeRoll() {
//     playerRoll();

    
//     

// function rollRandom() {
//     currentRoll = Math.floor(Math.random() * 20) + 1;
// }

function displayGameMessage() {
    gameMessageEl.innerText = `The computer rolled a ${currentComputerRoll}`;
    console.log(currentComputerRoll);
    //if (currentPlayerRoll > )
}










































// generate random 1-20 for computer

// compare the two intiative rolls

// higher number sets turn

// (if player wins initiative) game message " it's your turn, roll for attack!"

// listen for player roll button click

// generate random 1-20

// subtract result from enemy healthbar

// change player

// game message "The enemy's attacking!! Watch out!"

// generate random 1-20

// subtract result from player healthbar

// change player (repeat until winner found)

// winner declared when first healthbar reaches <=0

// game message: "________ won the battle! Press RESTART to play again!"

// listen for RESTART button click

// initialize game 



//resetEl.addEventListener("click", resetGame);

//function resetGame() {
//     playerHealth = players["1"].health;
//     computerHealth = players["-1"].health;
//     currentPlayer = "1";
//     gameMessageEl.innerText = "It looks like the ogre has more fight in him, lets go again!"
    //////////////
//     initializeGame();
// }

