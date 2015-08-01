require('../js/snake.js');
var expect = require('chai').expect;

var Snake = SG.Snake;

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

  it('can move', function(){
    var s = new Snake();
    s.body = [[1,1]];
    s.move();
    expect(s.body).to.eql([[1,0]]);
  });
});
