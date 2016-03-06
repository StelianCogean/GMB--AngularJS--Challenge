Food.directive('headerDirective', function($location) {
	return {
        restrict: 'E',
        transclude: true,
        templateUrl: 'templates/Header.html',
        scope: {},
        
        controller: ['$scope', function (scope) {
        	
        	scope.navigateTo = function(path){
        		$location.path(path);
        	}
        	
        	
        	
        	 scope.menu=["Home","Add Item"];
        	 scope.homeMenuOption = angular.element(document.getElementById("home"));
        	 scope.addItemMenuOption = angular.element(document.getElementById("addItem"));
        	 scope.$on('$routeChangeSuccess', function () {
        		 var items = scope.items;
                 var path = $location.path();
                 if(path == "/homePage"){
                	 scope.homeMenuOption.addClass("bolded");
                	 scope.addItemMenuOption.removeClass("bolded");
                     		} 
                 if(path == '/searchPage'){
                	 scope.homeMenuOption.removeClass("bolded")
                	 scope.addItemMenuOption.addClass("bolded");
                 }
             });
        	}]
        }

  });