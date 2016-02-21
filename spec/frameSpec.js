
describe ("Frame", function() {
  var frame;

  beforeEach(function () {
     frame = new Frame();
   });

  it('can record a strike', function(){
    frame.checkStrike(10);
    expect(frame.score[0]).toEqual(10);
  });

  it('can record a spare', function () {
    frame.firstRoll = 6;
    frame.secondRoll = 4;
    frame.checkSpare();
    expect(frame.score).toContain('/');
  });

  it('can create frame score', function(){
    frame.firstRoll = 4;
    frame.secondRoll = 3;
    frame.checkScore();
    expect(frame.totalScore).toEqual(7);
  });
});
