jQuery.fn.substitext = function(options) {
	var defaults = {
		txt: 'Mouse hover'
	};

	var o = jQuery.extend(defaults, options);

	return this.each(function() {
		var e = jQuery(this);
		var originalText = e.text();

		e.hover(function(){
			e.text(o.txt);
		}, function() {
			e.text(originalText);
		});
	});
};