(function($){
    $(function(){

        $('.dropdown-trigger').dropdown({
            constrainWidth: false,
            coverTrigger: false,
            hover: true,
            inDuration: 250,
            outDuration: 250
        });

        $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
