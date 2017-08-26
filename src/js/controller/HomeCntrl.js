angular.module('Myapp')
.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Home ControllerLoaded.');
        $scope.message = 'Move ON!';
    }
]);