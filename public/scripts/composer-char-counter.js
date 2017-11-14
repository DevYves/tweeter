
$(document).ready(function() {
var textArea = $('.textarea');
var counter = $('.counter');
var maxLength = 140;
counter.text(maxLength);
textArea.keydown(function(){
  var characters = $(this).val().length+1;
  counter.text(maxLength- characters);
  if (characters > maxLength) {
    counter.addClass('makeRed');
   } else {
    counter.removeClass('makeRed');
   }

});
});
