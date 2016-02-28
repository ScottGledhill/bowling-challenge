

Game = function() {
  this.rolls = [];
  this.frame = [];
  this.frameError = false;
};

Game.prototype.checkFrame = function(pins) {
  if (pins > (10 - (this.frame[0])) ) {
    this.frameError = true; }
  else if ((this.frame.length === 1) || (pins === 10)) {
    this.frame = []; }
  else {
    this.frame.push(pins); }
};

Game.prototype.roll = function(pins) {
  this.checkFrame(pins);
  if (this.frameError === true) {
    this.frameError = false;
  } else {
    this.rolls.push(pins);
  }
};

Game.prototype.finalScore = function () {

  var score = 0;
  var rollNumber = 0;
  var game = this;

  function isSpare () {
    return game.rolls[rollNumber] + game.rolls[rollNumber + 1] == 10;
  }

  function isStrike () {
    return game.rolls[rollNumber] == 10;
  }

  for (var whichFrame = 0; whichFrame < 10; whichFrame++) {
  if (isStrike()) {
    score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
    rollNumber++;
  } else if (isSpare()) {
    score += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
    rollNumber += 2;
  } else {
    score += this.rolls[rollNumber] + this.rolls[rollNumber + 1];
    rollNumber += 2;
  }
}
  return score;
};
