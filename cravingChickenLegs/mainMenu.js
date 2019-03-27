var mainMenuBg;

const mainMenuLoader = () => {
  PIXI.loader
    .load(mainMenuSetup)
};


function mainMenuSetup() {
  stage.interactive = true;

  mainMenuBg = new PIXI.Sprite(PIXI.loader.resources["mainMenuBg"].texture);
  mainMenuBg.scale.set(1.15, 1)
  mainMenuBg.x = 0
  mainMenuBg.y = 0;

  stage.addChild(mainMenuBg);

};
