$(document).ready(function() {
	//Show the first image
	$("#vid-carousel video").eq(0).show();
	var counter = 0;
	setInterval(function(){
	//Hide the current image
	
	$("#vid-carousel video").eq(counter).hide();
	//Incrememnt our index variable
	counter++;
	if(counter >= $("#vid-carousel video").length) {
		counter = 0;
	}
	//Show the next image
	$("#vid-carousel video").eq(counter).show();

	}, 6000);

	$("#community-container div").hide();

//Community fade in
	$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 3400) {
		$("#bike").fadeIn(400);
		$("#nina").fadeIn(800);
		$("#alice").fadeIn(1200);
		$("#share").fadeIn(1600);
  }
});

//Mobile Navigation
	$("#hamburger").click(function() {
		$(".nav-wrapper").show();
	});

	$(".nav-wrapper").click(function(event) {
		$(this).hide();
	});

	$(".nav").click(function(event) {
		event.stopPropagation();
	})


});





