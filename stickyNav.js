(function($) {

	$.stickyNav = function(element, config) {
	
		var $element = $(element),
            	 element = element;
		var plugin = this;
		
		var defaults = {
			offset: 0
		};
		var config = $.extend(defaults, config);
		
		var stickyPoint;
		var stickyHeight;
		var nextPadding;
		var calc;
		
		plugin.init = function() {
			
			stickyPoint = $element.offset().top - config.offset;
			stickyHeight = $element.outerHeight(); //returns an integer
			nextPadding = parseInt($element.next().css('padding-top')); //.css() returns px, need an integer
			calc = stickyHeight + nextPadding;
			
			$(window).scroll(function(){
					
				if ($(window).scrollTop() > stickyPoint){
					$element.addClass('fixed').next().addClass('padding').css('padding-top',(calc));
				}
				else {
					$element.removeClass('fixed').next().removeClass('padding').css('padding-top',(nextPadding));
				}
				
			});

		};
		
		plugin.destroy = function() {
			$(window).unbind('scroll');
			$element.removeClass('fixed').next().removeClass('padding').css('padding-top',(nextPadding));
			console.log('destroyed');
		};
		
		plugin.reset = function() {
			$element.removeClass('fixed').next().removeClass('padding').css('padding-top',(nextPadding));
			
			stickyPoint = $element.offset().top - config.offset;
			stickyHeight = $element.outerHeight(); //returns an integer
			nextPadding = parseInt($element.next().css('padding-top')); //.css() returns px, need an integer
			calc = stickyHeight + nextPadding;
			
			if ($(window).scrollTop() > stickyPoint){
				$element.addClass('fixed').next().addClass('padding').css('padding-top',(calc));
			}
			else {
				$element.removeClass('fixed').next().removeClass('padding').css('padding-top',(nextPadding));
			}
		};
		
		$(window).resize(function() {
			plugin.init();
		});

		plugin.init();
	
	};
	
})(jQuery)
