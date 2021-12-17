//Проверка ошибок console.log() 

document.addEventListener('DOMContentLoaded', () => {

  /*Клик БУРГЕР*/
  // $ предполагает использование библиотеки jQuery. В codepen-е без неё работает, в других местах без библиотеки jQuery не работает
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.toggle('is-active')
    }) 
  })
  
  $(document).ready(function() {
    $('#burger').click(function() {
      $(this).toggleClass('open');
    })
  })

})