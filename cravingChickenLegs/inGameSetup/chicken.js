var chickenSprite;
let chickenTotalScore = 0;
const rectBackChicken = new PIXI.Rectangle(0, 0, 64, 64);
const rectRightChicken = new PIXI.Rectangle(0, 64, 64, 64);
const rectFrontChicken = new PIXI.Rectangle(0, 128, 64, 64);
const rectLeftChicken = new PIXI.Rectangle(0, 192, 64, 64);
const chickenScoreBoard = document.querySelector('.chicken-score');

// const chickenLoader = () => {
//   PIXI.loader
//   .load(chickenSetup);
// }

function chickenSetup() {
  stage.interactive = true;

  const chickenTexture = PIXI.loader.resources["chicken"].texture;

  chickenTexture.frame = rectFrontChicken;

  chickenSprite = new PIXI.Sprite(chickenTexture);

  chickenMovement()

  chickenSprite.scale.set(1.3, 1.3);
  chickenSprite.x = 0;
  chickenSprite.y = 500;
  chickenSprite.vx = 25;
  chickenSprite.vy = 25;

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

  if (key === 68) {
    chickenSprite._texture.frame.y = 64;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 65) {
    chickenSprite._texture.frame.y = 192;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 83) {
    chickenSprite._texture.frame.y = 128;
    chickenSprite._texture.frame.x = 0;
  } else if (key === 87) {
    chickenSprite._texture.frame.y = 0;
    chickenSprite._texture.frame.x = 0;
  }
};

window.addEventListener('keydown', e => {
  if (!!chickenSprite) {
    if (e.keyCode === 68 && chickenSprite.x < 740) {
      changeChickenDirection(68)
      chickenSprite.x += chickenSprite.vx
    } else if (e.keyCode === 65 && chickenSprite.x > -20) {
      changeChickenDirection(65)
      chickenSprite.x -= chickenSprite.vx
    } else if (e.keyCode === 83 && chickenSprite.y < 520) {
      changeChickenDirection(83)
      chickenSprite.y += chickenSprite.vy
    } else if (e.keyCode === 87 && chickenSprite.y > -20) {
      changeChickenDirection(87)
      chickenSprite.y -= chickenSprite.vy
    }
    chickenTouchSkeleton()
  }
});

const chickenTouchSkeleton = () => {
  const skeletonSpriteBounds = skeletonSprite.getBounds();
  const chickenSpriteBounds = chickenSprite.getBounds();
  if (chickenSpriteBounds.x + chickenSpriteBounds.width > (skeletonSpriteBounds.x + 28) && chickenSpriteBounds.x < skeletonSpriteBounds.x + (skeletonSpriteBounds.width - 28) && chickenSpriteBounds.y + chickenSpriteBounds.height > (skeletonSpriteBounds.y + 30) && chickenSpriteBounds.y < skeletonSpriteBounds.y + skeletonSpriteBounds.height) {
    chickenTotalScore += 10;
    chickenScoreBoard.innerText = `Score: ${chickenTotalScore}`
    console.log(`chicken ${chickenTotalScore}`);
    chickenSprite.x = 0;
    chickenSprite.y = 500;
  };
};









//
