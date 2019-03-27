var chickenSprite;
let chickenTotalScore = 0;

// const chickenLoader = () => {
//   PIXI.loader
//   .load(chickenSetup);
// }
const rectBackChicken = new PIXI.Rectangle(0, 0, 64, 64);
const rectRightChicken = new PIXI.Rectangle(0, 64, 64, 64);
const rectFrontChicken = new PIXI.Rectangle(0, 128, 64, 64);
const rectLeftChicken = new PIXI.Rectangle(0, 192, 64, 64);

function chickenSetup() {
  stage.interactive = true;

  const chickenTexture = PIXI.loader.resources["chicken"].texture;

  chickenTexture.frame = rectFrontChicken;

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
    if (rectFront.x >= 64 * 3) rectFront.x = 0;
    chickenSprite.texture.frame = rectFront;
    rectFront.x += 64;
  }, 150);
};


const changeChickenDirection = (key) => {
  const texture = PIXI.loader.resources["chicken"].texture;
  if (key === 'd') {
    chickenSprite._texture.frame.y = 64;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 'a') {
    chickenSprite._texture.frame.y = 192;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 's') {
    chickenSprite._texture.frame.y = 128;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 'w') {
    chickenSprite._texture.frame.y = 0;
    chickenSprite._texture.frame.x = 0;
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
  // gameOver()
  chickenTotalScore += 10;
  console.log(`chicken ${chickenTotalScore}`);
  chickenSprite.x = 0;
  chickenSprite.y = 500;
  }
};













//
