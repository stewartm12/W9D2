const Asteroid = require("./asteroid.js");
const Util = require('./util.js');

const Game = function() {
    this.asteroid = [];
    this.addAsteroids();
}

Game.DIM_X = 500;
Game.DIM_Y = 500;
Game.NUM_ASTEROIDS = 5;

Game.prototype.randomPosition = function() {
  //return the position of x and y inside of an array
  return  [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];
}

Game.prototype.addAsteroids = function() {
  this.asteroid.push(new Asteroid({pos: [100, 100], vel: [0, 0], radius: 50, color: "black"}));
  this.asteroid.push(new Asteroid({pos: [200, 200], vel: [0, 0], radius: 50, color: "cyan"}));

  for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
      let position = this.randomPosition();
      let length = Math.random() * 10;
      this.asteroid.push(new Asteroid({pos: position,vel: Util.randomVec(length)}));
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
        let pos = obj.pos;
        this.wrap(pos);
    }
}

Game.prototype.wrap = function(pos) {
    if (pos[0] < 0) {
        pos[0] = 500;
    } else if (pos[0] > 500) {
        pos[0] = 0;
    } else if (pos[1] < 0) {
        pos[1] = 500; 
    } else if (pos[1] > 500) {
        pos[1] = 0;
    }
}

Game.prototype.checkCollisions = function(otherObject) {
    for(let i = 0; i < this.asteroid.length; i++){
        let obj = this.asteroid[i];
        
        if (!(obj === otherObject) && obj.isCollidedWith(otherObject)) {
            // alert("Collision");
            obj.collideWith(otherObject);
        }
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    for(let i = 0; i < this.asteroid.length; i++){
        let obj = this.asteroid[i];
        this.checkCollisions(obj);
    }
}

Game.prototype.remove = function(asteroid) {
    let i = this.asteroid.indexOf(asteroid);
    this.asteroid = this.asteroid.slice(0, i) + this.asteroid.slice(i + 1);
}

module.exports = Game;