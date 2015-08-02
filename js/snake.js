//API
// var b = new Board(11,11);
//var matrix = b.matrix;
// b.changeSnakeDir('up'); this can be called several times
// var matrix = b.step();
// b.changeSnakeDir('down'); this can be called several times
// var matrix = b.step();
// b.changeSnakeDir('left'); this can be called several times
// var matrix = b.step();

(function() {
  if (typeof SG === "undefined") {
    window.SG = {};
    // module.export = this.SG = {};
  }
//coordinate
/*
  0,0 1,0 2,0  ->x;
  0,1
  0,2
   |
   y
*/
  var Snake = SG.Snake = function(x, y){
    if(typeof x !== "undefined" && typeof y !== "undefined"){
      this.body = [[x, y]];
    }
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

  Snake.prototype.nextMove = function() {
    var nextMove = this.addPoints(this.body[0], Snake.DIRECTIONS[this.head_dir]);
    return nextMove;
  };


  var Board = SG.Board = function(width, height){
    var x = Math.floor(width / 2);
    var y = Math.floor(height / 2);
    this.snake = new Snake(x, y);
    this.width = width;
    this.height = height;
    this.drawMatrix();
    this.generateApple();
    this.gameOver = false;
  };

  Board.prototype.drawMatrix = function() {
    //draw empty space with 0
    //draw snake with 1
    //if apple exist draw apple with 2
    var matrix = [];
    for (var i=0; i<this.height; i++) {
      matrix.push([]);
      for (var j=0; j<this.width; j++) {
        matrix[i].push(0);
      }
    }
    var snake_body = this.snake.body;
    for (var i=0; i< snake_body.length; i++) {
      var x = snake_body[i][0];
      var y = snake_body[i][1];
      matrix[y][x] = 1;
    };
    if(this.apple){
      var x = this.apple[0];
      var y = this.apple[1];
      matrix[y][x] = 2;
    }
    this.matrix = matrix;
  };

  Board.prototype.generateApple = function() {
    //draw apple with 2
    //assign this.apple to generated location
    var randomY =  Math.floor(Math.random() * this.height);
    var randomX = Math.floor(Math.random() * this.width);
    if (this.matrix[randomY][randomX] === 0) {
      this.matrix[randomY][randomX] = 2;
      this.apple = [randomX, randomY];
    } else {
      this.generateApple();
    }
  };

  Board.prototype.changeSnakeDir = function(dir) {
    this.snake.head_dir = dir;
  };

  Board.prototype.died = function() {
    var head = this.snake.body[0];
    this.snake.body.forEach(function(position, index) {
      if(index !== 0 ) {
        var x = position[0];
        var y = position[1];
        if(head[0] === x && head[1] === y) {
          console.log('here')
          return true;
        }
      }
    });

    return (head[0] < 0 || (head[0] > this.width-1) || head[1] < 0 || (head[1] > this.height-1));
  };

  Board.prototype.step = function() {
    //check next move is apple
    //yes: snake eat, generateApple
    //no: snake move
    //check if dead? return "dead"
    //if not dead, return generated matrix
    if(this.gameOver) return "dead";
    var nextMove = this.snake.nextMove();
    var x = nextMove[0];
    var y = nextMove[1];
    if (this.matrix[y] && this.matrix[y][x] && this.matrix[y][x] === 2) {
      this.snake.eat();
      this.generateApple();
    } else {
      this.snake.move();
    }

    if (!this.died()) {
      this.drawMatrix();
      return this.matrix;
    } else{
      this.gameOver = true;
      return "dead"
    }
  };
})();
