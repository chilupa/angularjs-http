angular.module('myApp', [])
    .controller('myCtrl', function ($scope, $http, $timeout, httpServiceFactory) {

        vm = this; // for "Controller as" implementation  
        vm.noteFlag, vm.deleteFlag = false;
        vm.emptyContents = emptyContents;
        vm.getUserDetails = getUserDetails;
        vm.selectedUser = selectedUser;

        vm.getUserDetails();

        vm.saveUserDetails = function(userId){
            const userObject = {
                'name': vm.userSelected.name,
                'job': vm.userSelected.job,
                'location': vm.userSelected.location
            }
            httpServiceFactory.updateUser(userId, userObject).then(function successCase(){
                vm.getUserDetails();
            },function errorCase(){
                console.log('update failed!');
            });
        }

        vm.submitDetails = function () {
            httpServiceFactory.postUsers().then(function successCase(response) {
                vm.noteFlag = true;
                vm.postMessage = 'Details Submitted!'
                $timeout(function () { // to hide post  after 2 seconds from DOM
                    vm.noteFlag = false;
                }, 2000)
                vm.emptyContents();
                vm.getUserDetails();
            }, function errorCase(response) {
                console.log(response.statusText);
            });
        }

        vm.deleteUserDetails = function (userId) {
            httpServiceFactory.deleteUser(userId).then(
                function successCase() {
                    vm.deleteFlag = true;
                    vm.deleteMessage = 'User details deleted!'
                    $timeout(function () { // to hide post  after 2 seconds from DOM
                        vm.deleteFlag = false;
                    }, 2000);
                    vm.userSelected = '';
                    vm.getUserDetails();
                },
                function errorCase() {
                    console.log('delete failed!');
                }
            );
        }

        function getUserDetails() {
            httpServiceFactory.getUsers().then(function successCase(response) {
                vm.usersData = response.data;
            }, function errorCase(response) {
                console.log(response.statusText);
            });
        }

        function selectedUser(user) {
            vm.userSelected = user;
        }

        // Empty the contents of input element 
        function emptyContents() {
            vm.userNameInput = '';
            vm.userJobInput = '';
            vm.userLocationInput = '';
        }
    });