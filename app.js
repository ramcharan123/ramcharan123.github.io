angular.module("resistorCalculatorApp",[])
.controller("ResistanceController",function($scope){
  $scope.bandA="Black";
  $scope.bandB="Black";
  $scope.bandC="Black";
  $scope.bandD="Gold";
  
  $scope.resistance="";

  var calc=new ResistorCalculator();
  $scope.calculateResistance1=function(){
    $scope.resistance=calc.calculateResistance($scope.bandA,$scope.bandB,$scope.bandC,$scope.bandD);
  }
});


