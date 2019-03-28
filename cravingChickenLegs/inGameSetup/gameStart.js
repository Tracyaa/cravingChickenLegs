
const gameStart = () => {
  PIXI.loader
    .load(bgSetup)
    .load(skeletonSetup)
    .load(chickenSetup)
    .load(drumStickSetup)

  gameTimer();
};

let gameTime = 60;
const gameTimer = () => {
  setInterval(function() {
    timerHeader.innerText = `${gameTime} Seconds`;
    gameTime -= 1;
    if (gameTime <= -1) {
      gameOver();
    }
  }, 1000);
};

window.addEventListener('keydown', event => {
  // debugger
  if (event.key === " ") {
    gameStart();
  }
})
