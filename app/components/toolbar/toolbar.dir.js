(function(){

  'use strict';

  angular
    .module('myApp')
    .directive('toolbar', toolbar);

    function toolbar(){
      return {
        templateUrl: 'components/toolbar/toolbar.tpl.html',
        controller: toolbarController,
        controllerAs: 'toolbar'
      }
    }
    function toolbarController(auth, store, $location){
    
    }
})();
