(function($){
	$.fn.dblkeydown = function(keyCode, callback){
		return $(this).keydown(function(e){
			if (e.which == keyCode) {
				var lastTime = $(this).data('dblkeydown_' + keyCode);
				var curTime = new Date().getTime();
				if (lastTime && (curTime - lastTime < $.fn.dblkeydown.maxInterval)) {
					$(this).data('dblkeydown_' + keyCode, null);
					callback.call(this);
				}else{
					$(this).data('dblkeydown_' + keyCode, curTime);
				};
			};
		});
	};
	$.fn.dblkeydown.maxInterval = 500;
})(jQuery);
