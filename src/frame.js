
function Frame() {
  this.totalScore = 0;
  this.firstRoll = 0;
  this.secondRoll = 0;
}

  Frame.prototype.checkStrike = function(X) {
    if (X === 10) {this.totalScore = 'X';}
  };

  Frame.prototype.checkSpare = function() {
    if (this.firstRoll != 10 && this.firstRoll + this.secondRoll === 10)
    this.totalScore = '/';
  };

  Frame.prototype.checkScore = function () {
    this.totalScore = (this.firstRoll + this.secondRoll);
  };
