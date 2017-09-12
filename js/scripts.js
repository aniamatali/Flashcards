$(document).ready(function() {
  $("li").click(function() {
    $("span").addClass("inactive");
    $(this).children("span").removeClass("inactive");
  });

});
