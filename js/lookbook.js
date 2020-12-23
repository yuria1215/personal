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


/* ----------------lookbook_box2 輪播圖------------ */

// $(document).ready(function () {
//   $('#lookbook2_img').lightSlider({
//     pager: false,
//     auto: true,
//     item: 2,
//     loop: true,
//     slideMove: 1,
//     easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//     speed: 600,
//     responsive: [
//       {
//         breakpoint: 575,
//         settings: {
//           item: 1,
//           pager: true,
//           loop: true,
//           slideMove: 1,
//           easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
//           speed: 600
//         }
//       }
//     ]
//   });
// });

