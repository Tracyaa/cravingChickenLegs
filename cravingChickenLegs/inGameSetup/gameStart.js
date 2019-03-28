const gameStartText = new PIXI.Text('Times up!', {
    fontFamily: 'Times New Roman',
    fontSize: 36,
    fill: 0xff1010,
    align: 'center'
});

const gameStart = () => {
    PIXI.loader
        .load(bgSetup)
        .load(skeletonSetup)
        .load(chickenSetup)
        .load(drumStickSetup)

    gameTimer()
    respondTimer()
}

let gameTime = 10;
const gameTimer = () => {
    const idle = setInterval(function() {
        timerHeader.innerText = `${gameTime} Seconds`;
        gameTime -= 1;
        if (gameTime <= -1) {
            debugger
            gameOver();
            clearInterval(idle)
        }
    }, 1000);
};
window.addEventListener('keydown', event => {
    // debugger
    if (event.key === " ") {
        gameStart();
        let gameTime = 10
    }
})