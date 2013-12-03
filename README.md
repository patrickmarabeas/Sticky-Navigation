# Sticky Element

### jQuery plugin for sticky elements

Can be applied to an element via data attributes:

	<body data-stickyelemtarget="#navigation_area">
	
Or via the usual:

	$(document).ready(function() {
		
		$("#navigation_area").stickyElem();
		
	});
	
Can be destroyed, initiated and reset with:

	$("#navigation_area").data('stickyElem').destroy();
	$("#navigation_area").data('stickyElem').init();
	$("#navigation_area").data('stickyElem').reset();