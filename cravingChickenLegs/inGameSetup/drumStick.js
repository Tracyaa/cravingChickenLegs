let drumStick;

// const drumStickLoader = () => {
//   PIXI.loader
//   .load(drumStickSetup);
// }

function drumStickSetup() {
  stage.interactive = true;

  drumStick = new PIXI.Sprite(PIXI.loader.resources["drumStick"].texture);

  drumStick.x = Math.floor(Math.random() * (renderer.width - 25));
  drumStick.y = Math.floor(Math.random() * (renderer.height - 25));

  drumStick.interactive = true;
  stage.addChild(drumStick);

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

const randomRelocate = () => {
  drumStick.x = Math.floor(Math.random() * (renderer.width - 25));
  drumStick.y = Math.floor(Math.random() * (renderer.height - 25));
}

let respondTime = 10; // seconds
const respondTimer = () => {
  const idle = setInterval(function() {
    respondTime -= 1;
    if (respondTime <= -1) {
      randomRelocate();
      respondTime = 10;
    }
  }, 1000);
}











//
