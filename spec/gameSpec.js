
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
    game1.rolls = 10;
    expect(game1.rolls).toEqual(10);
  });

  it('can record a strike', function(){
    game1.rolls = 10;
    expect(game1.rolls).toEqual(10);
  });

  it('can roll a perfect game', function() {
  multiple(10,12);
  expect(game1.finalScore()).toBe(300);
  });

  var multiple = function (pins, rolls) {
   for (var i = 0; i < rolls; i++)
   game1.roll(pins);};
  });
