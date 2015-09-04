(function($) {

    $(document).ready(documentReadyFunction);
    $(window).resize(windowResizeFunction);

    function documentReadyFunction() {
        // functions for document ready
        onPageLoadOrResize();
        onPageLoad();
    }

    function windowResizeFunction() {
        // functions for window resize
        onPageLoadOrResize();
    }

    function onPageLoad() {
    	
    }

	
    function onPageLoadOrResize () {
		var contentHeight = $('h1').height();
		var mainHeight = $('main').height();
		
		var space = mainHeight - contentHeight;
		var top = space/2;
		
		$('h1').css('top', top);
    }
    
})(jQuery);