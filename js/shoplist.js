/* ------------------back to top--------------- */

$(document).ready(function() {
    $('a.back_to_top').click(function(e){
      $('html, body').animate({scrollTop:0}, '1000');
      e.preventDefault();
    });
    
    $(window).scroll(function() {
      if($(this).scrollTop() > 300){
        $('.back_to_top').fadeIn('2000');
      } else {
        $('.back_to_top').fadeOut('500');
      }
    });
  });


  
/* ----------------RWD hamburger 區塊------------ */


let close = document.querySelector('.nav-close-icon');
let open = document.querySelector('.navbar-open-icon')
let menu = document.querySelector('.nav-main');
let navbar = document.getElementById('navbar-icon');
let navlink = document.getElementsByClassName('nav-links')[0];
let sticky = navbar.offsetTop;

close.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'block';
});

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'none';

});