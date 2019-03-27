const gameStart = () => {
  PIXI.loader
    .load(bgSetup)
    .load(skeletonSetup)
    .load(chickenSetup)
    .load(drumStickSetup)

  gameTimer();
  // skeletonLoader();
  // chickenLoader();
  // inGameBgLoader();
  // drumStickLoader();
  // gameTimer();
};

gameStart();
