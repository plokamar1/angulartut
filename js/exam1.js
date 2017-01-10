var app1 = angular.module('app1',[]);//define angular js module

app1.controller('ctrl1', function($scope){
    $scope.first = 1;
    $scope.second = 1;

    $scope.updateValue = function(){
        $scope.calculation= $scope.first + " + " + $scope.second + " = " + (+$scope.first + + $scope.second );
    };
});