const canvas = document.querySelector("canvas")
const gameOverText = new PIXI.Text('Times up!', {
    fontFamily: 'Times New Roman',
    fontSize: 36,
    fill: 0xff1010,
    align: 'center'
});


const gameOver = () => {
    stage.addChild(gameOverText).position.set(325, 250)
    skeletonSprite.visible = false;
    chickenSprite.visible = false;
    drumStick.visible = false;

    clearInterval(respondTimer) // drumStick
    timerHeader.innerText = "";
    canvas.addEventListener("click", (event) => {
        alert("click")
    })
    // LOAD TO ANOTHER STAGE
    // gameStart()
};
