!function(){
  $(document).ready(function(){
    var b = new SG.Board(31,31);
    var matrix = b.matrix;
    var $board = $('.board');

    var render = function(){
      //draw on board
      $board.empty();
      for(var i = 0; i<matrix.length; i++) {
        var $ul = $('<ul></ul>');
        for (var j =0; j< matrix[0].length; j++) {
          var $li = $('<li></li>');
          if(matrix[i][j] === 1) {
            $li.addClass("snake")
          } else if (matrix[i][j] === 2) {
            $li.addClass("apple")
          } else {
            $li.addClass("empty")
          }
          $li.val(matrix[i][j]);
          $ul.append($li);
        }
        $board.append($ul);
      }
    }

    var listenAndTrigger = function(){
      $(window).keydown(function(event){
        var key = event.keyCode;
        var direction;
        if(key === 38 || key === 87){
          direction = "up";
        }
        else if(key === 37 || key === 65){
          direction = "left";
        }
        else if(key === 39 || key === 68){
          direction = "right";
        }
        else if(key === 40 || key === 83){
          direction = "down";
        }
        if(direction) {
          b.changeSnakeDir(direction)
        };
      });
    }

    var startGame = function(){
      var interval = window.setInterval(function() {
        matrix = b.step();
        if(matrix === "dead"){
            var $h2 = $("<h2> Game Over </h2>");
            $('h1').after($h2);
            clearInterval(interval);
        }
        else{
          // console.log(matrix)
          render();
        }
      }, 300);
    };
    listenAndTrigger();
    render();
    startGame();

  })
}()
