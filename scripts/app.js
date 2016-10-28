angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
   $scope.helloWorld = function() {
       console.log("hello there, this is the mainCtrl Function!");
   }; 
})

.controller('coolCtrl', function($scope) {
   $scope.whoAmI = function() {
       console.log("hello there, this is the coolCtrl Function!");
   }; 
});