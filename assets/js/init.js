(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


    const d = new Date();
    const theYear = d.getFullYear();
    $("#footerdate").html(theYear);

  }); // end of document ready
})(jQuery); // end of jQuery name space
