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

let gameTime = 5;
const gameTimer = () => {
    const idle = setInterval(function() {
        timerHeader.innerText = `${gameTime} Seconds`;
        gameTime -= 1;
        if (gameTime <= -1) {
            gameOver();
            // debugger
            updateScoreApi(parseInt(chickenForm.dataset.id), chickenTotalScore)
            updateScoreApi(parseInt(skeletonForm.dataset.id), skeletonTotalScore)
            clearInterval(idle)
            // debugger

        }
    }, 1000);
};

window.addEventListener('keydown', event => {
  // debugger
  if (event.key === " ") {
    gameStart();
    gameTime = 5;
  }
})
