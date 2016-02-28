

Game = function () {
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
  if (this.frameError === true); {
    this.frameError = false; }
    this.rolls.push(pins);
};
