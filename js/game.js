var ticTacToeApp = angular.module("ticTacToeApp", []);

ticTacToeApp.controller('ticTacToeCtrl',['$scope', function($scope){
  $scope.game              = $('#game');   // the game container
  $scope.board             = $('#board');   // the board  container
  // $scope.status_indicators = $('#teams li');   // status bar container

  // $scope.tiles = [];                         // all the "tiles"

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

  $scope.handleClick = function() {
    console.log(this.$index);
    this.marker = 'X';
    // is square active? 

    // mark it that players marker
    // is it a winning choice? 

  };

  $scope.isActive = function() {

  };


}]);

