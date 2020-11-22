var win_width;
$(document).ready(function() {
	$(".header__adap").click(function(){
		$(".header").toggleClass("open")
	})
	win_width = $(window).width();

	new WOW().init();
})
$(window).resize(function() {
	win_width = $(window).width()
	if (win_width>991) {
		$(".header").removeClass("open")
	}
})