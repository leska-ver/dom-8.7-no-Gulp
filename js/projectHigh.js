document.addEventListener('DOMContentLoaded', function() {


  // Плавный скролл по якорям. В любое место можно кинуть.
  $(function(){
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $
    (target).offset().top},800);
      return false;
    })
  })


  
});