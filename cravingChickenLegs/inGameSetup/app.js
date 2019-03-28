PIXI.utils.sayHello();

const displayDiv = document.querySelector('#display')
const timerHeader = document.querySelector("#timer")
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();
displayDiv.appendChild(renderer.view);

// const loadImages = () => {
// .add("mainMenuBg", "images/9046OT_06_02.jpg")
  PIXI.loader
    .add("skeleton", "images/BODY_skeleton.png")
    .add("drumStick", "images/Pataepollo.png")
    .add("chicken", "images/chicken.png")
    .add("greenBg", "images/background1.png")
// }


function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};










//
