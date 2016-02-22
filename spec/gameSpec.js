
describe ("Game", function() {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('can create a new game with blank scorecard', function(){
   expect(game.scorecard).toEqual([]);
 });

  it('can calculate a scorecard', function(){
   game.frame.firstRoll = 1;
   game.frame.secondRoll = 2;
   game.addFrameScore();
   expect(game.scorecard).toEqual([3]);
 });

  it('ends after 10 frames', function(){
  game.scorecard = [1,2,3,4,5,6,7,8,9,2,2];
  expect(game.endGame()).toEqual('GAME OVER');
});

  it('can calculate final result', function(){
    game.frame.firstRoll = 1;
    game.frame.secondRoll = 2;
    game.addFrameScore();
    game.frame.firstRoll = 1;
    game.frame.secondRoll = 4;
    game.addFrameScore();
    game.finalScore();
    expect(game.final).toEqual(8);
  });
});
