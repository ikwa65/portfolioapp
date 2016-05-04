/**
 * Created by irek on 02/05/2016.
 */

'use strict';
angular
  .module('myApp')
  .controller('productController', ['$scope', 'productService', function ($scope, productService) {

    $scope.products = [];
    $scope.form = {};
    $scope.visible = false;

    $scope.showForm = function () {
      $scope.visible = true;
    };


    $scope.addProduct = function () {
      $scope.visible = false;
      productService.Product.save({}, $scope.form, function (data) {
        $scope.form = {};
        $scope.products.push(data);
      });
    };

    productService.Product.query({}, $scope.form, function (data) {
      $scope.products = data;
    });

    $scope.delete = function (index) {
      bootbox.confirm("Are you sure?", function (result) {
        if (result === true) {
          productService.Product.delete({id: $scope.products[index]._id}, function (data) {
            $scope.products.splice(index, 1);
          });
        }
      });

    }
  }]);


