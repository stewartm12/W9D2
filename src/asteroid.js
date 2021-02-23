const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const Asteroid = function(options) {
  MovingObject.call(this, options);
  this.color = options.color || Asteroid.COLOR
  this.radius = options.radius || Asteroid.RADIUS
}

Asteroid.COLOR = 'gray';
Asteroid.RADIUS = 20;
Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;