const GameView = require("./game_view.js");
const Game = require("./game.js");

//window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded",() => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    // circle.draw(ctx);
    // asteroid.draw(ctx);
    // game1 = new Game();
    // game1.draw(ctx);
    game = new Game();
    gameView = new GameView(ctx, game);
    gameView.start();
});