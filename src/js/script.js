
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

$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass(' catalog__content_active').eq($(this).index()).addClass(' catalog__content_active');
  });

  //modal
  $('[data-modal=consultation]').on('click', function() {
    $('.overlay, #consultation').fadeIn(500);
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #order, #thanks').fadeOut(300);
  });
  

  $('.button_mini').each(function(i) {
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
      $('.overlay, #order').fadeIn(500);
    });
  });
});

//   $('.catalog-item__link').each(function(i) {
//     $(this).on('click', function(e) {
//       e.preventDefault();
//       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
//     })
//   })
//   $('.catalog-item__back').each(function(i) {
//     $(this).on('click', function(e) {
//       e.preventDefault();
//       $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//       $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
//     })
//   })

  function toggleSlide(item){
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
      })
    });
    
  

    function validateForms(form) {
      $(form).validate({
        rules:{
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true, 
            email: true
          }
        }, 
        messages: {
          name: {
            required: "Пожалуйста введите свое имя",
            minlength: jQuery.validator.format("Введиет {0} символа!")
          },
          phone: "Пожалуйста введите номер телефона",
          email: {
            required: "Пожалуйста введите свой email",
            email: "Неправельно введен email"
          }
        }
    });
    };
    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');

    $('input[name=phone]').mask("+375 (99) 999-99-99");

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");


        $('form').trigger('reset');
      });
      return false;
    });

    //smooth scroll

    $(window).scroll(function() {
      if($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      }else {
        $('.pageup').fadeOut();
      }
    });
    $("a.pageup").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
    new WOW().init();
  };

  

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

