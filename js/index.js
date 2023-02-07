$(document).ready(function(){
    function navSlideDown(action) {
      if (action) {
        $("nav").slideDown(500);
        $(".nav__btn__up").show();
        $(".nav__btn__down").hide();
      }
      else {
        $("nav").slideUp(500);
        $(".nav__btn__down").show();
        $(".nav__btn__up").hide();
      }
    }


    $(".nav__btn__down").click(function(){
      navSlideDown(true);
    });

      $(window).scroll(function() {
        // navbar hide when scrolling
        if ( $("nav").css("display") == 'block' &&
              $(window).width() <= 767.98 ) {
            navSlideDown(false);
        }
      });

    // click outside navbar, navbar disappear
    $("body").click(function(event){
        if ( $("nav").css("display") == 'block' && 
        $(window).width() <= 767.98){
          if ( event.target.className.indexOf("navbar") == -1 &&
                event.target.className.indexOf("nav__btn__down") == -1 ){
                  navSlideDown(false);
          }
        }
      });
});