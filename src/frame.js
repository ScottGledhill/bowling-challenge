
function Frame() {
  this.score = [];
  this.totalScore = 0;
  this.firstRoll = 0;
  this.secondRoll = 0;
}

  Frame.prototype.checkStrike = function(strike) {
    if (strike === 10) {this.score.push(strike);}
  };

  Frame.prototype.checkSpare = function() {
    if (this.firstRoll != 10 && this.firstRoll + this.secondRoll === 10)
    this.score.push('/');
    else {
      this.checkScore();
    }
  };

  Frame.prototype.checkScore = function () {
    this.totalScore = (this.firstRoll + this.secondRoll);
    this.score.push(this.totalScore);
  };
