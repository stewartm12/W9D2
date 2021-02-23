const Game = require('./game.js');

const MovingObject = function(options) { 
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  // const canvas = document.getElementById("canvas");
  // const ctx = 
  const x = this.pos[0];
  const y = this.pos[1];
  const radius = this.radius;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";

  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI);
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

MovingObject.prototype.move = function() {
  let [x, y] = this.pos;
  let [a, b] = this.vel;

  this.pos = [x + a, y + b];
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let distance = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);
  let radii = this.radius + otherObject.radius;
  if (distance < radii) {
    return true;
  }
  return false;
}

MovingObject.prototype.collideWith = function(otherObject) {
  Game.remove(otherObject);
  Game.remove(this);
}

module.exports = MovingObject;