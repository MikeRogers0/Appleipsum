// from http://stackoverflow.com/a/987376
function selectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

var nextActive = null, currentActive = null;

$(document).ready(function(){
  $('.tabs a').on('click', function(e){
    e.preventDefault();
    $('.tabs a').removeClass('active');
    $(this).addClass('active');

    nextActive = $($(this).attr('href'));
    currentActive = $('.ipsum-box .active')

    // Cleanup current transitions
    $('#keynotes, #quotes').removeClass('fadeOut fadeIn');

    // Nicely hide the current active lipsum
    currentActive.addClass('fadeOut');
    currentActive.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      currentActive.removeClass('active');
      currentActive.removeClass('fadeOut');

      nextActive.addClass('active');
      nextActive.addClass('fadeIn');
    });

    nextActive.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      nextActive.addClass('active');
      nextActive.removeClass('fadeIn');
    });
  });

  $('#select_all').on('click', function(e){
    e.preventDefault();
    selectText($('.ipsum-box .active').attr('id'));
  });
});
