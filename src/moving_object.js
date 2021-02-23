const MovingObject = function(pos, vel, radius, color) { 
  this.pos = pos;
  this.vel = vel;
  this.radius = radius;
  this.color = color;
}

MovingObject.prototype.draw = function(ctx) {
  // const canvas = document.getElementById("canvas");
  // const ctx = 
  const x = 250 / 2;
  const y = 250 / 2;
  const radius = 100;
  ctx.lineWidth = 5;
  ctx.strokeStyle = "white";

  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
}

module.exports = MovingObject;