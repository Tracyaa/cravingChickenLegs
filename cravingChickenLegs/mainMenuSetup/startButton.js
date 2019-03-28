// // var app = new PIXI.Application();
// // document.body.appendChild(app.view);
// var startButton;
// // create some textures from an image path
// var textureButton = PIXI.Texture.fromImage('https://dl.dropboxusercontent.com/s/mi2cibdajml8qj9/arrow_wait.png?dl=0');
// var textureButtonDown = PIXI.Texture.fromImage('https://dl.dropboxusercontent.com/s/m0x11c91wazehyp/arrow_error.png?dl=0');
// var textureButtonOver = PIXI.Texture.fromImage('https://dl.dropboxusercontent.com/s/1kuhddt8p9tr0k8/arrow_wait.png?dl=0');
//
// function buttonSetup() {
//
//     startButton = new PIXI.Sprite(textureButton);
//     startButton.buttonMode = true;
//
//     startButton.anchor.set(0.5);
//     startButton.x = 200;
//     startButton.y = 200;
//
//     // make the button interactive...
//     startButton.interactive = true;
//     startButton.buttonMode = true;
//
//     startButton
//         // Mouse & touch events are normalized into
//         // the pointer* events for handling different
//         // button events.
//         .on('pointerdown', onButtonDown)
//         .on('pointerup', onButtonUp)
//         .on('pointerupoutside', onButtonUp)
//         .on('pointerover', onButtonOver)
//         .on('pointerout', onButtonOut);
//
//         // Use mouse-only events
//         // .on('mousedown', onButtonDown)
//         // .on('mouseup', onButtonUp)
//         // .on('mouseupoutside', onButtonUp)
//         // .on('mouseover', onButtonOver)
//         // .on('mouseout', onButtonOut)
//
//         // Use touch-only events
//         // .on('touchstart', onButtonDown)
//         // .on('touchend', onButtonUp)
//         // .on('touchendoutside', onButtonUp)
//
//     // add it to the stage
//     // app.stage.addChild(button);
//     stage.addChild(startButton);
// }
//
// function onButtonDown() {
//     this.isdown = true;
//     this.texture = textureButtonDown;
//     this.alpha = 1;
// }
//
// function onButtonUp() {
//     this.isdown = false;
//     if (this.isOver) {
//         this.texture = textureButtonOver;
//     }
//     else {
//         this.texture = textureButton;
//     }
// }
//
// function onButtonOver() {
//     this.isOver = true;
//     if (this.isdown) {
//         return;
//     }
//     this.texture = textureButtonOver;
// }
//
// function onButtonOut() {
//     this.isOver = false;
//     if (this.isdown) {
//         return;
//     }
//     this.texture = textureButton;
// }
