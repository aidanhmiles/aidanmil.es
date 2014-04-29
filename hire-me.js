
function resizeBlocks(){

	vpwidth = $(window).width();
	vpheight = $(window).height();

	$('section').css('height', vpheight);

};

$(document).ready(function(){

	resizeBlocks();

	console.log("loaded");

});

$(window).on('resize', function(){
	resizeBlocks();
});
