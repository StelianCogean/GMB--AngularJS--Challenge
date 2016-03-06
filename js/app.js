var Food = angular.module('Food', ['ngRoute','searchUtils']);

/* JavaScript content from js/app.js in folder common */

/* JavaScript content from js/app.js in folder common */
Food.config(
				[
						'$routeProvider',
						'$locationProvider',
						function($routeProvider, $locationProvider) {
							$routeProvider
							
							// SPRINT 1
									.when(
											"/homePage",
											{
												templateUrl : 'templates/homePage.html',
												controller : 'homeCtrl',
												
											})	
									.when(
											"/searchPage",
											{
												templateUrl: 'templates/searchpage.html',
												controller : 'searchPageCtrl',
											})
									.when(
											"/detailsPage",
											{
												templateUrl:'templates/detailsPage.html',
												controller:'detailsPageCtrl',
												resolve : {
													detailsInit : function($localMemory) {
														return $localMemory.getDetailsForproduct();
													}
												}
											
											})									

									.when("/", {
										redirectTo : '/homePage'
									})
									
						} ]);