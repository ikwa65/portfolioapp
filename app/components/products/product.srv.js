angular
  .module('myApp')
  .factory('productService', ['$resource', function($resource){
    return{
      Product: $resource('/productApi/products/:id', {id: '@id'})
    }
  }]);
