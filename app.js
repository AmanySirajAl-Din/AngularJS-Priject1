// this is Immediately-invoked Function Expression (IIFE)
(function(){
    'use strict';
    // to not define any variable globally if it's written without the 'var' keyword    

    angular.module('NameCalculator', [])

    .controller('NameCalculatorController', function($scope){
        $scope.name = "";
        $scope.totalValue = 0;
        $scope.displayNumeric = function(){
            var totalNameValue = calculateNumericForString($scope.name); // get the total value
            $scope.totalValue = totalNameValue; 
        };

        function calculateNumericForString(string){
            var totalStringValue = 0;
            for(var i = 0; i < string.length; i++){
                totalStringValue += string.charCodeAt(i);
            }
            return totalStringValue;
        }
    });
})();