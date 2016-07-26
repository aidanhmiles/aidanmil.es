angular.module('aidanmil_es')
.controller('HelloController', ['$anchorScroll', '$location', function($anchorScroll, $location) {

  $anchorScroll.yOffset = 1;

  this.goto = function(id) {
    // var old = $location.hash();
    $location.hash(id);
    $anchorScroll(id);
    // reset to old to keep any additional routing logic from kicking in
    // $location.hash(old);
  }

}]);
