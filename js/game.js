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
      isPlaying: ''
    },
    {
      name:      'Bert',
      marker:    'O',
      img_url:   'img/bert.jpg',
      isPlaying: ''
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
    // console.log($scope.tiles[id]);
    $scope.activePlayer();

    if($scope.tiles[id].mark === ''){
      $scope.tiles[id].mark = $scope.currentPlayer.marker;
      //currentPlayer's boolean should be true
      $scope.turns ++;
      // $scope.currentPlayer.isPlaying = 'f';
      console.log($scope.turns);
      console.log($scope.currentPlayer);
    } else {
      console.log("taken");
    }
    console.log($scope.turns);
  };

  // $scope.handleClick = function() {
  //   console.log(this.$index);
  //   this.marker = 'X';
  //   // is square active? 

  //   // mark it that players marker
  //   // is it a winning choice? 

  // };

  $scope.isActive = function() {

  };

 

$scope.initialize();
}]);

