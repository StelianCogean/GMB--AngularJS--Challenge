Food.controller('detailsPageCtrl', ['$scope','$localMemory', function($scope,$localMemory) {
$scope.initialText='hello world, details page';
$scope.details=$localMemory.getDetailsForproduct();
console.log("shouldbehere", $scope.details);


}])