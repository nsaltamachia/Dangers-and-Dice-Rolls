/*----- constants -----*/
const players = {
  1: {
    name: "Player",
    health: 50,
  },
  "-1": {
    //purely for two-human-player future development
    name: "Enemy",
    health: 50,
  },
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
let cPastRollsEl = document.getElementById("computerRolls");
let muteSoundEl = document.getElementById("muteSound");

gameMessageEl.innerText = `You've been ambushed 
    on your way to the castle!
    Click ROLL to attack!`;

/*----- event listeners -----*/
muteSoundEl.addEventListener("click", () => {
  let sound = document.getElementById("dice");
  let sound2 = document.getElementById("sword");
  let sound3 = document.getElementById("win");
  let sound4 = document.getElementById("loss");
  if (sound.muted === false) {
    sound.muted = true;
    sound2.muted = true;
    sound3.muted = true;
    sound4.muted = true;
    muteSoundEl.innerHTML = "Unmute Sound";
  } else {
    sound.muted = false;
    sound2.muted = false;
    sound3.muted = false;
    sound4.muted = false;
    muteSoundEl.innerHTML = "Mute Sound";
  }
});

rollEl.addEventListener("click", () => {
  currentPlayerRoll = rollPDice();
  if (currentPlayerRoll === 20) {
    gameMessageEl.innerText = `You rolled a 20! Critical hit!`;
    playSwordSFX("sword");
  }
  rollReadoutEl.innerHTML = `${currentPlayerRoll} / 20`;
  currentComputerRoll = rollCDice();
  computerRollTotal += currentComputerRoll;
  playerRollTotal += currentPlayerRoll;

  displayGameMessage();
  setTimeout(() => {
    updatePlayerStats();
    checkForWin();
    addRollToLists();
  }, 1000);
  setTimeout(() => {
    updateComputerStats();
  }, 500);
});

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
    Click ROLL to fight back!`;
}

function addRollToLists() {
  pPastRolls.push(currentPlayerRoll);
  pPastRollsEl.innerHTML = pPastRolls;
  cPastRolls.push(currentComputerRoll);
  cPastRollsEl.innerHTML = cPastRolls;
}

function playWinSFX() {
  let sound = document.getElementById("win");
  sound.volume = 0.25;
  sound.play("win");
}

function playDiceSFX() {
  let sound = document.getElementById("dice");
  sound.volume = 0.25;
  sound.play("dice");
}

function playSwordSFX() {
  let sound = document.getElementById("sword");
  sound.volume = 0.25;
  sound.play("sword");
}

function playLossSFX() {
  let sound = document.getElementById("loss");
  sound.volume = 0.25;
  sound.play("loss");
}

function rollPDice() {
  playDiceSFX();
  return Math.floor(Math.random() * 20) + 1;
}

function rollCDice() {
  return Math.floor(Math.random() * 20) + 1;
}

function displayGameMessage() {
  gameMessageEl.innerText = `The computer rolled ${currentComputerRoll}.`;
  if (currentPlayerRoll === 20) {
    gameMessageEl.innerText = `You rolled a 20! Critical hit!`;
  }
}

function updatePlayerStats() {
  pHealthBar -= currentComputerRoll;
  pHealthNumber -= currentComputerRoll;
  pHealthBarEl.style.width = pHealthBar + "%";
  pHealthNumberEl.innerHTML = pHealthNumber;
  let pHealthBarWidth = parseFloat(pHealthBarEl.style.width);
  pHealthNumberEl.classList.add("shake");
  setTimeout(() => {
    pHealthNumberEl.classList.remove("shake");
  }, 500);
  if (pHealthBarWidth <= 60 && pHealthBarWidth > 30) {
    pHealthBarEl.style.backgroundColor = "yellow";
  }
  if (pHealthBarWidth <= 30) {
    pHealthBarEl.style.backgroundColor = "red";
  }
}

function updateComputerStats() {
  cHealthBar -= currentPlayerRoll;
  cHealthNumber -= currentPlayerRoll;
  cHealthBarEl.style.width = cHealthBar + "%";
  cHealthNumberEl.innerHTML = cHealthNumber;
  let cHealthBarWidth = parseFloat(cHealthBarEl.style.width);
  cHealthNumberEl.classList.add("shake");
  setTimeout(() => {
    cHealthNumberEl.classList.remove("shake");
  }, 500); // Remove the class after the duration of the animation
  if (cHealthBarWidth <= 60 && cHealthBarWidth > 30) {
    cHealthBarEl.style.backgroundColor = "yellow";
  }
  if (cHealthBarWidth <= 30) {
    cHealthBarEl.style.backgroundColor = "red";
  }
}

function checkForWin() {
  if (pHealthNumber <= 0 && cHealthNumber <= 0) {
    pHealthNumberEl.innerHTML = 0;
    pHealthBarEl.style.opacity = 0;
    cHealthNumberEl.innerHTML = 0;
    cHealthBarEl.style.opacity = 0;
    gameMessageEl.innerText = `It's a draw! 
        Press RESET to play again!`;
    rollEl.setAttribute("disabled", "true");
  } else if (pHealthNumber <= 0) {
    pHealthNumberEl.innerHTML = 0;
    pHealthBarEl.style.opacity = 0;
    gameMessageEl.innerText = `You lost the battle...
        Press RESET to try again!`;
    playLossSFX("loss");
    rollEl.setAttribute("disabled", "true");
  } else if (cHealthNumber <= 0) {
    playWinSFX("win");
    cHealthNumberEl.innerHTML = 0;
    cHealthBarEl.style.opacity = 0;
    gameMessageEl.innerText = `You defeated the ogre! 
        Congratulations! 
        Press RESET to play again!`;
    rollEl.setAttribute("disabled", "true");
  }
}

function resetGame() {
  rollEl.removeAttribute("disabled");
  playerHealth = 100;
  computerHealth = 100;
  currentPlayer = "1";
  currentPlayerRoll = 0;
  currentComputerRoll = 0;
  pHealthBar = 100;
  pHealthNumber = 100;
  cHealthBar = 100;
  cHealthBarEl.style.opacity = 1;
  cHealthBarEl.style.backgroundColor = "rgb(12, 5, 104)";
  pHealthBarEl.style.backgroundColor = "rgb(12, 5, 104)";
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
    Click ROLL to fight back!`;
}
