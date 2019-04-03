# cravingChickenLegs
What began as a simple Javascript game project quickly turned into a gaming fiasco unlike the world has ever seen. Using minimal PixiJs and quite a bit of vanilla javascript, we went on a quest to make a two player keypad competition.
## Installation

1. Clone the repo to you local machine cd to cravingChickenLegs.
2. Bundle install, npm install.
3. Cd into cravingChickenLegs. Run "http-server".
4. cd .. back to cravingChickenLegs, cd into craving_chicken_legs_api, run "rails s"
5. Open links in browser and enjoy!

## Rules
This is a points game, the skeleton(one player) gets 10 points for every chicken leg it gets, and the chicken(other player) gets 10 points every time it touches the skeleton. Player with the most point wins, and a chance to get on the leaderboard.

Skeleton-
The skeleton player enters their name in the text box on the right and hits submit. The skeleton starts on the lower right hand corner and uses the left, right, up, down arrow keys to maneuver. The goal is to eat as many chicken legs in one minute as possible, while not getting touched by the chicken.

Chicken-
The chicken player enters their name on the left text box and hits submit. The chicken starts in the lower left corner and uses the W, A, S, D keys to maneuver. The goal is the touch the Skeleton as many time as possible. Each time Chicken touches Skeleton, Chicken locates back to his original position tries to get skeleton again.

Click flashing prompt to start the game!

Tips-
You'll notice that the chicken leg relocates randomly on the screen every ten seconds adding a bit of unpredictability. You will also notice that since two players are sharing the same keyboard, that both players cannot hold down a direction key at the same time and move, you must tap continuously to move both characters.

