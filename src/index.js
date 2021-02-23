const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

//window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded",() => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    asteroid = new Asteroid({pos: [20,20],vel: [10,10]});
    // circle.draw(ctx);
    asteroid.draw(ctx);
});