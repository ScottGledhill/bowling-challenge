
describe ("Game", function() {

  var game1;

  beforeEach(function () {
    game1 = new Game();
  });

  it('can begin a game with no frame errors', function(){
    expect(game1.frameError).toEqual(false);
  });

  it('can throw error when pins entered greater than 10', function(){
    game1.roll(11);
    expect(game1.frameError).toEqual(false);
  });

  it('can push pins into rolls array', function(){
    game1.roll(9);
    expect(game1.frame).toEqual([9]);
  });

  it('can record a spare', function(){
    game1.isSpare();
    expect(game1.rolls).toEqual(10);
  });
});
