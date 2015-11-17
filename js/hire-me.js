/* FOR ANIMATION SKIPPING */

// http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

// var skip = getUrlParameter('skip') === 'true' ? true : false;
var skip = true;

$(document).ready(function(){

    resizeBlocks(); 
    var vpheight = $(window).height(); 
    $('#slide1').css('top', vpheight);
    console.log("loaded");

    if (window.Promise && !skip){

    // SPINNER STUFF
    Spinner.setup();
    Spinner.fadeIn()
        .then(Spinner.doSpins)
        .then(Spinner.fadeOut)
        .then(function(){

        // bring in the rest of the stuff
        $("#spinner-container").css("position", "fixed");
        $("#slides").css("display", "block");
        $("#slide1").velocity({
            top: 0
        },{
            duration: 1800,
            easing: "easeInOutQuad"
        });
    });

    } else {
        $("#spinner-container").css("display", "none");
        $("#slides").css("display", "block"); 
        $("#slide1").css("top", 0);
    }


});

$(window).on('resize', function(){
    resizeBlocks();
});

function showSlides(){
    // make slides appear 
}

function resizeBlocks(){

    vpwidth = $(window).width();
    vpheight = $(window).height();

    $('.slide').css('min-height', vpheight);

}

function isElementInViewport (el) { 
    //john resig's implementation
    //special bonus for those using jQuery
    if (el instanceof jQuery) {
        el = el[0];
    } 
    var rect = el.getBoundingClientRect(); 
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
