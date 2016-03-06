Food.controller('searchPageCtrl', ['$scope','$location','$http','$localMemory',  function($scope,$location,$http,$localMemory) {
	$scope.results=[];
	$scope.searchItem = function(input){
		console.log(input);
		url='https://api.nutritionix.com/v1_1/search'
		$http.get(url +'/'+ input+'?results=0%3A30&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id&appId=74255d43&appKey=81991449978e216fa8d90815a2a24cae').then(
		         function successCallback(response) {
				     $scope.results=response.data.hits;
				     console.log("data from nutrixionus",$scope.results);
		   });
	} 



$scope.addToLocalStorage = function(item){
	console.log(item);
	$localMemory.addNewItem(item)
	$location.path('/homePage');
}

$scope.goToDetailsPage=function(){
	$location.path('/detailsPage');
}



}])