/* ------------------back to top--------------- */

$(document).ready(function () {
  $('a.back_to_top').click(function (e) {
    $('html, body').animate({ scrollTop: 0 }, '1000');
    e.preventDefault();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
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

close.addEventListener('click', function () {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'block';
});

open.addEventListener('click', function () {
  menu.classList.toggle('close');
  open.classList.toggle('nodisplay');
  navbar.style.display = 'none';

});


/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(function(){
$(".nav-close-icon").on("click", function(){
$(".nav-main").toggleClass("-on");
});
});  */

/* ----------------style people 輪播圖------------ */

$(document).ready(function () {
  $('#style_rwd').lightSlider({
    pager: false,
    auto: true,
    item: 3,
    loop: true,
    slideMove: 1,
    // slideMargin: 15,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          item: 1,
          pager: true,
          loop: true,
          slideMove: 1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed: 600
        }
      }
    ]
  });
});


/* ----------------shoplist 輪播圖------------ */

$(document).ready(function () {
  $('#shop_box').lightSlider({
    item: 3,
    auto: true,
    loop: true,
    slideMove: 1,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    adaptiveHeight: false,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          adaptiveHeight: false,
          item: 2,
          pager: true,
          loop: true,
          slideMove: 1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed: 600
        }
      },


      {
        breakpoint: 575,
        settings: {
          adaptiveHeight: false,
          item: 1,
          pager: true,
          loop: true,
          slideMove: 1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed: 600
        }
      }


    ]

  });
});




/* ----------------lookbook 輪播圖------------ */

$(document).ready(function () {
  $('#lookbook_img').lightSlider({
    pager: false,
    auto: true,
    item: 3,
    loop: true,
    slideMove: 1,
    // slideMargin: 15,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          item: 1,
          pager: true,
          loop: true,
          slideMove: 1,
          easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
          speed: 600
        }
      }
    ]
  });
});
