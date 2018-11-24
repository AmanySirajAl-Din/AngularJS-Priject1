// function that immediately invoked
// to make sure that no local variables bleed into the global scope
(function(){
    // first, define our main app
    // the thing that's going to be responsible for
    // chunck of HTML in index.html
    // angular.module("the name of the App", [dependencies needed] )
    // we don't need dependencies so we will leave it as empty array
    angular.module('myFirstApp', []);
     
})();