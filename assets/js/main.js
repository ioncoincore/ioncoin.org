(function($){
    $(function(){

        $('.dropdown-trigger').dropdown({
            constrainWidth: false,
            coverTrigger: false,
            hover: true,
            inDuration: 250,
            outDuration: 250
        });

        $('.materialboxed').materialbox();

        $('.sidenav').sidenav();

        $('.tooltipped').tooltip();

  }); // end of document ready
})(jQuery); // end of jQuery name space
