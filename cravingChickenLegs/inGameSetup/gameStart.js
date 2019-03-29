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



let gameTime = 60;
const gameTimer = () => {
    const idle = setInterval(function() {
        timerDiv.innerHTML = `<h2>${gameTime} Seconds</h2>`;
        gameTime -= 1;
        if (gameTime <= -1) {
            reloadDiv.innerHTML = `<input class="play-again"type="button" value="Play again?" onClick="document.location.reload(true)" class="btn btn-warning">`
            updateScoreApi(parseInt(chickenForm.dataset.id), chickenTotalScore)
            updateScoreApi(parseInt(skeletonForm.dataset.id), skeletonTotalScore)
            clearInterval(idle)
            gameOver();
        }
    }, 1000);
};

window.addEventListener('keydown', event => {
    if (isGameStart === false) {
        if (event.key === " ") {
            gameStart();
            gameTime = 10;
            isGameStart = true;
        }
    }
})

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
    })
}