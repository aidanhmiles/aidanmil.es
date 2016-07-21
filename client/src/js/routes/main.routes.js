/**
  *
  * This file defines routes related to authentication
  * and temporarily, temporary example routes.
**/

angular.module('aidanmil_es')
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
  // TODO make this /login instead of /hello
  .state('hello', {
    controller: 'HelloController',
    controllerAs: 'ctrl',
    url: '/hello',
    templateUrl: 'hello.html'
  })
  .state('localization', {
    controller: 'LocalizationExampleController',
    controllerAs: 'ctrl',
    url: '/localization',
    templateUrl: 'localization_example.html'
  })
  // .state('forgot', {
  //   controller: 'ForgotPasswordController',
  //   controllerAs:'forgotCtrl',
  //   url: '/forgot',
  //   templateUrl: 'pages/forgotPassword.html'
  // })
  // .state('reset', {
  //   controller: 'ResetPasswordController',
  //   controllerAs:'resetCtrl',
  //   url: '/reset',
  //   templateUrl: 'pages/resetPassword.html'
  // })
  // .state('signup', {
  //   controller: 'AdminSignUpController',
  //   controllerAs: 'adminSignUpCtrl',
  //   url: '/signup',
  //   templateUrl: 'pages/adminSignUp.html',
  //   resolve: {
  //     queryParams: ['$location', function ($location) {
  //       return $location.search();
  //     }]
  //   }
  // })
  // .state('logout', {
  //   url: '/logout',
  //   controller: ['sgAuthService', '$state', function(sgAuthService, $state){
  //     sgAuthService.logout().then(function(){
  //       $state.go('login');
  //     });
  //   }]
  // });
}]);
