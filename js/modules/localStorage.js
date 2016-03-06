Food.factory('$localMemory', function($filter, $http,$location){
	
	var obj ={
			
			foodItems : [   {
		   		    item_name :  "Tomatoes",
				    brand_name : "Natural S.R.L",
				    item_id : 'N/A',
				    brand_id : 'N/A',
				    noCalories : 60,
				    noProteins : 50
			    },
			    {
			    	item_name :  "Burger",
				    brand_name : "BurgerKIng",
				    item_id : 'N/A',
				    brand_id : 'N/A',
				    noCalories : 160,
				    noProteins : 30
			    },
			    {
			    	item_name :  "Lasagna",
				    brand_name : "Hot Grill",
				    item_id : 'N/A',
				    brand_id :'N/A',
				    noCalories : 200,
				    noProteins : 80
			    },
			    {
			    	item_name :  "Chicken",
				    brand_name : "Organic Food",
				    item_id : 'N/A',
				    brand_id : 'N/A',
				    noCalories : 300,
				    noProteins : 250
			    },
			    {
			    	item_name :  "Salmon",
				    brand_name : "Fishing S.R.L",
				    item_id : 'N/A',
				    brand_id : 'N/A',
				    noCalories : 60,
				    noProteins : 50
			    },
			    {
			    	item_name :  "Yogourt",
				   	brand_name : "Danone",
				   	item_id : 'N/A',
				    brand_id : 'N/A',
				    noCalories : 60,
				    noProteins : 150
			    }
			    ],
			    
			    detailsForProduct : {},
			    
			    
			    
			    
	};
	
	return {
		addNewItem : function(item){
			console.log("localStorage",item);
			obj.foodItems.push({
				item_name  : item.item_name,
				brand_name : item.brand_name,
				item_id	   : item.item_id,
				brand_id   : item.brand_id,
				noCalories : 'N/A',
				noProteins : 'N/A'
				
			});
			console.log(obj.foodItems);
		},
		
		getDetails : function(itemId){
				url="https://api.nutritionix.com/v1_1/item?id="+itemId+"&appId=74255d43&appKey=81991449978e216fa8d90815a2a24cae"
				$http.get(url).then(
				         function successCallback(response) {
						     var results = response;
				        	 obj.detailsForProduct = results.data;
						     $location.path("/detailsPage");
				   });
			
		},
		
		
		getObj : function() {
			return obj;
		},
		
		getDetailsForproduct :function(){
			return obj.detailsForProduct;
		}
		
		
	};
	
});