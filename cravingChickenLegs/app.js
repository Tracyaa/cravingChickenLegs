PIXI.utils.sayHello();

const displayDiv = document.querySelector('#display')
const renderer = PIXI.autoDetectRenderer(500, 500, {
  transparent: true,
  resolution: 1
});
const stage = new PIXI.Container();
displayDiv.appendChild(renderer.view);

PIXI.loader
  .add("skeleton", "images/BODY_skeleton.png")
  .add("drumStick", "images/Pataepollo.png")
  .add("chicken", "images/chicken.png")


function animationLoop() {
  requestAnimationFrame(animationLoop);
  renderer.render(stage);
};


// var map = {}; // You could also use an array
// onkeydown = onkeyup = function(e){
//     e = e || event; // to deal with IE
//     map[e.keyCode] = e.type == 'keydown';
//     /* insert conditional here */
//       ateDrumpStick()
//     if (e.key === 'ArrowRight' && skeletonSprite.x < 740) {
//       skeletonSprite.x += skeletonSprite.vx
//       // console.log(skeletonSprite.x, skeletonSprite.y)
//       // inspectSprite(skeletonSprite)
//     } else if (e.key === 'ArrowLeft' && skeletonSprite.x > -20) {
//       skeletonSprite.x -= skeletonSprite.vx
//       // console.log(skeletonSprite.x, skeletonSprite.y)
//       // inspectSprite(skeletonSprite)
//     } else if (e.key === 'ArrowDown' && skeletonSprite.y < 520) {
//       skeletonSprite.y += skeletonSprite.vy
//       // console.log(skeletonSprite.x, skeletonSprite.y)
//       // inspectSprite(skeletonSprite)
//     } else if (e.key === 'ArrowUp' && skeletonSprite.y > -20) {
//       skeletonSprite.y -= skeletonSprite.vy
//       // console.log(skeletonSprite.x, skeletonSprite.y)
//       // inspectSprite(skeletonSprite)
//     }
//     if (e.key === 'd' && chickenSprite.x < 740) {
//       chickenSprite.x += chickenSprite.vx
//       // console.log(chickenSprite.x, chickenSprite.y)
//       // inspectSprite(chickenSprite)
//     } else if (e.key === 'a' && chickenSprite.x > -20) {
//       chickenSprite.x -= chickenSprite.vx
//       // console.log(chickenSprite.x, chickenSprite.y)
//       // inspectSprite(chickenSprite)
//     } else if (e.key === 's' && chickenSprite.y < 520) {
//       chickenSprite.y += chickenSprite.vy
//       // console.log(chickenSprite.x, chickenSprite.y)
//       // inspectSprite(chickenSprite)
//     } else if (e.key === 'w' && chickenSprite.y > -20) {
//       chickenSprite.y -= chickenSprite.vy
//       // console.log(chickenSprite.x, chickenSprite.y)
//       // inspectSprite(chickenSprite)
//     }
// }
//
//
// window.addEventListener('keydown', event => {
//   ateDrumpStick()
//   if (event.key === 'ArrowRight' && skeletonSprite.x < 740) {
//     skeletonSprite.x += skeletonSprite.vx
//     // console.log(skeletonSprite.x, skeletonSprite.y)
//     // inspectSprite(skeletonSprite)
//   } else if (event.key === 'ArrowLeft' && skeletonSprite.x > -20) {
//     skeletonSprite.x -= skeletonSprite.vx
//     // console.log(skeletonSprite.x, skeletonSprite.y)
//     // inspectSprite(skeletonSprite)
//   } else if (event.key === 'ArrowDown' && skeletonSprite.y < 520) {
//     skeletonSprite.y += skeletonSprite.vy
//     // console.log(skeletonSprite.x, skeletonSprite.y)
//     // inspectSprite(skeletonSprite)
//   } else if (event.key === 'ArrowUp' && skeletonSprite.y > -20) {
//     skeletonSprite.y -= skeletonSprite.vy
//     // console.log(skeletonSprite.x, skeletonSprite.y)
//     // inspectSprite(skeletonSprite)
//   }
// });
//
// window.addEventListener('keydown', event => {
//   // debugger
//   if (event.key === 'd' && chickenSprite.x < 740) {
//     chickenSprite.x += chickenSprite.vx
//     // console.log(chickenSprite.x, chickenSprite.y)
//     // inspectSprite(chickenSprite)
//   } else if (event.key === 'a' && chickenSprite.x > -20) {
//     chickenSprite.x -= chickenSprite.vx
//     // console.log(chickenSprite.x, chickenSprite.y)
//     // inspectSprite(chickenSprite)
//   } else if (event.key === 's' && chickenSprite.y < 520) {
//     chickenSprite.y += chickenSprite.vy
//     // console.log(chickenSprite.x, chickenSprite.y)
//     // inspectSprite(chickenSprite)
//   } else if (event.key === 'w' && chickenSprite.y > -20) {
//     chickenSprite.y -= chickenSprite.vy
//     // console.log(chickenSprite.x, chickenSprite.y)
//     // inspectSprite(chickenSprite)
//   }
// })
//
//
//










//
