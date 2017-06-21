// gets data from model, then gives it to view

angular.module('myApp')

// Dependency Injection
.controller('HomeController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var home = $scope;
	home.items = ShoppingListItems.getList();
}])