const startGameDiv = document.querySelector("#top-text")
const gameStart = () => {
    PIXI.loader
        .load(bgSetup)
        .load(skeletonSetup)
        .load(chickenSetup)
        .load(drumStickSetup)
    gameTimer();
    respondTimer()
};

const gameTimer = () => {
  let gameTime = 60;
  const idle = setInterval(function() {
    timerDiv.innerHTML = `<h2>${gameTime} Seconds</h2>`;
    gameTime -= 1;
    if (gameTime <= -1) {
      reloadDiv.innerHTML = `<input class="play-again" type="button" value="Play again?" onClick="document.location.reload(true)" class="btn btn-warning">`
      updateScoreApi(parseInt(chickenForm.dataset.id), chickenTotalScore)
      updateScoreApi(parseInt(skeletonForm.dataset.id), skeletonTotalScore)
      clearInterval(idle)
      gameOver();
    }
  }, 1000);
};


startGameDiv.innerHTML = `<h2 class="center blink_me">click here to start</h2>`

startGameDiv.addEventListener('click', event => {
  if (isGameStart === false) {
    gameStart();
    musicIframe.src = "musics/fight.ogg";
    isGameStart = true;
  }
});

const updateScore = (playerId, playerScore) => {
  return fetch(`http://localhost:3000/players/${playerId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      score: playerScore,
    })
  });
};
