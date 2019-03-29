// PIXI.utils.sayHello();
const displayDiv = document.querySelector('#display')
const timerDiv = document.querySelector("div#top-text")
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();
const alpacaBgUrl = "https://orig00.deviantart.net/0289/f/2013/130/e/1/tiling_alpaca_background_by_x_burner-d64sshr.png"
const musicDiv = document.querySelector('.music')
const musicIframe = document.querySelector('iframe')

displayDiv.appendChild(renderer.view);

let isGameStart = false;

PIXI.loader
  .add("alpaca", "images/alpaca.gif")
  .add("skeleton", "images/BODY_skeleton.png")
  .add("drumStick", "images/Pataepollo.png")
  .add("chicken", "images/chicken.png")
  .add("greenBg", "images/background1.png")
  .add("ahhh", "images/alpacaAhhh.png")

function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};
