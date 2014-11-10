$(document).ready(function(){

	resizeBlocks(); 
	var vpheight = $(window).height(); 
	$('#slide1').css('top', vpheight);
	console.log("loaded");

	// SPINNER STUFF
	Spinner.setup();
	Spinner.fadeIn()
		.then(Spinner.doSpins)
		.then(Spinner.fadeOut)
		.then(function(){

		// bring in the rest of the stuff
		// $("#slides").fadeIn(1);
		$("#slide1").velocity({
			top: 0
		},{
			duration: 1800,
			easing: "easeInOutQuad"
		});
	});


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
