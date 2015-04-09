
(function (module) {

    var RegisterController =
     function ($scope, $location, $http,$q, SharedModels) {
      
        
         $scope.ErrorDisplayStyle = "none";

         var successCallback = function (data) {
             console.log("!");

         }

         var errorCallback = function (data) {
             console.log("Request failed" + data);
         }
         $scope.currentUser = SharedModels.currentUser;
       
         $scope.submit = function(User)
         {
             var deferred = $q.defer();
           //var promise = $http.post('http://srvsin01.cloudapp.net/Svc/api/account/Register', User)
             var promise = $http.post('http://localhost:58894/api/account/Register', User)
          .success(function (data, status, headers, config) {
              deferred.resolve(data)
              console.log(data.Message);
        }).error(function (data, status) {
            deferred.reject(data);
            $scope.data = data;
            console.log(data.ModelState);
            $scope.ErrorDisplayStyle = "block";
        });

             return deferred;
         };

       


     };


   
  module.controller("RegisterController", RegisterController);
}(angular.module("MembershipModule")));


