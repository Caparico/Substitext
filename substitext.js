jQuery.fn.substitext = function() {
	return this.each(function() {
		var originalText = jQuery(this).text();

		jQuery(this).hover(function(){
			jQuery(this).text("Zeine mouse hovered!");
		}, function() {
			jQuery(this).text(originalText);
		});
	});
};