
describe ("Game", function() {

  var game1;

  beforeEach(function () {
    game1 = new Game();
  });

  it('can begin a game with no frame errors', function(){
    expect(game1.frameError).toEqual(false);
  });

  it('can change frame error when pins entered greater than 10', function(){
    game1.roll(9);
    game1.roll(4);
    expect(game1.frame).toEqual([9]);
  });

  it('can push pins into rolls array', function(){
    game1.roll(9);
    expect(game1.frame).toEqual([9]);
  });

  it('can record a spare', function(){
    game1.roll(5);
    game1.roll(2);
    game1.roll(3);
    multiple(0, 18);
    expect(game1.finalScore()).toEqual(10);
  });

  it('can record a strike', function(){
    game1.roll(10);
    game1.roll(3);
    game1.roll(7);
    multiple(0, 16);
    expect(game1.finalScore()).toEqual(30);
  });

  it('can record a perfect game', function() {
    multiple(10,12);
    expect(game1.finalScore()).toBe(300);
  });

  it('can record gutter game', function () {
    multiple(0, 20);
    expect(game1.finalScore()).toBe(0);
  });

  var multiple = function (pins, rolls) {
   for (var i = 0; i < rolls; i++)
   game1.roll(pins);};
  });
