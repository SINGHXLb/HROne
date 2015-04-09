
(function (module)  {

        var LoginController =
        function ($scope, $http) {
                                     $scope.register = function (){
                                       alert("sign in was clicked!");
                                    };
                                 };
  module.controller("LoginController", LoginController);
}(angular.module("MembershipModule")));


