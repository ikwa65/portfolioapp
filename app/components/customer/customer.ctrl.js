/**
 * Created by irek on 02/05/2016.
 */
'use strict';
angular
  .module('myApp')
  .controller('customerController', ['$scope','customerService', function($scope, customerService){

  $scope.customers = [];
  $scope.form = {};
  $scope.visible = false;
    $scope.pageSize = 5;
    $scope.currentPage = 1;


  $scope.showForm = function(){
    $scope.cusForm.firstName.$touched = false;
    $scope.cusForm.lastName.$touched = false;
    $scope.cusForm.street.$touched = false;
    $scope.cusForm.city.$touched = false;
    $scope.cusForm.county.$touched = false;
    $scope.visible = true;
  };


  $scope.addCustomer = function(){
    $scope.visible = false;
    customerService.Customer.save({}, $scope.form, function(data){
      $scope.form = {};
      $scope.customers.push(data);
    });
    };

    customerService.Customer.query({}, $scope.form, function(data){
      $scope.customers = data;
    });

    $scope.delete = function(index){
      bootbox.confirm("Are you sure?", function(result) {
        if(result === true){
          customerService.Customer.delete({id: $scope.customers[index]._id}, function(data){
            $scope.customers.splice(index, 1);
          });
        }
      });

    }
}]);


