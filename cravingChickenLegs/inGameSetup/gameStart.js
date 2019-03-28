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
            gameOver()
            clearInterval(idle)
            updateScore(parseInt(skeletonForm.dataset.id), skeletonTotalScore)

            updateScore(parseInt(chickenForm.dataset.id), chickenTotalScore)
        }
    }, 1000);
};

window.addEventListener('keydown', event => {
    // debugger
    if (event.key === " ") {
        gameStart();
        gameTime = 15;
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