**Dangers & Dice Rolls**
Nick Saltamachia 

Dangers & Dice Rolls is a simple game with an "important" function...I play Dungeons & Dragons with my friends, and we're a bit of a superstitious bunch regarding luck and dice rolls...the main purpose of this game is to get those nasty bad rolls, like "nat 1's," out of the way prior to a campaign session...
On initializing, the user is placed in an ambush scenario where they must roll their dice to defeat the attacking ogre.

**Game Pictures and Game Play**
![Game Load](https://github.com/nsaltamachia/Project1Game/assets/145282981/3ef0bbb3-9434-4fc0-99d1-a8a775cb89c6)
The game loads with full player and computer stats on the screen, a control panel for player action, and a message block that initially displays a brief story element and a CTA to begin the game by clicking ROLL. With each roll, the player's attack value is displayed in the control panel, and the computer's attack value (player's damage value) is displayed in the game message panel. 


![Mid Game](https://github.com/nsaltamachia/Project1Game/assets/145282981/3d974c5e-5a95-494a-becf-02060f0b126b)
Throughout gameplay, as the player and computer take damage, their health bars and numerical health displays decrease according to each turn's attack/damage values. The player's and computer's roll history are also provided beneath their own health bar. With each turn, the game checks to see if the turn's damage values have decremented either the player's or the computer's health to equal-to-or-less-than zero.


![Game End](https://github.com/nsaltamachia/Project1Game/assets/145282981/049cb4f7-cade-47d0-b785-18fb6b1e096a)
When either the player's or computer's health reaches the game-end point a game message appears, indicating whether the player won or lost the battle, and prompts the player to press RESET to play again. The game takes around 10 clicks/rolls to reach completion.

**Technologies Used**
I built the game with an HTML5 framework, using flex display to arrange the message planel, game stats & its contained elements, and control panel & its contained elements. Player controls are very simple: a ROLL button and a RESET button.

I created the game background with Adobe Illustrator and the ogre was digitally illustrated by my niece, Emma Campbell. I styled the game elements with CSS, mirroring tradtional "fighting game" elements like the health bar, and styled the overall appearance to match the medieval/fantasty theme of the dice-rolling game, Dungeons & Dragons. I leaned for an all-ages, cartoonish, appearance with the look of the game in an attempt to broaden the somewhat "niche" base of users who might already be familiar with the Dungeons & Dragons theme.

I wrote the game's function/operation in "vanilla" Javascript, with each round of game state changes resulting from a single click of the ROLL button. Some of these changes include: random number generation, conditional element styling, conditional game messages, and presenting game state history.


**Link to Game**

https://nsaltamachia.github.io/Dangers-and-Dice-Rolls/

