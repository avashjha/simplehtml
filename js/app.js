 $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel').carousel();
      $('.parallax').parallax();
      
     // $('.scrollspy').scrollSpy();
     
      $('.modal').modal();
     
  });



  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
    
  });