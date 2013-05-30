(function($) {

	$.stickyNav = function(element, config) {
	
		var $element = $(element),
             element = element;
		var plugin = this;
		
		var defaults = {
			maxwidth: 0
		};
		var config = $.extend(defaults, config);
		
		var stickyPoint = $element.offset().top;
		var stickyHeight = $element.outerHeight(); //returns an integer
		var stickyWidth = $element.width();
		var nextPadding = parseInt($element.next().css('padding-top')); //.css() returns px, need an integer
		var calc = stickyHeight + nextPadding;
		
		plugin.init = function() {

			$(window).scroll(function(){
			
				if ($(window).width() > config.maxwidth) {
					
					if ($(window).scrollTop() > stickyPoint){
						$element.addClass('fixed').next().css('padding-top',(calc));
						$element.css('width',(stickyWidth));
					}
					else {
						$element.removeClass('fixed').next().css('padding-top',(nextPadding));
						
					}
				}
				
			});

		};
		
		plugin.destroy = function() {
			$(window).unbind('scroll');
			$element.removeClass('fixed').next().css('padding-top',(nextPadding));
		};
		
		plugin.init();
	
	};
	
	$.fn.stickyNav = function(config) {

        return this.each(function() {
            if (undefined == $(this).data('stickyNav')) {
                var plugin = new $.stickyNav(this, config);
                $(this).data('stickyNav', plugin);
            }
        });

    }
	
	$(window).on('load', function () {
		if ($("body").attr('data-stickynavtarget')) {
			var target = $('body').data('stickynavtarget')
			$(target).stickyNav();
		}
	});

})(jQuery)
