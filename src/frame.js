
function Frame() {
  this.score = [];
  this.firstRoll = 0;
  this.secondRoll = 0;
}

  Frame.prototype.checkStrike = function(X) {
    if (X === 10) {this.score.push('X');}
  };

  Frame.prototype.checkSpare = function() {
    if (this.firstRoll != 10 && this.firstRoll + this.secondRoll === 10)
    this.score.push('/');
  };

  Frame.prototype.checkScore = function () {
    this.totalScore = (this.firstRoll + this.secondRoll);
    this.score.push(this.totalScore);
  };
