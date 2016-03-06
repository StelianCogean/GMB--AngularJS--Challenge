Food.controller('homeCtrl', ['$scope','$location','$http','$filter','$localMemory', function($scope,$location,$http,$filter,$localMemory) {
	$scope.obj=$localMemory.getObj();
	$scope.testProducts = $scope.obj.foodItems; 
	console.log("obiectele sunt",$scope.testProducts);
		
	$scope.keys=["item_name","brand_name","noCalories","noProteins"];
	$scope.goToSearchPage = function(){
		$location.path('/searchPage');
	}

	$scope.getDetailsForProduct= function(itemId){
		
		$localMemory.getDetails(itemId);
		console.log(itemId);
		
	}
	



}])