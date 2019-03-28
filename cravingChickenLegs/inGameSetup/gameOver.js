const gameOverText = new PIXI.Text('Times up!', {
    fontFamily: 'Times New Roman',
    fontSize: 36,
    fill: 0xff1010,
    align: 'center'
});


const gameOver = () => {
    PIXI.loader
      .load(alpacaSetup)
    stage.addChild(gameOverText).position.set(550, 250)
    skeletonSprite.visible = false;
    chickenSprite.visible = false;
    drumStick.visible = false;


    timerHeader.innerText = "";
};

// window.addEventListener("keydown", (event) => {
//         if (event.key === "r") {
//             const skeletonPoints = parseInt(skeletonForm.nextElementSibling.nextElementSibling.innerText);
//
//             const chickenPoints = parseInt(chickenForm.nextElementSibling.nextElementSibling.innerText);
//             debugger
//             updateScore(skeletonForm.id, skeletonPoints)
//             updateScore(chickenForm.id, chickenPoints)
//         })
// }
