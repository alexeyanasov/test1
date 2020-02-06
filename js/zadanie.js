$(document).ready(function () {

    $('[data-lang-resault]').click(function () {
      $('[data-lang-list]').toggleClass('langs-show');
      $('.row-select').toggleClass('arrow-flip');
    });
  
    $('[data-lang-item]').click(function () {
      var thisLang = $(this).text();
  
      $('[data-lang-list]').removeClass('langs-show');
      $('.row-select').removeClass('arrow-flip');
      $('[data-lang-resault]').text(thisLang);
    });
  
});