$(document).ready(function() {
  $("#blueCar").hide();
  $("#redCar").hide();
  $(".moreDetail").hide();

  $(".colorBlock").hover(function() {
    $(this).fadeTo(100, 0.5);
  }, function() {
    $(this).fadeTo(100, 1.0);
  });

  $("#blackBlock").click(function() {
    $("#blueCar").hide();
    $("#redCar").hide();
    $("#blackCar").show();
  });

  $("#blueBlock").click(function() {
    $("#blackCar").hide();
    $("#redCar").hide();
    $("#blueCar").show();
  });

  $("#redBlock").click(function() {
    $("#blackCar").hide();
    $("#blueCar").hide();
    $("#redCar").show();
  });

  $("#moreTechButton").click(function() {
    $("#moreTechDetail").slideDown();
    $("#moreTechButton").fadeOut();
    $("#lessTechButton").fadeIn("slow");
  });

  $("#moreSafetyButton").click(function() {
    $("#moreSafetyDetail").slideDown();
    $("#moreSafetyButton").fadeOut();
    $("#lessSafetyButton").fadeIn("slow");
  });

  $("#lessTechButton").click(function() {
    $("#moreTechDetail").slideUp();
    $("#lessTechButton").fadeOut();
    $("#moreTechButton").fadeIn();
  });

  $("#lessSafetyButton").click(function() {
    $("#moreSafetyDetail").slideUp();
    $("#lessSafetyButton").fadeOut();
    $("#moreSafetyButton").fadeIn();
  });
});
