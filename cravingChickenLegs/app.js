PIXI.utils.sayHello();

const displayDiv = document.querySelector('#display')
const timerHeader = document.querySelector("#timer")
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();

displayDiv.appendChild(renderer.view);

/// total game time ///
let gameTime = 60;
const gameTimer = () => {
  setInterval(function() {
    timerHeader.innerText = `${gameTime} Seconds`;
    gameTime -= 1;
    if (gameTime <= -1) {
      gameOver();
    }
  }, 1000);
};


PIXI.loader
  .add("skeleton", "images/BODY_skeleton.png")
  .add("drumStick", "images/Pataepollo.png")
  .add("chicken", "images/chicken.png")
  .add("greenBg", "images/background1.png")
  // .add("mainMenuBg", "images/9046OT_06_02.jpg")

function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};

// const gameStart = () => {
//   PIXI.loader
//     .load(skeletonSetup)
//     .load(chickenSetup)
//     .load(drumStickSetup)
//     .load(bgSetup)
//
//   gameTimer
//   // skeletonLoader();
//   // chickenLoader();
//   // inGameBgLoader();
//   // drumStickLoader();
//   // gameTimer();
// };

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

  clearInterval(downloadTimer) // drumStick
  timerHeader.innerText = "";
};










//
