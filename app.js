(function(){
    'use strict';
    //help us to prevent mistake of declaring global variables 
    // eaxmple --> x= 1; no var is there so browser will consider it as a global var 
    //that ingates IIFE

angular.module('MyFirstApp', []) //angular.module act as directive binders 
.controller('myController',function($scope){
$scope.name = "";
$scope.totalNumericValue = 0;


$scope.displayNumericValue = function(){
    var displayValue = calculateNumericValues();
    $scope.totalNumericValue= displayValue;    
};

function calculateNumericValues(){
    var a = $scope.name;
    var totalValue = 0;
    for(var i = 0 ; i < a.length ; i++ ){
   totalValue +=a.charCodeAt(i); 
    }
    return totalValue;
};

});

})();