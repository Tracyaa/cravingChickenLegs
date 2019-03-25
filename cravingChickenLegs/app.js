PIXI.utils.sayHello();

const renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});
const displayDiv = document.querySelector('#display')
displayDiv.appendChild(renderer.view);

const stage = new PIXI.Container();

PIXI.loader
  .add("spritesheet", "images/BODY_skeleton.png")
  .load(setup)

var sprite;

function setup() {
  stage.interactive = true;

  const rect = new PIXI.Rectangle(0, 0, 64, 64);
  // const rectLeft = new PIXI.Rectangle(0, 64, 64, 64);
  // const rectFront = new PIXI.Rectangle(0, 128, 64, 64);
  // const rectRight = new PIXI.Rectangle(0, 192, 64, 64);
  const texture = PIXI.loader.resources["spritesheet"].texture;
  // const textureLeft = PIXI.loader.resources["spritesheet"].texture;
  // const textureFront = PIXI.loader.resources["spritesheet"].texture;
  // const textureRight = PIXI.loader.resources["spritesheet"].texture;
  texture.frame = rect;
  // textureLeft.frame = rectLeft;
  // textureFront.frame = rectFront;
  // textureRight.frame = rectRight;
  sprite = new PIXI.Sprite(texture);
  // if (arrowKey === 'ArrowRight') {
  //   let sprite = new PIXI.Sprite(textureRight);
  // } else if (arrowKey === 'ArrowLeft') {
  //   sprite = new PIXI.Sprite(textureLeft);
  // } else if (arrowKey === 'ArrowDown') {
  //   sprite = new PIXI.Sprite(textureFront);
  // } else if (arrowKey === 'ArrowUp') {
  //   sprite = new PIXI.Sprite(textureBack);
  // }

  // const idle = setInterval(function() {
  //   if (rectLeft.x >= 64 * 4) rectLeft.x = 0;
  //   sprite.texture.frame = rectLeft;
  //   rectLeft.x += 64;
  // }, 500);

  const idle = setInterval(function() {
    if (rect.x >= 64 * 4) rect.x = 0;
    sprite.texture.frame = rect;
    rect.x += 64;
  }, 500);

  sprite.scale.set(2, 2);
  sprite.vx = 10;
  sprite.vy = 10;

  stage.addChild(sprite);

  animationLoop();
}

function animationLoop() {
  requestAnimationFrame(animationLoop);

  renderer.render(stage);
};

window.addEventListener('keydown', event => {
  // debugger
  if (event.key === 'ArrowRight' && sprite.x < 650) {
    sprite.x += sprite.vx
  } else if (event.key === 'ArrowLeft' && sprite.x > 0) {
    sprite.x -= sprite.vx
  } else if (event.key === 'ArrowDown' && sprite.y < 450) {
    sprite.y += sprite.vy
  } else if (event.key === 'ArrowUp' && sprite.y > 0) {
    sprite.y -= sprite.vy
  }
})
















//
