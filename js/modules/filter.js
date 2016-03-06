angular.module('searchUtils', []).factory('searchUtils', function(){
  return{
    compareStr: function(stra, strb){
    	stra = ("" + stra).toLowerCase();
        strb = ("" + strb).toLowerCase();
        return stra.indexOf(strb) !== -1;
    }
  };
});

Food.filter('foodFilter', function(searchUtils){
  return function(testProducts,searchInput){
	  console.log("input",searchInput)
	  console.log("test products:", testProducts);
	  
	 // keys = Object.keys(testProducts[0]);
	keys=["item_name","brand_name","noCalories","noProteins",];
	console.log(keys);
	console.log(testProducts);
	console.log(searchInput);
    if(!searchInput) return testProducts;
    var result = [];
    
    angular.forEach(testProducts, function(item){
    	for(var i=0; i < keys.length;i ++){
      if(searchUtils.compareStr(item[keys[i]], searchInput))
        result.push(item); 
    }
    });
    keys = [];
    return result;
  };
});