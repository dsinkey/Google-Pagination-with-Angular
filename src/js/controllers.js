angular.module('myApp.controllers', []).controller('GooglePaginationCtrl', function($scope) {
  $scope.totalItems = 100;
  $scope.currentPage = 2;
});