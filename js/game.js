var ticTacToeApp = angular.module("ticTacToeApp", []);

ticTacToeApp.controller('ticTacToeCtrl',['$scope', function($scope){
//   $scope.tiles = [];  

  $scope.players = [                        
    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'img/ernie.jpg',
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'img/bert.jpg',
    }
  ];
}]);

