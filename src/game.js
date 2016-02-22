

function Game(){
  this.scorecard = [];
  this.frame = new Frame();
  this.final = 0;
}

Game.prototype.addFrameScore = function() {
  this.endGame();
  this.frame.checkStrike();
  this.frame.checkSpare();
  this.frame.checkScore();
  this.scorecard.push(this.frame.score);
};

Game.prototype.endGame = function() {
  if (this.scorecard.length >= 10) return 'GAME OVER';
  this.finalScore();
};

Game.prototype.finalScore = function() {
  this.final = this.scorecard.reduce(function(a, b) { return a + b; }, 0);
  console.log(this.scorecard);
};
