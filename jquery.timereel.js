/**
 * Timereel v0.1.0 - 2013-11-22
 * jQuery timeline plugin
 * (c) 2013 Xiang Gao - https://github.com/phoenixgao/timereel
 * license: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
	var TIMEREEL = {
		box: null
	}
	
	$.fn.timereel = function(options) {
		var wrapper = this;
		console.log(options);
		wrapper.html($tag('div').addClass('timereel-box'));
		TIMEREEL.box = wrapper.find('.timereel-box');
		TIMEREEL.box.html(options.data);
	};

	// Convenience function for creating new jQuery objects
	function $tag(tag, id, css) {
		var element = document.createElement(tag);
		if (id) {
			element.id = prefix + id;
		}
		if (css) {
			element.style.cssText = css;
		}
		return $(element);
	}
})(jQuery);
