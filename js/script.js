// Accessible  -  Define values for keycodes
function keyCodes() {
    this.tab = 9;
    this.untab = 16;
    this.enter = 13;
    this.escape = 27;
    this.space = 32;
    this.end = 35;
    this.home = 36;
    this.left = 37;
    this.up = 38;
    this.right = 39;
    this.down = 40;
}


// Accessible - bootstrap accordion
function accessible_bootstrap_accordion() {
  var keys = new keyCodes();

  // Tabs nav links
  $(document).on('keydown', '.comp-information [data-toggle="collapse"]', function (e) {
    var currentBtn = $(this),
        currentCardWrapper = currentBtn.parents('.card');


    function next() {
      $(currentCardWrapper.next().find('[data-toggle="collapse"]').focus().attr('data-target')).collapse('show');
    }
    function prev() {
      $(currentCardWrapper.prev().find('[data-toggle="collapse"]').focus().attr('data-target')).collapse('show');
    }


    if (e.which === keys.down) {
      e.preventDefault(); // Disable arrow key scrolling
      $(currentBtn.attr('data-target')).collapse('hide');
      
      if (currentCardWrapper.next('.card').length) {        
        next();  
      } else {
        prev();
      }
      
    } else if (e.which === keys.up) {
      e.preventDefault(); // Disable arrow key scrolling
      $(currentBtn.attr('data-target')).collapse('hide');

      if (currentCardWrapper.prev('.card').length) {
        prev();
      } else {
        next();
      }
    }
  });
}


// document.ready
jQuery(document).ready(function ($) {  
  accessible_bootstrap_accordion();
});