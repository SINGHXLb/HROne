/* Client side model implemented by using  module factory */


/**User Information ***/
(function (module) {

    var SharedModels = function ()
    {

        return {
            currentUser: {
                Email: "",
                UserName: "",
                CompanyCode :"",
                Roles: "",
                JoinDate: "",
                PhoneNumber: ""

            }
        }
       
    };

    module.factory("SharedModels", SharedModels);
    
}(angular.module("SharedModule")));


