var chickenSprite;

PIXI.loader
  .load(chickenSetup);

function chickenSetup() {
  stage.interactive = true;

  const rect = new PIXI.Rectangle(0, 0, 64, 64);
  const chickenTexture = PIXI.loader.resources["chicken"].texture;
  chickenTexture.frame = rect;
  chickenSprite = new PIXI.Sprite(chickenTexture);

  const idle = setInterval(function() {
    if (rect.x >= 64 * 3) rect.x = 0;
    chickenSprite.texture.frame = rect;
    rect.x += 64;
  }, 500);

  chickenSprite.scale.set(1.3, 1.3);
  chickenSprite.x = 0;
  chickenSprite.y = 500;
  chickenSprite.vx = 20;
  chickenSprite.vy = 20;

  chickenSprite.interactive = true;
  stage.addChild(chickenSprite);

  animationLoop();
}

// function animationLoopChicken() {
//   requestAnimationFrame(animationLoopChicken);
//   renderer.render(stage);
// };

window.addEventListener('keydown', event => {
  // debugger
  if (event.key === 'd' && chickenSprite.x < 740) {
    chickenSprite.x += chickenSprite.vx
    // console.log(chickenSprite.x, chickenSprite.y)
    // inspectSprite(chickenSprite)
  } else if (event.key === 'a' && chickenSprite.x > -20) {
    chickenSprite.x -= chickenSprite.vx
    // console.log(chickenSprite.x, chickenSprite.y)
    // inspectSprite(chickenSprite)
  } else if (event.key === 's' && chickenSprite.y < 520) {
    chickenSprite.y += chickenSprite.vy
    // console.log(chickenSprite.x, chickenSprite.y)
    // inspectSprite(chickenSprite)
  } else if (event.key === 'w' && chickenSprite.y > -20) {
    chickenSprite.y -= chickenSprite.vy
    // console.log(chickenSprite.x, chickenSprite.y)
    // inspectSprite(chickenSprite)
  }
})
