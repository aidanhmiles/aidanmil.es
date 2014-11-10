// This is the spinning widgety- thing with orange triangles on my homepage,
// stuck into its very own module. Yay modules.

var Spinner = (function(window){

	var Spinner = window.Spinner || {};

	// VARS
	var $outer, $inner, $circle, $progressBar, $progressPercent,
	spinDuration, fadeInDuration; 

	// PRIVATES 
	function updateProgress(elements, percent, timeRemaining, timeStart){
		// $progressBar.width(percent * 100 + "%"); // EASY WAY
		$progressPercent.text(parseInt(percent * 100));
	} 

	function startProgressBar(){ 
		$progressBar.velocity({
			width: "100%"
		},{
			duration: spinDuration,
			easing: easing
		});
	} 

	// PUBLIC FUNCTIONS
	return {
		
		setup: function(){
			// Set the VARS
			$outer = $("#outer"),
			$inner = $("#inner"),
			$circle = $("#circle"),
			$progressBar = $("#progress-bar"),
			$progressPercent = $(".number"),
			spinDuration = 3400,
			fadeInDuration = 1000;
		},

		fadeIn: function(){ 
			return new Promise(function(resolve, reject){
				$(".spin-img").fadeIn(fadeInDuration, function(){ 
					resolve(true);
				});
			});
		},

		doSpins: function(){ 
			return new Promise(function(resolve){
				delay = 500;
				easing = "easeInOutQuad";

				$outer.velocity({
					rotateZ: (360*4) - 30 + "deg" 
				},{
					duration: spinDuration,
					easing: easing,
					delay: delay
				});

				$inner.velocity({
					rotateZ: "-720deg" 
				},{
					duration: spinDuration,
					easing: easing,
					delay: delay
					// loop: 2
				});

				$circle.velocity({
					rotateZ: "480deg" 
				},{
					duration: spinDuration,
					easing: easing,
					delay: delay,
					complete: resolve, // Promise's resolve argument
					begin: startProgressBar,
					progress: updateProgress
				});

			});
		},

		fadeOut: function(){ 
			return new Promise(function(resolve){
				$("#spinner").velocity({
					// top: "-200px",
					opacity: 0,
					boxShadowColor: "#fff",
					display: "none"
				},{
					duration: 500,
					easing: "easeInQuad",
					complete: resolve

				});
			});
		} 
	}

})(window);
