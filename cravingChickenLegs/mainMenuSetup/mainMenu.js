var mainMenuBg;
var alpaca;


function mainMenuBgSetup() {
  stage.interactive = true;

  const texture = PIXI.loader.resources["mainMenuBg"].texture;
  mainMenuBg = new PIXI.Sprite(texture);

  mainMenuBg.scale.set(2, 2)
  mainMenuBg.x = 0
  mainMenuBg.y = 0;

  stage.addChild(mainMenuBg);
};

// const mainMenuStage = new PIXI.Container();
// // const mainMenuLoader = () => {
// //   PIXI.loader
// //     .load(mainMenuSetup)
// // };
// PIXI.loader
//   .load(alpaca)
// PIXI.loader
//   .load(mainMenuSetup)
// //
// function mainMenuSetup() {
//   stage.interactive = true;
//
//   mainMenuBg = new PIXI.Sprite(PIXI.loader.resources["mainMenuBg"].texture);
//   mainMenuBg.scale.set(2, 2)
//   mainMenuBg.x = 0
//   mainMenuBg.y = 0;
//
//   stage.addChild(mainMenuBg);
//
// };
function alpacaSetup() {
    stage.interactive = true;

    alpaca = new PIXI.Sprite(PIXI.loader.resources["alpaca"].texture);

    // alpaca.x = Math.floor(Math.random() * (renderer.width - 25));
    // alpaca.y = Math.floor(Math.random() * (renderer.height - 25));
    alpaca.scale.set(1, 1);
    alpaca.interactive = true;
    stage.addChild(alpaca);

    // drumStick.rotation = 0;
    // animationLeg();
};
// const gameStartTextLoader = () => {
    // PIXI.loader
    //   .load(gameStartTextSetup)

// };





// const gameStartTextSetup = () => {
//     // gameStartText.visible = true;
//
//
// };
