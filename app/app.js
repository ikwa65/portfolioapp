/**
 * Created by irek on 01/05/2016.
 */
'use strict';

angular.module('myApp', [
  "ngRoute",
  'ngAnimate',
  'angular-storage', 
  'ngMaterial',
  'ui.materialize',
  'ui.router',
  'ngResource',
  'ui.bootstrap'

])
  .config(function($provide,                
                   $routeProvider,
                   $locationProvider,
                   $httpProvider,
                   $urlRouterProvider,
                   $stateProvider
                   ){


    $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'components/home/home.tpl.html',
        controller: 'homeController'
      })
      .state('/about', {
        url: '/about',
        templateUrl: 'components/about/about.tpl.html',
        controller: 'aboutController'
      })    
      .state('/customers', {
        url: '/customers',
        templateUrl: 'components/customer/customer.tpl.html',
        controller: 'customerController'
      })
      .state('/products', {
        url: '/products',
        templateUrl: 'components/products/product.tpl.html',
        controller: 'productController'
      });

    $locationProvider.html5Mode({enabled: true });

   

  }).filter('startFrom', function(){
  return function(data, start){
    return data.slice(start)
  }
});
