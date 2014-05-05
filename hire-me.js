
$(document).ready(function(){

	resizeBlocks();

	console.log("loaded");

});

$(window).on('resize', function(){
	resizeBlocks();
});


function resizeBlocks(){

	vpwidth = $(window).width();
	vpheight = $(window).height();

	$('section').css('min-height', vpheight);

};

function isElementInViewport (el) { 
	// john resig's implementation
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
};
