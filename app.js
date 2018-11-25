// function that immediately invoked
// to make sure that no local variables bleed into the global scope
(function(){
    // first, define our main app
    // the thing that's going to be responsible for
    // chunck of HTML in index.html
    // angular.module("the name of the App", [dependencies needed] )
    // we don't need dependencies so we will leave it as empty array
    angular.module('myFirstApp', [])
    
    // controller is to define the viewModel of our view
    // .controller('name of the controller, the functionality of it);
    // $anything in angular it means that 'anything' is reserved for angular
    // $scope an object that allows us to share data
    //scope will be accesable in the controller component
    .controller('myFirstController', function($scope){
        $scope.name = "Amany";
        $scope.sayHello = function(){
            return "Hello Amany!";
        };
    });
     
})();