/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst Asteroid = function(options) {\n  MovingObject.call(this, options);\n  this.color = options.color || Asteroid.COLOR\n  this.radius = options.radius || Asteroid.RADIUS\n}\n\nAsteroid.COLOR = 'gray';\nAsteroid.RADIUS = 20;\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst Game = function() {\n    this.asteroid = [];\n    this.addAsteroids();\n}\n\nGame.DIM_X = 500;\nGame.DIM_Y = 500;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.randomPosition = function() {\n  //return the position of x and y inside of an array\n  return  [Game.DIM_X * Math.random(), Game.DIM_Y * Math.random()];\n}\n\nGame.prototype.addAsteroids = function() {\n  this.asteroid.push(new Asteroid({pos: [100, 100], vel: [0, 0], radius: 50, color: \"black\"}));\n  this.asteroid.push(new Asteroid({pos: [200, 200], vel: [0, 0], radius: 50, color: \"cyan\"}));\n\n  for(let i = 0; i < Game.NUM_ASTEROIDS; i++){\n      let position = this.randomPosition();\n      let length = Math.random() * 10;\n      this.asteroid.push(new Asteroid({game: this, pos: position,vel: Util.randomVec(length)}));\n  }\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    for(let i = 0; i < this.asteroid.length; i++){\n        let obj = this.asteroid[i];\n        obj.draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function() {\n    for(let i = 0; i < this.asteroid.length; i++){\n        let obj = this.asteroid[i];\n        obj.move();\n        let pos = obj.pos;\n        this.wrap(pos);\n    }\n}\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] < 0) {\n        pos[0] = 500;\n    } else if (pos[0] > 500) {\n        pos[0] = 0;\n    } else if (pos[1] < 0) {\n        pos[1] = 500; \n    } else if (pos[1] > 500) {\n        pos[1] = 0;\n    }\n}\n\nGame.prototype.checkCollisions = function(otherObject) {\n    for(let i = 0; i < this.asteroid.length; i++){\n        let obj = this.asteroid[i];\n        \n        if (!(obj === otherObject) && obj.isCollidedWith(otherObject)) {\n            // alert(\"Collision\");\n            obj.collideWith(otherObject);\n        }\n    }\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    for(let i = 0; i < this.asteroid.length; i++){\n        let obj = this.asteroid[i];\n        this.checkCollisions(obj);\n    }\n}\n\nGame.prototype.remove = function(asteroid) {\n    let i = this.asteroid.indexOf(asteroid);\n    this.asteroid = this.asteroid.slice(0, i) + this.asteroid.slice(i + 1);\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const GameView = function(ctx, game) {\n    this.ctx = ctx;\n    this.game = game;\n}\nGameView.prototype.start = function() {\n    setInterval(() => {\n        //  this.game.moveObjects();\n         this.game.step();\n         this.game.draw(this.ctx);\n    }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n//window.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\",() => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n    \n    // circle.draw(ctx);\n    // asteroid.draw(ctx);\n    // game1 = new Game();\n    // game1.draw(ctx);\n    game = new Game();\n    gameView = new GameView(ctx, game);\n    gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst MovingObject = function(options) { \n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game; \n}\n\nMovingObject.prototype.draw = function(ctx) {\n  // const canvas = document.getElementById(\"canvas\");\n  // const ctx = \n  const x = this.pos[0];\n  const y = this.pos[1];\n  const radius = this.radius;\n  ctx.lineWidth = 5;\n  ctx.strokeStyle = \"white\";\n\n  ctx.beginPath();\n  ctx.arc(x,y,radius,0,2*Math.PI);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n  ctx.stroke();\n  ctx.closePath();\n}\n\nMovingObject.prototype.move = function() {\n  let [x, y] = this.pos;\n  let [a, b] = this.vel;\n\n  this.pos = [x + a, y + b];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let distance = Math.sqrt((this.pos[0] - otherObject.pos[0]) ** 2 + (this.pos[1] - otherObject.pos[1]) ** 2);\n  let radii = this.radius + otherObject.radius;\n  if (distance < radii) {\n    return true;\n  }\n  return false;\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  this.game.remove(otherObject);\n  this.game.remove(this);\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate() { }\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass; \n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });