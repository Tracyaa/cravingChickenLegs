var chickenSprite;

PIXI.loader
  .load(chickenSetup);

function chickenSetup() {
  stage.interactive = true;

  const chickenTexture = PIXI.loader.resources["chicken"].texture;

  chickenTexture.frame = rectFront;

  chickenSprite = new PIXI.Sprite(chickenTexture);

  chickenMovement()

  chickenSprite.scale.set(1.3, 1.3);
  chickenSprite.x = 0;
  chickenSprite.y = 500;
  chickenSprite.vx = 20;
  chickenSprite.vy = 20;

  chickenSprite.interactive = true;
  stage.addChild(chickenSprite);
  animationLoop();
};

const chickenMovement = () => {
  setInterval(function() {
    if (rectFront.x >= 64 * 2) rectFront.x = 0;
    chickenSprite.texture.frame = rectFront;
    rectFront.x += 64;
  }, 500);
};


const changeChickenDirection = (key) => {
  const texture = PIXI.loader.resources["chicken"].texture;
  if (key === 'd') {
    texture.frame = rectLeft;
  } else if (key === 'a') {
    texture.frame = rectRight;
  } else if (key === 's') {
    texture.frame = rectFront;
  } else if (key === 'w') {
    texture.frame = rectBack;
  }
};

window.addEventListener('keydown', e => {
  if (e.key === 'd' && chickenSprite.x < 740) {
    changeChickenDirection('d')
    chickenSprite.x += chickenSprite.vx
  } else if (e.key === 'a' && chickenSprite.x > -20) {
    changeChickenDirection('a')
    chickenSprite.x -= chickenSprite.vx
  } else if (e.key === 's' && chickenSprite.y < 520) {
    changeChickenDirection('s')
    chickenSprite.y += chickenSprite.vy
  } else if (e.key === 'w' && chickenSprite.y > -20) {
    changeChickenDirection('w')
    chickenSprite.y -= chickenSprite.vy
  }
  chickenTouchSkeleton()
});

const chickenTouchSkeleton = () => {
  const skeletonSpriteBounds = skeletonSprite.getBounds();
  const chickenSpriteBounds = chickenSprite.getBounds();
  if (chickenSpriteBounds.x + chickenSpriteBounds.width > (skeletonSpriteBounds.x + 28) && chickenSpriteBounds.x < skeletonSpriteBounds.x + (skeletonSpriteBounds.width - 28) && chickenSpriteBounds.y + chickenSpriteBounds.height > (skeletonSpriteBounds.y + 30) && chickenSpriteBounds.y < skeletonSpriteBounds.y + skeletonSpriteBounds.height) {
  gameOver()
  }
};













//
