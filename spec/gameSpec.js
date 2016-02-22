
describe ("Game", function() {
  var game;

  beforeEach(function () {
     game = new Game();
     frame = new Frame();
   });

   it('can create a new game with blank scorecard', function(){
     expect(game.scorecard).toEqual([]);
   });

   it('can calculate a scorecard', function(){
     frame.firstRoll = 6;
     frame.secondRoll = 2;
     game.addFrameScore();
     expect(game.scorecard).toEqual(8);
   });
});
