
function Game(){
  this.scorecard = [];
  var frame = new Frame();
}


Game.prototype.addFrameScore = function() {
  frame.checkStrike();
  frame.checkSpare();
  this.scorecard.push(frame.score);
};
