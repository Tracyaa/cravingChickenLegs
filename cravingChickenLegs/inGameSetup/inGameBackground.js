var greenBg;

// const inGameBgLoader = () => {
//   PIXI.loader
//   .load(bgSetup);
// };

function bgSetup() {
  stage.interactive = true;

  greenBg = new PIXI.Sprite(PIXI.loader.resources["greenBg"].texture);
  greenBg.scale.set(1.15, 1)
  greenBg.x = 0
  greenBg.y = 0;

  stage.addChild(greenBg);
  //
};
