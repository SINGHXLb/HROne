/* Client side model implemented by using  module factory */


/**User Information ***/
(function (module) {

    var SharedModels = function () {

        return {
            currentUser: {
                Email: "",
                UserName: "",
                RoleName: "",
                JoinDate: "",
                PhoneNumber: ""

            }
        }

    };

    module.factory("MemberShipService", MemberShipService);

}(angular.module("SharedModule")));


