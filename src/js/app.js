var app = angular.module('Myapp', ['ngRoute',]);
app.config(function($routeProvider){
         $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller:'Home2Ctrl'
        })

        .when('/about',{

                templateUrl:'views/about.html',
                controller:'AboutCntrl'
                
        })
       
       .when('/contact',{
                templateUrl:'views/contact.html',
                controller :'ContactCtrl'

        })

       .when('/register',{
                templateUrl:'views/register.html',
                controller:'LoginContrl'
       })




});

app.controller('Home2Ctrl',function($scope){
    console.log('Ented in Home2Controller');
    $scope.message = "welcome in Home"
});

app.controller('AboutCntrl',function($scope){
    console.log('Aboput Section');

});

app.controller('ContactCtrl',function($scope){
    console.log('Contact Preeesssssdddd!');

});

app.controller('LoginContrl',function($scope){
    console.log('client Validation  pressssesdddddd!');

})









