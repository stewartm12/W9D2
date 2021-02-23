const MovingObject = require("./moving_object.js");

//window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded",() => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    circle =  new MovingObject([20,20],[10,10],5,"#00FF00");
    circle.draw(ctx);
});