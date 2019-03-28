const gameStart = () => {

  PIXI.loader
      .load(bgSetup)
      .load(skeletonSetup)
      .load(chickenSetup)
      .load(drumStickSetup)

  gameTimer();
  respondTimer()
};

timerHeader.innerText = "press space to start"

let gameTime = 25;
const gameTimer = () => {
    const idle = setInterval(function() {
        timerHeader.innerText = `${gameTime} Seconds`;
        gameTime -= 1;
        if (gameTime <= -1) {
            gameOver();
            clearInterval(idle)
        }
    }, 1000);
};
window.addEventListener('keydown', event => {
  // debugger
  if (event.key === " ") {
    gameStart();
    gameTime = 25;
  }
})
