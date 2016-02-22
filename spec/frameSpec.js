
describe ("Frame", function() {
  var frame1;

  beforeEach(function () {
     frame1 = new Frame();
   });

  it('can record a strike', function(){
    frame1.checkStrike(10);
    expect(frame1.totalScore[0]).toEqual('X');
  });

  it('can record a spare', function () {
    frame1.firstRoll = 6;
    frame1.secondRoll = 4;
    frame1.checkSpare();
    expect(frame1.totalScore).toContain('/');
  });

  it('can create frame score', function(){
    frame1.firstRoll = 4;
    frame1.secondRoll = 3;
    frame1.checkScore();
    expect(frame1.totalScore).toEqual(7);
  });
});
