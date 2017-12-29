(function(){
    'use strict';

angular.module('filterAJ',[])
       .controller('filterController',filterController);
       
       filterController.$inject = ['$scope','$filter'];
       function filterController($scope,$filter){
        $scope.items = "";
        $scope.number = "";
        $scope.stateOfBeing = "";  
              
        $scope.checkIfTooMuch = function(){
            var totalNumberOfItems = $scope.items;            
            var individualItems = totalNumberOfItems.split(',');
                                               
            if(individualItems.length > 1 && individualItems.length < 4 ){                
                 $scope.stateOfBeing = "Enjoy!!"; 
                 $scope.number = individualItems.length;

            }
                else if(individualItems.length > 3){
                     $scope.stateOfBeing = "Too much !!"; 
                     $scope.number =individualItems.length;
                }
                else {
                    $scope.stateOfBeing = "Please enter data first";
                    $scope.number = 0;
                }

        };     
        };

})();