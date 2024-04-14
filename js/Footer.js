function piedDePage() {
	var fenetreHeight = window.innerHeight;
	var pageHeight = $("#page-top").height();
	
	if (fenetreHeight >= pageHeight) {
		$("footer").css({
			bottom : "0px",
			position : "absolute"
		});
	}
	else {
		$("footer").css({
			position : "relative"
		});
	}
}

$(function() {
	piedDePage();
});
jQuery(window).resize(piedDePage); 