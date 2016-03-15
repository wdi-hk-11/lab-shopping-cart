var cartApp = angular.module('ShoppingCartApp', []);

cartApp.controller('ShoppingCartController', ['$scope', function($scope) {
  $scope.newItem = { name: '', price: 0.0, quantity: 0, subtotal: 0.0 };
  $scope.items = [];
  $scope.totalPrice = 0;

  $scope.createItem = function() {
    $scope.items.push({
      name: $scope.newItem.name,
      price: Number($scope.newItem.price),
      quantity: $scope.newItem.quantity,
      subtotal: $scope.newItem.subtotal
    });

    $scope.newItem.name = '';
    $scope.newItem.price = 0.0;
  };

  $scope.updateQuantity = function($index) {
    var item = $scope.items[$index];
    if (isFinite(item.quantity)) {
      item.subtotal = item.price * item.quantity;
    } else {
      item.subtotal = 0;
    }
    $scope.calculateTotal();
  };

  $scope.calculateTotal = function() {
    $scope.totalPrice = $scope.items.reduce(function(total, item) {
      return total + item.subtotal;
    }, 0);
  };

  $scope.removeItem = function($index) {
    $scope.items.splice($index, 1);
    $scope.calculateTotal();
  }

}]);