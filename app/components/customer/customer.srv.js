angular
  .module('myApp')
  .factory('customerService', ['$resource', function($resource){
    return{
        Customer: $resource('/customerApi/customers/:id', {id: '@id'})
    }
}]);
