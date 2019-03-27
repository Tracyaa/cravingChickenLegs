PIXI.utils.sayHello();

const displayDiv = document.querySelector('#display')
const timerHeader = document.querySelector("#timer")
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();
displayDiv.appendChild(renderer.view);

PIXI.loader
  .add("skeleton", "images/BODY_skeleton.png")
  .add("drumStick", "images/Pataepollo.png")
  .add("chicken", "images/chicken.png")
  .add("greenBg", "images/background1.png")


function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};

let timeleft = 10;

const downloadTimer = setInterval(function() {
  timerHeader.innerText = `${timeleft} Seconds`;
  timeleft -= 1;

  if (timeleft <= -1) {
    drumStick.destroy()
    PIXI.loader
      .load(drumStickSetup)
    timeleft = 10;
  }
}, 1000);

const gameOverText = new PIXI.Text('Game Over!', {
  fontFamily: 'Times New Roman',
  fontSize: 36,
  fill: 0xff1010,
  align: 'center'
});

const gameOver = () => {
  stage.addChild(gameOverText).position.set(325, 250)
  // debugger
  skeletonSprite.visible = false;
  chickenSprite.visible = false;
  drumStick.visible = false;

  clearInterval(downloadTimer)
  timerHeader.innerText = "";
};














//
