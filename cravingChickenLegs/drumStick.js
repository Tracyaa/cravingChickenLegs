let drumStick;

PIXI.loader
  .load(drumStickSetup);

function drumStickSetup() {
  stage.interactive = true;

  drumStick = new PIXI.Sprite(PIXI.loader.resources["drumStick"].texture);

  drumStick.x = Math.floor(Math.random()*renderer.width+10);
  drumStick.y = Math.floor(Math.random()*renderer.height+10);

  drumStick.interactive = true;
  stage.addChild(drumStick);


  // drumStick.rotation = 0;
  animationLeg();
};
function animationLeg() {
  requestAnimationFrame(animationLeg)
  drumStick.scale.set(0.5, 0.5);
  drumStick.anchor.set(0.5, 0.5);
  // drumStick.rotation += 0.1;
  // drumStick.pivot.set(200, 0)

  renderer.render(stage);
};

const ateDrumpStick = () => {
  const legBounds = drumStick.getBounds();
  const skeletonSpriteBounds = skeletonSprite.getBounds();
  if (legBounds.x + legBounds.width > (skeletonSpriteBounds.x + 28) && legBounds.x < skeletonSpriteBounds.x + (skeletonSpriteBounds.width - 28) && legBounds.y + legBounds.height > (skeletonSpriteBounds.y + 30) && legBounds.y < skeletonSpriteBounds.y + skeletonSpriteBounds.height) {
    //remove drumStick, load new one, add point to total.
    totalScore += 10;
    console.log(totalScore);
    drumStick.destroy();
    PIXI.loader
      .load(drumStickSetup)
  }
}





















//
