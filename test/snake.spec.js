require('../js/snake.js');
var expect = require('chai').expect;

var Snake = SG.Snake;
var Board = SG.Board;

describe('snake', function(){
  beforeEach(function(){
    var s = new Snake();
    return s;
  });

  it('should add points', function(){
    var s = new Snake();
    var output = s.addPoints([1,1],[2,2]);
    expect(output).to.eql([3,3]);
  });

  it('can show next move', function(){
    var s = new Snake();
    s.body = [[1,1]];
    var nm = s.nextMove();
    expect(nm).to.eql([1,0]);
  });

  it('can move', function(){
    var s = new Snake();
    s.body = [[1,1]];
    s.move();
    expect(s.body).to.eql([[1,0]]);
  });
});

describe('broad', function(){
  it('can draw matrix', function(){
    var b = new Board(3,3);
    var matrix = b.drawMatrix();
    expect(matrix).to.eql([[0,0,0],[0,1,0],[0,0,0]])
  });
});
