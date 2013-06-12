(function($) {

	$.stickyNav = function(element, config) {
	
		var $element = $(element),
             element = element;
		var plugin = this;
		
		var defaults = {

		};
		var config = $.extend(defaults, config);
		
		var stickyPoint;
		var stickyHeight;
		var nextPadding;
		var calc;
		
		plugin.init = function() {

			stickyPoint = $element.offset().top;
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
		
		$(window).resize(function() {
			plugin.destroy();
			plugin.init();
		});

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
