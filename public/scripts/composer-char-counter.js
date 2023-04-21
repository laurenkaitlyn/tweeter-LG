$(document).ready(function() {
  $('#tweet-text').keyup(function() {
    console.log('HI');
    const maxChar = 140;
    const counterVal = $(this).val().length;
    const currentVal = maxChar - counterVal;
    console.log(currentVal);

    let counter = $('.counter');
    console.log(counter);
    counter[0].value = currentVal;

    if (currentVal < 0) {
      counter.addClass('text-red');
    } else {
      counter.removeClass('text-red');
    }

  });

});