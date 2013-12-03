(function($) {

	$.stickyElem = function(element, config) {

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

			console.log(stickyPoint);
			console.log(stickyHeight);

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
			plugin.destroy();
			plugin.init();
		});

		plugin.init();

	};

	$.fn.stickyElem = function(config) {

		return this.each(function() {
			if (undefined == $(this).data('stickyElem')) {
				var plugin = new $.stickyElem(this, config);
				$(this).data('stickyElem', plugin);
			}
		});

	};

	$(window).on('load', function () {
		if ($("body").attr('data-stickyelemtarget')) {
			var target = $('body').data('stickyelemtarget');
			$(target).stickyElem();
		}
	});

})(jQuery);