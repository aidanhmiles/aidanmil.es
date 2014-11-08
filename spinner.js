$(document).ready(function(){

	// VARS

	var $outer = $("#outer"),
	$inner = $("#inner"),
	$circle = $("#circle"),
	$progressBar = $("#progress-bar"),
	$progressPercent = $(".number");
	spinDuration = 3400,
	fadeInDuration = 1500;

	// MAIN

	fadeIn().then(doSpins).then(fadeOut);

	// FUNCTIONS

	function fadeIn(){ 
		return new Promise(function(resolve, reject){
			$(".spin-img").fadeIn(fadeInDuration, function(){ 
				resolve(true);
			});
		});
	}

	function doSpins(){ 
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
	}

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


	function fadeOut(){ 
		$("#spinner").velocity({
			top: "-20px",
			opacity: 0,
			boxShadowColor: "#fff"
		},{
			duration: 700,
			easing: "easeInQuad"
		});

		// and we're done!
	}

}); // end document.ready
