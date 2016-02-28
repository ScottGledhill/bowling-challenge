
describe ("Game", function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('can begin a game with no frame errors', function(){
   expect(game.frameError).toEqual(false);
  });

  it('can throw error when pins entered greater than 10', function(){
    game.roll(11);
    expect(game.frameError).toEqual(false);
  });

  it('can push pins into rolls array', function(){
    game.roll(9);
    expect(game.frame).toEqual([9]);
  });

});
