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

module.exports = MovingObject;