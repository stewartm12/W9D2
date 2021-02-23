const GameView = function(ctx, game) {
    this.ctx = ctx;
    this.game = game;
}
GameView.prototype.start = function() {
    setInterval(() => {
        //  this.game.moveObjects();
         this.game.step();
         this.game.draw(this.ctx);
    }, 20);
}

module.exports = GameView;