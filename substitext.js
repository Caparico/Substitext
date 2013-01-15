jQuery.fn.substitext = function(options) {	
	var defaults = {		// defining options for the plugin.
		txt: 'Your mouse is hovering me!'	
	};

	var o = jQuery.extend(defaults, options);

	return this.each(function() {	
		var e = jQuery(this);	// defining original text
		var originalText = e.text();

		e.hover(function(){		// defining what happens on hover state.
			e.text(o.txt);
		}, function() {
			e.text(originalText);
		});
	});
};