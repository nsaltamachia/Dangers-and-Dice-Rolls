**Nick Saltamachia SEI - Project 1 - Random Attack**

This game is called Random Attack. It's based on the simple story of the player being ambushed by an ogre, 
and uses random number generation to determine player attack and damage values with each turn. The goal of the game is to deplete the enemy ogre's health
before they can do so to the player. The user purpose of the game is a little silly: I play Dungeons & Dragons with my friends and we're a bit of a superstitious bunch regarding luck and dice rolls: the main idea of the game is to get the bad rolls, like "natural 1's" out of the way prior to a campaign session...

**Game Pictures and Game Play**
![Game Load](https://github.com/nsaltamachia/Project1Game/assets/145282981/3ef0bbb3-9434-4fc0-99d1-a8a775cb89c6)
The game loads with full player and computer stats on screen, a control panel for player action, and a message block that initially displays
a brief story element and a CTA to begin the game by clicking ROLL. With each roll, the player's attack value is displayed in the control panel
and the computer's attack value (player's damage value) is displayed in the game message panel. 



![Mid Game](https://github.com/nsaltamachia/Project1Game/assets/145282981/3d974c5e-5a95-494a-becf-02060f0b126b)
Throughout gameplay, as the player and computer take damage, their health bars and numerical health displays decrease according to each turn's attack/damage values.
The player's and computer's roll history are also provided beneath their own health bar. With each turn, the game checks to see if the turn's damage values have decremented either the player's or the computer's health to equal-to-or-less-than zero.


![Game End](https://github.com/nsaltamachia/Project1Game/assets/145282981/049cb4f7-cade-47d0-b785-18fb6b1e096a)
When either the player's or computer's health reaches the game-end point a game message appears, indicating whether the player won or lost the battle and prompting the player to press RESET to play again. The game takes around 10 clicks/rolls to reach completion.

**Technologies Used**
I built the game with an HTML5 framework, using flex display to arrange the message planel, game stats & its contained elements, and control panel & its contained elements. Player controls are very simple, a ROLL button and a RESET button.

I created the game background with Adobe Illustrator and the ogre was digitally illustrated by niece, Emma Campbell. I styles the game elements with CSS, mirroring tradtional "fighting game" elements like the health bar, and style the overall appearance to match the medieval/fantasty theme of the dice-rolling game, Dungeons & Dragons. I leaned for an all-ages, cartoonish, appearance with the look of the game, in an attempt to broaden the somewhat "niche" base of users who might already be familiar with the Dungeons & Dragons theme.

I wrote the game's function/operation in "vanilla" Javascript, with the all game state changes for each "turn" resulting from one click of the ROLL button. Some of these changes include: 
-player attack value (computer damage) -Math.random method
-computer attack value (player damage) -Math.random method
-updating game stats (health bars, health numbers, roll histories) -conditional element style changes.push method
-game message updates (conditional innerTEXT changes)

**Challenging Coding**
The CSS was a little tricky, I believe I have a good grasp of using display: flex but I still have some trouble getting container elements (like the game message) to remain a certain size before its content appears. 

Given the number of similarly-named elements, it was a little hard to keep them all straight. I could be more thoughtful of naming conventions, with consideration for how often a particular phrase would be repeated among elements.

At the onset of building the game I was coding for a second player and with Ohz's help that, since it would be a computer opponent, I could streamline the number of functions needed for gameplay by building much of it into a one click event. That was certainly a relief and I fell like I've learned another thing to consider in the planning stages that will lead to better DRY coding.


**Link to Game**

https://nsaltamachia.github.io/Project1Game/

**Next Steps**
To improve this game over time, I would like to add some music and sound effects for certain roll results along with the game end event. I would also like to build different opponents with different attributes that would affect how much health they begin with, how much damage the deal and damage they inflict based on their dice rolls(buffs, perhaps). Perhaps those different opponents might inhabit entirely new "locations" or stages of the player story travel. I could also include certain limited-use buffs that the player would be able to utilize.

I will definitely go back to get the CSS the way I REALLY want it to look and implement responsive design to enable a mobile device experience.

