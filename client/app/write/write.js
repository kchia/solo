angular.module('flow.write', [])

.controller('WriteController', function ($scope, Entries) {
  $scope.entry = {};

  $scope.addEntry = function(){
    Entries.addEntry($scope.entry)
      .then(function(resp){
        console.log(resp);
        $scope.clearAll();
      });

  };

  $scope.clearAll = function(){
    $scope.entry.title = '';
    $scope.entry.text = '';
  };

});
