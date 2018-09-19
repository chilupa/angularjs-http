var app = angular.module('myApp', []);
app.controller('myCtrl', function ($http) {

    vm = this; // for "Controller as" implementation  

    $http({
        method: "GET",
        url: "http://localhost:3000/users"
    }).then(function successCase(response) {
        vm.usersData = response.data;
    }, function errorCase(response) {
        console.log(response.statusText);
    });

    vm.submitDetails = function () {
        var userObject = {
            "name": vm.userNameInput,
            "job": vm.userJobInput,
            "location": vm.userLocationInput
        }
        $http({
            method: "POST",
            url: "http://localhost:3000/users",
            headers: {
                'Content-Type': 'application/json'
            },
            data: userObject
        }).then(function successCase(response) {
            vm.postMessage = 'Details Submitted!'
            $http({
                method: "GET",
                url: "http://localhost:3000/users"
            }).then(function successCase(response) {
                vm.usersData = response.data;
            }, function errorCase(response) {
                console.log(response.statusText);
            });
        }, function errorCase(response) {
            console.log(response.statusText);
        });
        // Empty the contents of input element 
        vm.userNameInput = '';
        vm.userJobInput = '';
        vm.userLocationInput = '';

       
    }
})