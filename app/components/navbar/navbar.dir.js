(function(){

  'use strict';

  angular
    .module('myApp')
    .directive('navbar', navbar);

  function navbar(){
    return {
      templateUrl: 'components/navbar/navbar.tpl.html',
      controller: navbarController,
      controllerAs: 'navbar'
    }
  }
  function navbarController(){

  }
})();
