
describe ("Game", function() {
  var game;

  beforeEach(function () {
     game = new Game();
     frame = new Frame();
   });

   it('can create a new game with blank scorecard', function(){
     expect(game.scorecard).toEqual([]);
   });
});
