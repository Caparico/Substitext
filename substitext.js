jQuery.fn.substitext = function() {
	return this.each(function() {
		jQuery(this).text("Changed text");
	});
};