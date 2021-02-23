const Asteroid = require("./asteroid.js");

const Game = function() {
    this.asteroid = [];
    this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 25;

Game.prototype.randomPosition = function() {
  //return the position of x and y inside of an array
  return  [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
}

Game.prototype.addAsteroids = function() {
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
        let position = this.randomPosition();
        this.asteroid.push(new Asteroid({pos: position,vel: [10,10]}));
    }
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for(let i = 0; i < this.asteroid.length; i++){
        let obj = this.asteroid[i];
        obj.draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for(let i = 0; i < this.asteroid.length; i++){
        let obj = this.asteroid[i];
        obj.move();
    }
}

module.exports = Game;