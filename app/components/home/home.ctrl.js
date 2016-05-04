/**
 * Created by irek on 01/05/2016.
 */

  angular
    .module('myApp')
    .controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;

    $scope.slides = [{
      image: 'images/slider/bikes.jpg',
      id: 0,
      text: 'Bikes',
      cl: "caption center-align"
    },
      {
        image: 'images/slider/cars.jpg',
        id: 1,
        text: 'Cars',
        cl: "caption left-align"
      },
      {
        image: 'images/slider/scooters.jpg',
        id: 2,
        text: 'Scooters',
        cl: "caption right-align"
      },
      {
        image: 'images/slider/technology.jpg',
        id: 3,
        text: 'Technology',
        cl: "caption left-align"
      }
    ]
  }]);
