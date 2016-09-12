var app = angular.module("myApp", ["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.when("/home",
			{
		templateUrl:"templates/HomeTemplate.html",
		
			})
			.when("/projects",
			{
		templateUrl:"templates/HomeTemplate2.html",
		controller:"myCtrl"
			})
}]);


app.controller("myCtrl", function($scope,$http,myFactory) {

	$scope.data=myFactory.getData().success(function(response){
		   $scope.data=response;
	   })
	
});

app.factory("myFactory",function($http){
	return{
	
		getData:function(){
		return $http({
	            url: 'json/data.json',
	            method: 'GET',
	        })
		}
	}	  
});
