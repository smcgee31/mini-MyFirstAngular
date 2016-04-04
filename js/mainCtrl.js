angular.module('friendsList').controller('mainCtrl', function($scope){
    $scope.friends = ['Mark', 'Jerry', 'Tami', 'Scott', 'Amar', 'Adam'];

    $scope.addFriend = function() {
        $scope.friends.push($scope.newFriend);
        $scope.newFriend = "";
    }

});
