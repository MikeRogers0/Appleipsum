/* Author: Mike Rogers @Rogem002
*/

$(function(){
	// Set up page and declare variable were going to use often.
	$('select').uniform();
	var lipsum_levels = $('#lipsum_levels select');
	var lipsum_code = $('#lipsum_code');
	var full_lipsum = $('#full_lipsum p');
	var controls = $('#controls a');
	var theme_changer = $('a[data-theme]');
	
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
		
		
		clip.addEventListener('complete', function (client, text) {
		alert('copied');
			$(this).trigger('click');
		});
	});
	
	
	
	// Add functions for page.
	function update_lipsum(){
		lipsum_code.animate({height: (parseInt(lipsum_levels.val()) + 1) * 122+'px'});
		lipsum_code.html(''); // Clear the old lipsum text.
		for(var i=0;i<=lipsum_levels.val();i++){
			lipsum_code.append(full_lipsum[i]);
		}
	}
	
	function change_theme(){
		var new_theme = $(this).attr('data-theme');
		$('h1, h2').fadeOut(400, function(){
			$('header').attr('class', new_theme);
			$('h1, h2').fadeIn(700);
		});
		return false;
	}
	
	
	// Add listners
	lipsum_levels.bind('change', update_lipsum);
	theme_changer.bind('click', change_theme);
});