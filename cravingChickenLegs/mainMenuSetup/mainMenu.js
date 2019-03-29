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

function alpacaSetup() {
    stage.interactive = true;

    alpaca = new PIXI.Sprite(PIXI.loader.resources["alpaca"].texture);
    alpaca.scale.set(1, 1);
    alpaca.interactive = true;
    stage.addChild(alpaca);
};




//
