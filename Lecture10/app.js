// (function () {
// 'use strict';
//
// angular.module('DIApp', [])
// .controller('DIController', DIController);
//
// DIController.$inject = ['$scope', '$filter'];
// function DIController($scope, $filter) {
//   $scope.name = "Yaakov";
//
//   $scope.upper = function () {
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }
//
// })();

!function(){"use strict";function e(e,n){e.name="Yaakov",e.upper=function(){var o=n("uppercase");e.name=o(e.name)}}angular.module("DIApp",[]).controller("DIController",e),e.$inject=["$scope","$filter"]}();
