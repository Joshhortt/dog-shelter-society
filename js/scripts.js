$(document).ready(function() {
  $("button#gray").click(function() {
    $("body").removeClass();
    $("body").addClass("gray-background");
  });
  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});
