angular.module('Myapp')
.controller('AboutCntrl', [
    '$scope',
    function($scope) {
        console.log('About Controller lOAded.');
        $scope.message = 'Keep GOind!!';
    }
]);
