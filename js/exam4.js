var app4 = angular.module("app4",[]);

app4.controller("ctrl4", function($scope){
    $scope.programmers = [[1,'Fotis','Skandalis','Web Developer'],
                        [2,'Spyros','Savvanis','Server Administrator'],
                        [3,'Manolis','Markatselas','Web Designer'],
                        [4,'Panagiotis','Dorgiakis','Web Developer']];
});