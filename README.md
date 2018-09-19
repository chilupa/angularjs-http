# angularjs - $http methods

This application utilizes AngularJS $http get, post methods to fetch data from the server and posting data to Server. 

## [$http.get()](https://docs.angularjs.org/api/ng/service/$http#overview)
Syntax: 
```
$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```

## [$http.post()](https://docs.angularjs.org/api/ng/service/$http#setting-http-headers)
Syntax: 
```
$http({
  method: 'POST',
  url: '/someUrl',
  headers: headers: {
   'Content-Type': 'application/json'
  },
  data: { test: 'test' }
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
```
Mock `json` data: 

```
{
  "users": [
    {
      "id": 1,
      "name": "John",
      "job": "Software developer",
      "location": "Dallas,TX"
    },
    {
      "id": 2,
      "name": "Sansa",
      "job": "Java developer",
      "location": "Irving,OK"
    },
    {
      "id": 3,
      "name": "Steve",
      "job": "Full stack developer",
      "location": "Dublin,OH"
    }
  ]
}
```

Used **json-server** for running the above mock json data file locally in the terminal. 

`json-server users.json --watch`
