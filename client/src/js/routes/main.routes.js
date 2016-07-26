angular.module('aidanmil_es')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  .state('hello', {
    controller: 'HelloController',
    controllerAs: 'ctrl',
    url: '/hello',
    templateUrl: 'hello.html'
  })
}]);
