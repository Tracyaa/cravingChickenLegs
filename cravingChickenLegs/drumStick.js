let drumStick;

const drumStickLoader = () => {
  PIXI.loader
  .load(drumStickSetup);
}

function drumStickSetup() {
  stage.interactive = true;

  drumStick = new PIXI.Sprite(PIXI.loader.resources["drumStick"].texture);

  drumStick.x = Math.floor(Math.random()*(renderer.width - 25));
  drumStick.y = Math.floor(Math.random()*(renderer.height - 25));

  drumStick.interactive = true;
  stage.addChild(drumStick);
  // setTimer();

  // drumStick.rotation = 0;
  animationLeg();
};
function animationLeg() {
  requestAnimationFrame(animationLeg)
  drumStick.scale.set(0.5, 0.5);
  // drumStick.anchor.set(0.5, 0.5);
  // drumStick.rotation += 0.1;
  // drumStick.pivot.set(200, 0)

  renderer.render(stage);
};

let timeleft = 10;

const downloadTimer = setInterval(function() {
  // timerHeader.innerText = `${timeleft} Seconds`;
  timeleft -= 1;

  if (timeleft <= -1) {
    drumStick.x = Math.floor(Math.random()*(renderer.width - 25));
    drumStick.y = Math.floor(Math.random()*(renderer.height - 25));
    timeleft = 10;
  }
}, 1000);

const ateDrumpStick = () => {
  const legBounds = drumStick.getBounds();
  const skeletonSpriteBounds = skeletonSprite.getBounds();
  if (legBounds.x + (legBounds.width + 14) > (skeletonSpriteBounds.x + 28) && legBounds.x < skeletonSpriteBounds.x + (skeletonSpriteBounds.width - 28) && legBounds.y + (legBounds.height + 14) > (skeletonSpriteBounds.y + 30) && legBounds.y < skeletonSpriteBounds.y + skeletonSpriteBounds.height) {
    //remove drumStick, load new one, add point to total.
    skeletonTotalScore += 10;
    scoreBoardTag.innerText = `ScoreBoard: ${skeletonTotalScore}`
    console.log(skeletonTotalScore);
    drumStick.x = Math.floor(Math.random()*(renderer.width - 25));
    drumStick.y = Math.floor(Math.random()*(renderer.height - 25));
    timeleft = 10;
  };
};


















//
