$(document).ready(function() {
  $("#blueCar").hide();
  $("#redCar").hide();
  $(".moreDetail").hide();
  $("#about").hide();
  $("#aboutTheme").hide();

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
    $("#moreSafetyDetail").slideToggle();
    $("#moreSafetyButton").fadeOut();
    $("#lessSafetyButton").fadeIn("slow");
  });

  $("#lessTechButton").click(function() {
    $("#moreTechDetail").slideUp();
    $("#lessTechButton").fadeOut();
    $("#moreTechButton").fadeIn();
  });

  $("#lessSafetyButton").click(function() {
    $("#moreSafetyDetail").slideToggle();
    $("#lessSafetyButton").fadeOut();
    $("#moreSafetyButton").fadeIn();
  });

  $(".switchToOpposite").click(function() {
    $("#carExhibition").fadeToggle();
    $("#about").fadeToggle();
  });

  $("#originButton").click(function() {
    if(!($("#originButton").hasClass("withWhiteButtom"))) {
      $("#originButton").addClass("withWhiteButtom");
      $("#themeButton").removeClass("withWhiteButtom");
      $("#aboutOrigin").toggle();
      $("#aboutTheme").toggle();
    };
  });

  $("#themeButton").click(function() {
    if(!($("#themeButton").hasClass("withWhiteButtom"))) {
      $("#themeButton").addClass("withWhiteButtom");
      $("#originButton").removeClass("withWhiteButtom");
      $("#aboutOrigin").toggle();
      $("#aboutTheme").toggle();
    };
  });
});
