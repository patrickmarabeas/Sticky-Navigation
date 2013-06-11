Sticky Navigation
=================

jQuery plugin for sticky header or navigation

For something new, I went down the Twitter Bootstrap path and changed how the user calls/defines the plugin. Rather than calling the plugin specifically the user simply needs to add a data attribute to the body tag stating the element they want to make sticky.

	<body data-stickynavtarget="#navigation_area">
	
It can also be called with:

	$(document).ready(function() {
		
		$("#navigation_area").stickyNav();
		
	});
	
Can be destroyed and initiated with:

	$("#navigation_area").data('stickyNav').destroy();
	$("#navigation_area").data('stickyNav').init();
