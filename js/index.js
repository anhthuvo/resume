$(document).ready(function(){
    function navSlideDown(action, id) {
      if (action) {
        $(id).slideDown(500);
      }
      else {
        $(id).slideUp(500);
      }
    }


    $(".ielts_seemore").click(function(){
      if ( $(".ielts").css("display") == 'block' ) {
        navSlideDown(false, ".ielts");
      } else {
        navSlideDown(true, ".ielts");
      }
    });

    $("#projects_seemore").click(function(){
      if ( $("#projects").css("display") == 'grid' ) {
        navSlideDown(false, "#projects");
      } else {
        navSlideDown(true, "#projects");
      }
    });
});