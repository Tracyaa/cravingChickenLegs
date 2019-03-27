var skeletonSprite;
let skeletonTotalScore = 0;

const rectBack = new PIXI.Rectangle(0, 0, 64, 64);
const rectLeft = new PIXI.Rectangle(0, 64, 64, 64);
const rectFront = new PIXI.Rectangle(0, 128, 64, 64);
const rectRight = new PIXI.Rectangle(0, 192, 64, 64);
const scoreBoardTag = document.querySelector(".score-board")

// const skeletonLoader = () => {
//   PIXI.loader
//   .load(skeletonSetup)
// }

function skeletonSetup() {
  stage.interactive = true;

  const texture = PIXI.loader.resources["skeleton"].texture;
  // debugger
  texture.frame = rectFront;

  skeletonSprite = new PIXI.Sprite(texture);

  skeletonInterval()

  skeletonSprite.scale.set(1.3, 1.3);
  skeletonSprite.x = 725
  skeletonSprite.y = 500
  skeletonSprite.vx = 30;
  skeletonSprite.vy = 30;

  stage.addChild(skeletonSprite);
  animationLoop();
}

const skeletonInterval = () => {
  setInterval(function() {
    if (rectFront.x >= 64 * 4) rectFront.x = 0;
    skeletonSprite.texture.frame = rectFront;
    rectFront.x += 64;
  }, 150);
};


const changeDirection = (key) => {
  const texture = PIXI.loader.resources["skeleton"].texture;
  if (key === 'ArrowDown') {
    skeletonSprite._texture.frame.y = 128;
    skeletonSprite._texture.frame.x = 0;
  } else if (key === 'ArrowLeft') {
    skeletonSprite._texture.frame.y = 64;
    skeletonSprite._texture.frame.x = 0;
  } else if (key === 'ArrowUp') {
    skeletonSprite._texture.frame.y = 0;
    skeletonSprite._texture.frame.x = 0;
  } else if (key === 'ArrowRight') {
    skeletonSprite._texture.frame.y = 192;
    skeletonSprite._texture.frame.x = 0;
  }
}


window.addEventListener('keydown', event => {
  ateDrumpStick()
  if (event.key === 'ArrowRight' && skeletonSprite.x < 740) {
    changeDirection('ArrowRight')
    skeletonSprite.x += skeletonSprite.vx
  } else if (event.key === 'ArrowLeft' && skeletonSprite.x > -20) {
    changeDirection('ArrowLeft')
    skeletonSprite.x -= skeletonSprite.vx
  } else if (event.key === 'ArrowDown' && skeletonSprite.y < 520) {
    changeDirection('ArrowDown')
    skeletonSprite.y += skeletonSprite.vy
  } else if (event.key === 'ArrowUp' && skeletonSprite.y > -20) {
    changeDirection('ArrowUp')
    skeletonSprite.y -= skeletonSprite.vy
  }
});

// function inspectSprite(skeletonSprite) {
//   console.log(skeletonSprite)
// };
