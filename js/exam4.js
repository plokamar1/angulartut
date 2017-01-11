var app4 = angular.module("app4",[]);

app4.controller("ctrl4", function($scope){
    $scope.programmers = [{name:'Fotis Skandalis',job: 'Web Developer'},
                        {name:'Spyros Savvanis',job: 'Server Administrator'},
                        {name:'Manolis Markatselas',job: 'Web Designer'},
                        {name:'Panagiotis Dorgiakis',job: 'Web Developer'}];
});