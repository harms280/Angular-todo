var app = angular.module('todoApp', []);

app.controller("TodosController", function($scope) { 
	$scope.todos = []; // Store todo items here. What is the data type?
  $scope.newTodo = {};
  $scope.visible = false;

	$scope.addTodo = function (newTodo) { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos.push(newTodo);
    $scope.newTodo = {};
    $scope.todoForm.$setPristine();
    $scope.visible = false;

	};
	$scope.deleteAll = function () { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos = [];
	};
  $scope.showForm = function() {
    $scope.visible = true;
  };
});