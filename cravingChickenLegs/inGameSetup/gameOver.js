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

const tieText = new PIXI.Text('Alpaca saves \n the day again!', {
    fontFamily: 'Futura',
    fontSize: 36,
    fill: 0xF6F1F1,
    align: 'center'
})

const winner = () => {
    if (skeletonTotalScore < chickenTotalScore) {
      stage.addChild(chickenWinText).position.set(500, 250)
      timerDiv.innerHTML = `<h2>chicken chicken winner chicken</h2>`
    } else if (skeletonTotalScore > chickenTotalScore){
      stage.addChild(skeletonWinText).position.set(500, 250)
      timerDiv.innerHTML = `<h2>chicken chicken loser chicken</h2>`
    } else {
        stage.addChild(tieText).position.set(500, 250)
        timerDiv.innerHTML = `<h2>Chicken Chicken What's the Point!?</h2>`
    }
}

const gameOver = () => {
  musicIframe.src = "musics/Lively Meadow Victory Fanfare.mp3"
  skeletonSprite.visible = false;
  chickenSprite.visible = false;
  drumStick.visible = false;
  PIXI.loader
    .load(alpacaSetup)
  winner()
  musicIframe.src = "musics/Lively Meadow Victory Fanfare.mp3";
  // stage.addChild(gameOverText).position.set(550, 250)
};
