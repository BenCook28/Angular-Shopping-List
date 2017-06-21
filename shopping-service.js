// link to each page
angular.module('myApp')
//make each function
.factory('ShoppingListItems', function(){
	var items = [];
	function getList(){
		return items;
	}
	function removeAll(){
		items = [];
	}
	// return the functions after I call them
	return {
		getList: getList,
		removeAll:removeAll
	}
})