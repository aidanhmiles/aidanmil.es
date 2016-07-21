angular.module('aidanmil_es')
.config(['$urlRouterProvider',
function($urlRouterProvider) {
  // redirect to state 'hello' if the url is anything other than '/'
  $urlRouterProvider.otherwise('/hello');
}])
.config(['$httpProvider',
function($httpProvider) {
  // $httpProvider.interceptors.push('authInterceptor');
}])
// .run(['$rootScope', '$state', 'authService',
.run(['$rootScope', '$state',
// function($rootScope, $state, authService){
function($rootScope, $state) {

  // on every state change
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

    // requiresLoggedIn route filter
    // if (toState.requiresLoggedIn && authService.getCurrentUserToken() === null){
    //   $state.go('login');
    //   event.preventDefault();
    // }
  });

  $rootScope.$on('$stateChangeSuccess', function() {
    // document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

  // if there is an issue changing state, go here
  // this includes rejected promises in resolves
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    // a flash message would be nice here
    // $state.go(fromState);
  });

}]);


