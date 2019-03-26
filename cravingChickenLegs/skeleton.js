var skeletonSprite;
let totalScore = 0;

const rectBack = new PIXI.Rectangle(0, 0, 64, 64);
const rectLeft = new PIXI.Rectangle(0, 64, 64, 64);
const rectFront = new PIXI.Rectangle(0, 128, 64, 64);
const rectRight = new PIXI.Rectangle(0, 192, 64, 64);

PIXI.loader
  .load(skeletonSetup)

// const changeDirection = (rect) => {
//   const texture = PIXI.loader.resources["skeleton"].texture;
// }

function skeletonSetup() {

  stage.interactive = true;

  const texture = PIXI.loader.resources["skeleton"].texture;

  texture.frame = rectBack;
  // textureLeft.frame = rectLeft;
  // textureFront.frame = rectFront;
  // textureRight.frame = rectRight;
  skeletonSprite = new PIXI.Sprite(texture);

  const idle = setInterval(function() {
    if (rectBack.x >= 64 * 4) rectBack.x = 0;
    skeletonSprite.texture.frame = rectBack;
    rectBack.x += 64;
  }, 500);

  skeletonSprite.scale.set(1.3, 1.3);
  skeletonSprite.x = 700
  skeletonSprite.y = 500
  skeletonSprite.vx = 20;
  skeletonSprite.vy = 20;

  stage.addChild(skeletonSprite);
  animationLoop();
}

// var map = {}; // You could also use an array
// onkeydown = onkeyup = function(e){
//     e = e || event; // to deal with IE
//     map[e.keyCode] = e.type == 'keydown';
//     /* insert conditional here */
// }


window.addEventListener('keydown', event => {
  ateDrumpStick()
  if (event.key === 'ArrowRight' && skeletonSprite.x < 740) {
    skeletonSprite.x += skeletonSprite.vx
    // console.log(skeletonSprite.x, skeletonSprite.y)
    // inspectSprite(skeletonSprite)
  } else if (event.key === 'ArrowLeft' && skeletonSprite.x > -20) {
    skeletonSprite.x -= skeletonSprite.vx
    // console.log(skeletonSprite.x, skeletonSprite.y)
    // inspectSprite(skeletonSprite)
  } else if (event.key === 'ArrowDown' && skeletonSprite.y < 520) {
    skeletonSprite.y += skeletonSprite.vy
    // console.log(skeletonSprite.x, skeletonSprite.y)
    // inspectSprite(skeletonSprite)
  } else if (event.key === 'ArrowUp' && skeletonSprite.y > -20) {
    skeletonSprite.y -= skeletonSprite.vy
    // console.log(skeletonSprite.x, skeletonSprite.y)
    // inspectSprite(skeletonSprite)
  }
  const scoreBoardTag = document.querySelector(".score-board")
  scoreBoardTag.innerText = `ScoreBoard: ${totalScore}`
});

function inspectSprite(skeletonSprite) {
  console.log(skeletonSprite)
};
// killedByChicken()
// const killedByChicken = () => {
//   const chickenBounds = chickenSprite.getBounds();
//   const skeletonSpriteBounds = skeletonSprite.getBounds();
//   if (chickenBounds.x + chickenBounds.width > (skeletonSpriteBounds.x + 28) && chickenBounds.x < skeletonSpriteBounds.x + (skeletonSpriteBounds.width - 28) && chickenBounds.y + chickenBounds.height > (skeletonSpriteBounds.y + 30) && chickenBounds.y < skeletonSpriteBounds.y + skeletonSpriteBounds.height) {
//     //remove drumStick, load new one, add point to total.
//     totalScore += 10;
//     console.log(totalScore);
//     skeletonSprite.destroy();
//     // PIXI.loader
//     //   .load(drumStickSetup)
//   }
// }
