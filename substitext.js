jQuery.fn.substitext = function() {
	return this.each(function() {
		var originalText = jQuery(this).text();

		jQuery(this).hover(function(){
			jQuery(this).text("Zeine mouse ist uber mir!");
		}, function() {
			jQuery(this).text(originalText);
		});
	});
};