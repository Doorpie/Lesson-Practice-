$(document).ready(function(){

    //  Show/Hide basket-show

    $('.basket-bonus__basket').on('mousemove', function(){
        $('.basket-bonus__basket-show').show();
    });
    
    $('.basket-bonus__basket-show').on('mousemove', function(){
        $('.basket-bonus__basket-show').show();
    });

    $('.basket-bonus__basket-show').on('mouseleave', function(){
        $('.basket-bonus__basket-show').hide();
    });

    $('.basket-bonus__basket').on('mouseleave', function(){
        $('.basket-bonus__basket-show').hide();
    });

    //  Show/Hide bonus-show

    $('.basket-bonus__bonus').on('mousemove', function(){
        $('.basket-bonus__bonus-show').show();
    });

    $('.basket-bonus__bonus-show').on('mousemove', function(){
        $('.basket-bonus__bonus-show').show();
    });

    $('.basket-bonus__bonus-show').on('mouseleave', function(){
        $('.basket-bonus__bonus-show').hide();
    });
 
    $('.basket-bonus__bonus').on('mouseleave', function(){
        $('.basket-bonus__bonus-show').hide();
    });

    // added slider
    
    $('.slider__wrap').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
        dotsClass: 'slider-dots',
        adaptiveHeight: true,
        mobileFirst: true,
    });


    
    $(window).resize(function () {
        let widthWind = $(this).width();
    
        // swich slider img

        if (widthWind <= 768) {
           $('.slider__img1').attr("src", "./img/slider/slider_bg2.jpg");
           $('.slider__img2').attr("src", "./img/slider/slider_bg4.jpg");
        }

        else{
            $('.slider__img1').attr("src", "./img/slider/slider_bg1.jpg");
            $('.slider__img2').attr("src", "./img/slider/slider_bg3.jpg");
        }

        if (widthWind <= 992) {
            $('.basket-bonus__basket').on('mousemove', function(){
                $('.basket-bonus__basket-show').hide();
            });
         }
    });
    
    // popup call-order
     //open

    $('.call-order__text-link').on('click', function(){
        $('.call-order-modul__overlay').show();
        $('.call-order-modul__popup').show();

    });

    // close

    $('.popup__close, .popup-form__btn--close').on('click', function(){
        $('.call-order-modul__overlay').hide();
        $('.call-order-modul__popup').hide();
    });

    //popup account
        //oprn

    $('.account__link').on('click', function(){
        $('.account-modul__overlay').show();
        $('.account-modul__popup').show();
    });

        //close
      
        $('.popup__close').on('click', function(){
            $('.account-modul__overlay').hide();
            $('.account-modul__popup').hide();
        });
});