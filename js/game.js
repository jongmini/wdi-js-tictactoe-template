var ticTacToeApp = angular.module("ticTacToeApp", []);

ticTacToeApp.controller('ticTacToeCtrl',['$scope', function($scope){
  
  $scope.game              = $('#game');   // the game container
  $scope.board             = $('#board');   // the board  container
  $scope.statusIndicators = $('#teams li');   // status bar container

  $scope.tiles = [];                         // all the "tiles"

  $scope.players = [                        
    {
      name:      'Ernie',
      marker:    'X',
      img_url:   'img/ernie.jpg',
      isPlaying: '',
      sqaures:[]
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg',
      isPlaying: '',
      squares:[]
    }
  ];

  $scope.initialize = function(){

  $scope.turns = 0;

  $scope.winCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
  ];

  $scope.tiles = [
    {id: "0", mark:''}, 
    {id: "1", mark:''},
    {id: "2", mark:''},
    {id: "3", mark:''},
    {id: "4", mark:''},
    {id: "5", mark:''},
    {id: "6", mark:''},
    {id: "7", mark:''},
    {id: "8", mark:''}
    
    ];

  };

  $scope.activePlayer = function(){
    if ($scope.turns % 2 === 1 ){
      $scope.currentPlayer = $scope.players[0];
    } else {
      $scope.currentPlayer = $scope.players[1];
    }

  };

  $scope.markSq = function(id){
    $scope.activePlayer();
    var player = $scope.currentPlayer;
    player.squares = player.squares||[];
    if(this.tile.mark === ''){
      this.tile.mark = player.marker;
      player.squares.push(this.$index);
      $scope.isWin(player.squares);
      console.log($scope.status);
      if($scope.status === "you won"){
        console.log("won");
      } else {
        console.log("game is not over");
      }

      $scope.turns ++;

    } else {
      console.log("taken");
    }
    console.log($scope.turns);
  };



  $scope.isWin = function(arr) {
    var result = _.find($scope.winCombos, function(combo){
      if((_.difference(combo,arr)).length === 0){
        console.log(combo+":"+arr);
        console.log("you won!");

        return true;
      } else {
        return false;
      }
    });

    $scope.status = result ? "you won" : "";

  };

 

$scope.initialize();
}]);

