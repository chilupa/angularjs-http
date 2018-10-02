(function () {
    "use strict";
    angular.module('myApp')
        .factory('httpServiceFactory', function ($http) {
            const url = "http://localhost:3000/users";
            // GET 
            function getUsers() {
                return $http({
                    method: "GET",
                    url: url
                });
            }
            // POST
            function postUsers() {
                var userObject = {
                    "name": vm.userNameInput,
                    "job": vm.userJobInput,
                    "location": vm.userLocationInput
                }
                return $http({
                    method: "POST",
                    url: url,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: userObject
                });
            }

            // PUT
            function updateUser(userId, user) {
                const putUrl = url + '/' + userId;
                return $http({
                    method: "PUT",
                    url: putUrl,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: user
                })
            }

            // DELETE
            function deleteUser(userId) {
                const deleteUrl = url + '/' + userId;
                return $http.delete(deleteUrl);
            }
            return {
                getUsers: getUsers,
                postUsers: postUsers,
                updateUser: updateUser,
                deleteUser: deleteUser
            }
        });

})();