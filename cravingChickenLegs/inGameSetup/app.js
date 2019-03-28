PIXI.utils.sayHello();

const displayDiv = document.querySelector('#display')
const timerHeader = document.querySelector("#timer")
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();
const alpacaBgUrl = "https://orig00.deviantart.net/0289/f/2013/130/e/1/tiling_alpaca_background_by_x_burner-d64sshr.png"
displayDiv.appendChild(renderer.view);


// const loadImages = () => {
PIXI.loader
  .add("mainMenuBg", "images/9046OT_06_02.png")
  .add("alpaca", "images/alpaca.gif")
  .add("skeleton", "images/BODY_skeleton.png")
  .add("drumStick", "images/Pataepollo.png")
  .add("chicken", "images/chicken.png")
  .add("greenBg", "images/background1.png")
// }



function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};
