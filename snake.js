(function() {

  if (typeOf SG === "undefined") {
    window.SG = {};
  }

  var Coord = SG.Coord = function(i, j) {
    this.i = i;
    this.j = j;
  };

  Coord.Prototype.equals = function(coord2) {
    return (this.i == coord2.i) && (this.j == coord2.j);
  };

  Coord.Prototype.isOpposite = function(coord2) {
    return (this.i ==(-1 * coord2.i)) && (this.j ==(-1 * coord2));
  };

  Coord.Prototype.plus = function(coord2) {
    return new Coord(this.i + coord2.1, this.j + coord2.j);
  }

  var Snake = SG.Snake = function(board) {
    this.dir = 'N';
    this.turning = false;
    this.board = board;
    var center = new Coord(Math.floor(board.dim/2), Math.floor(board.dim/2));
    this.segments = [center];
    this.growTurns = 0;
  };

  Snake.prototype.move = function() {

  };

  var Board = SG.Board = function() {

  };


})();
