const gameOverText = new PIXI.Text('Times up!', {
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 0xff1010,
    align: 'center'
});

const chickenWinText = new PIXI.Text('Vegan WON!', {
  fontFamily: 'Futura',
  fontSize: 36,
  fill: 0x39E39F,
  align: 'center'
})

const skeletonWinText = new PIXI.Text('Meat Lover!', {
  fontFamily: 'Futura',
  fontSize: 36,
  fill: 0xFF5388,
  align: 'center'
})

const winner = () => {
  if (skeletonTotalScore < chickenTotalScore) {
    stage.addChild(chickenWinText).position.set(525, 250)
    timerHeader.innerText = "chicken chicken winner chicken"
  } else {
    stage.addChild(skeletonWinText).position.set(525, 250)
    timerHeader.innerText = "chicken chicken loser chicken"
  }
}

const gameOver = () => {
    PIXI.loader
      .load(alpacaSetup)
    winner()
    // stage.addChild(gameOverText).position.set(550, 250)
    skeletonSprite.visible = false;
    chickenSprite.visible = false;
    drumStick.visible = false;
    reloadDiv.innerHTML = `<input type="button" value="Play again?" onClick="document.location.reload(true)" class="btn btn-warning">`


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
