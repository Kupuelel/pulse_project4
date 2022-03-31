
// $(document).ready(function(){
//     $('.carousel__iner').slick({
//         speed: 300,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="image/goods/arrows/left.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="image/goods/arrows/right.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//         // slidesToShow: 4,
//         // slidesToScroll: 1,
//         // responsive: [
//         //     {
//         //       breakpoint: 1024,
//         //       settings: {
//         //         slidesToShow: 3,
//         //         slidesToScroll: 3,
//         //         infinite: true,
//         //         dots: true
//         //       }
//         //     },
//         //     {
//         //       breakpoint: 600,
//         //       settings: {
//         //         slidesToShow: 2,
//         //         slidesToScroll: 2
//         //       }
//         //     },
//         //     {
//         //       breakpoint: 480,
//         //       settings: {
//         //         slidesToShow: 1,
//         //         slidesToScroll: 1
//         //       }
//         //     }
//         //     // You can unslick at a given breakpoint now by adding:
//         //     // settings: "unslick"
//         //     // instead of a settings object
//         //   ]
//       });
//   });
              
const slider = tns({
    container: '.carousel__iner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: true
  });
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });