angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
   $scope.helloWorld = function() {
       console.log("hello there, this is the mainCtrl Function!");
};

   $scope.todos = [
            {"name": "clean the house"},
            {"name": "water the dog"},
            {"name": "feed the lawn"},
            {"name": "pay dem bills"},
            {"name": "run"},
            {"name": "swim"}
            ]
            
});