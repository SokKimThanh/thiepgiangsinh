function giang_sinh_ctrl($scope, ngAudio) { 
  $scope.audio = ngAudio.load('ms/giangsinh.m4a');
  var james = $("#bond");

  var right = function() {
    james.animate({ left: "5px" }, 600, left);
  };

  var left = function() {
    james.animate({ left: "0px" }, 600, right);
  };
  right();

  $("#cancel").click(function() {
    $("#bond").toggle("slow");
    $("#stop").trigger('click');  
  });
  $("button#thiepgiangsinh").click(function() {
    $("#play").trigger('click'); 
  });
  $("#img-play").click(function() {
    $("#play").trigger('click'); 
  });
}
angular
  .module("thiepgiangsinh", ["ngAudio"])
  .controller("giang_sinh_ctrl", giang_sinh_ctrl);
