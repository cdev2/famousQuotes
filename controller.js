angular.module("quotes").controller("mainCtrl", function($scope, serviceQuotes){
    
    $scope.quotes = serviceQuotes.quotes;
    $scope.addquotes = function(quote){
        serviceQuotes.addquotes(quote)
    }
    $scope.click =function(q){
        console.log(q)
        serviceQuotes.removeQuotes(q)
    }

});


