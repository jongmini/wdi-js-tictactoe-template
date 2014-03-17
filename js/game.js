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
      img_url:   'img/ernie.jpg'
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg'
    }
  ];

  $scope.initialize = function(){

  $scope.win_combos = [
    [0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]
  ];

  $scope.tiles = [
    {id: "0", isActive: false, marker:''}, 
    {id: "1", isActive: false, marker:''},
    {id: "2", isActive: false, marker:''},
    {id: "3", isActive: false, marker:''},
    {id: "4", isActive: false, marker:''},
    {id: "5", isActive: false, marker:''},
    {id: "6", isActive: false, marker:''},
    {id: "7", isActive: false, marker:''},
    {id: "8", isActive: false, marker:''}
    
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
    if($scope.tiles[id].team === ""){
      $scope.tiles[id].team = $scope.currentPlayer.marker;
      $scope.turns++;
    } else {
      console.log("taken");
    }
    console.log($scope.turns);
  };

  $scope.handleClick = function() {
    console.log(this.$index);
    this.marker = 'X';
    // is square active? 

    // mark it that players marker
    // is it a winning choice? 

  };

  $scope.isActive = function() {

  };

 

$scope.initialize();
}]);

