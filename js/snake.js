(function() {
  if (typeof SG === "undefined") {
    // window.SG = {};
    module.export = this.SG = {};
  }
//coordinate
/*
  0,0 1,0 2,0  ->x;
  0,1
  0,2
   |
   y
*/

  var Apple = SG.Apple = function() {

  };



  var Snake = SG.Snake = function(){
    this.body = [];
    this.head_dir = 'up';
  };

  Snake.DIRECTIONS = {
    "up": [0, -1],
    "down": [0, 1],
    "left": [-1, 0],
    "right": [1, 0]
  };

  Snake.prototype.addPoints = function(arr1, arr2) {
    return [arr1[0]+ arr2[0], arr1[1] + arr2[1]];
  };

  Snake.prototype.move = function() {
    if(this.body.length > 0) {
      //drop last element
      //unshift first element with new
      console.log(this.body);
      var newHead = this.addPoints(this.body[0], Snake.DIRECTIONS[this.head_dir]);
      this.body.unshift(newHead);
      this.body.pop();

    }
  };

  Snake.prototype.eat = function() {
    if(this.body.length > 0) {
    var newHead = this.addPoints(this.body[0], Snake.DIRECTIONS[this.head_dir]);
    this.body.unshift(newHead);
    }
  };

  var Board = SG.Board = function(width, height){
    this.apple = new Apple();
    this.snake = new Snake();
    this.width = width;
    this.height = height;
  };

  Board.prototype.generateApple = function() {
    
  };


  Board.prototype.step = function() {};


})();
