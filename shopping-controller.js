angular.module('myApp')
// scope uses ShoppingSlistItems across multiple pages
.controller('ShoppingListController', ['$scope', 'ShoppingListItems', function($scope, ShoppingListItems){
	var shoplist = $scope;

	shoplist.items = ShoppingListItems.getList();
// The function called to add items to the items object
	shoplist.addItem = function(newItem){
			shoplist.items.push({
			name: shoplist.newItem.name,
			qty: shoplist.newItem.qty,
			priority: shoplist.newItem.priority
			})
	};
	// removes items from each object
	shoplist.removeItem = function(item){
		var removedItem = shoplist.item.indexOf(item);
		shoplist.item.splice(removeItem, 2);
	};
	//clear the lists on both home and shopping list tabs
	shoplist.removeAll = function(){
		shoplist.items = [];
		shoplist.items.length = 0;
		ShoppingListItems.removeAll();
	}
}])