/* Author: Mike Rogers @Rogem002
*/

$(function(){
	// Set up page and declare variable were going to use often.
	$('select').uniform();
	$('#lipsum_code p, #lipsum_code h3').iPsum(); // If it's a p, it will use a keynote. For h3, it will use quotes.
	
	var lipsum_levels = $('#lipsum_levels select');
	var lipsum_code = $('#lipsum_code');
	var controls = $('#controls a');
	var theme_changer = $('a[data-theme]');
	var ipsum_changer = $('a[data-ipsum]');
	var ipsum_type = 'p';
	
	// The clipboard stuff is a pain, so I used http://code.google.com/p/zeroclipboard/
	var clipboard_data = null;
	
	controls.each(function(){
		var clip = new ZeroClipboard.Client();
		clip.setHandCursor( true );
		clip.glue($(this).attr('id'));
		if($(this).attr('data-type') == 'html'){
			clip.setText( lipsum_code.html());
		}else{
			clip.setText( lipsum_code.text());
		}
		clip.elm = $(this); // Add $(this) to the clip, so we can run on it.
		
		clip.addEventListener( 'onComplete', function(client){
			if(client.elm.attr('data-type') == "html"){
				client.elm.text('Copied HTML!');
			} else {
				client.elm.text('Copied Text!');
			}
			setTimeout(function(){client.elm.trigger('reset');},2000);
		});
	});
	
	
	
	// Add functions for page.
	function update_lipsum(){
		var lipsum_levels_var = parseInt($('#lipsum_levels select').val()) + 1;
		
		if($('#lipsum_code > *').length == lipsum_levels_var){
			return true;
		}
		if($('#lipsum_code > *').length > lipsum_levels_var){
			$('#lipsum_code > *:last').slideUp(300, function(){$(this).remove(); return update_lipsum();});
			return true;
		}
		if($('#lipsum_code > *').length < lipsum_levels_var){
			if(ipsum_type == 'p'){
				lipsum_code.append('<p style="display:none;">'+$.fn.iPsum('getIpsumText', ($('#lipsum_code > *').length))+'</p>');
			}else{
				lipsum_code.append('<h3 style="display:none;">'+$.fn.iPsum('getIpsumQuote', ($('#lipsum_code > *').length))+'</h3>');
			}
			$('#lipsum_code > *:last').slideDown(500, function(){
				return update_lipsum();
			});
			return true;
		}
		
		return false;
	}
	
	function change_theme(){
		var new_theme = $(this).attr('data-theme');
		var parent_li = $(this).parent('li');
		
		$('footer li').removeClass('current');

		$('h1, h2').fadeOut(400, function(){
			$('header').attr('class', new_theme);
			$('h1').fadeIn(700);
			parent_li.addClass('current');
		});
		return false;
	}
	
	function info_box_control(){
		var info_box_ds = $($(this).attr('data-show'));
		if(info_box_ds.is(":visible") === false){
			$(info_box_ds).fadeIn();
			return false;
		}
		info_box_ds.hide();
		return false;
	}
	
	function swap_lipsum(){
		ipsum_type = $(this).attr('data-ipsum');
		
		$('#lipsum_code > *').fadeOut(300, function(){
			$('#lipsum_code').html(''); // Clear the html.
			update_lipsum(); // Reset the ipsum
		});
		
		return false;
	}
	
	// Add listners
	lipsum_levels.bind('change', update_lipsum);
	theme_changer.bind('click', change_theme);
	$('a[data-show]').bind('click', info_box_control);
	ipsum_changer.bind('click', swap_lipsum);
	controls.bind('reset',function(){$(this).text($(this).attr('data-reset'));});
	
	// Set up the dock
	//library
	function distance(x0, y0, x1, y1) {
		var xDiff = x1-x0;
		var yDiff = y1-y0;
		
		return Math.sqrt(xDiff*xDiff + yDiff*yDiff);
	}
	
	var proximity = 180;
	var iconSmall = 56, iconLarge =96; //css also needs changing to compensate with size
	var iconDiff = (iconLarge - iconSmall);
	var mouseX, mouseY;
	var dock = $("#dock");
	var animating = false, redrawReady = false;
	
	//below are methods for maintaining a constant 60fps redraw for the dock without flushing
	$(document).bind("mousemove", function(e) {
		if (dock.is(":visible")) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		
			redrawReady = true;
			registerConstantCheck();
		}
	});
	
	function registerConstantCheck() {
		if (!animating) {
			animating = true;
			
			window.setTimeout(callCheck, 15);
		}
	}
	
	function callCheck() {
		sizeDockIcons();
		
		animating = false;
	
		if (redrawReady) {
			redrawReady = false;
			registerConstantCheck();
		}
	}
	
	//do the maths and resize each icon
	function sizeDockIcons() {
		dock.find("li").each(function() {
			//find the distance from the center of each icon
			var centerX = $(this).offset().left + ($(this).outerWidth()/2.0);
			var centerY = $(this).offset().top + ($(this).outerHeight()/2.0);
			
			var dist = distance(centerX, centerY, mouseX, mouseY);
			
			//determine the new sizes of the icons from the mouse distance from their centres
			var newSize =  (1 - Math.min(1, Math.max(0, dist/proximity))) * iconDiff + iconSmall;
			$(this).find("a").css({width: newSize});
		});
	}
	
	// Make the about us box dragable
	$("#about_appleipsum").draggable({  
        scroll: false,
        handle: 'ul'
	 });
	 
	 // Fade in the document nicely.
	 $(document).ready(function(){
		$('#main').animate({opacity: 1}, 700);
		$('h1,#dock').animate({opacity: 1}, 1000);
	});
});