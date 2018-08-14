$(document).ready(function(){


    $('.mobile_btn').click(function () {
        $(this).toggleClass('active');
        $('.mobile_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });



    $('.catalog_btn').on('click', function(){
        if($('.catalog_nav.d_none').is(':visible')){
            $('.catalog_nav.d_none').slideUp();
        }else{
            $('.catalog_nav.d_none').slideDown();
        }
    });


    $('.js-example-basic-single').select2();

    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




   /* var header_height = $('header').height();
    $('header').next().css({'margin-top': header_height+'px'});
    $(window).scroll(function(){
        if ($(this).scrollTop() > header_height) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });*/


    if($('.clients_slider > div').length > 4){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow:4,
            slidesToScroll: 1,
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }else if($(window).innerWidth() < 575 && $('.clients_slider > div').length > 1){
        $('.clients_slider').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('.scrolltop').fadeIn();
            } else {
                $('.scrolltop').fadeOut();
            }
        });
        $('.scrolltop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });





});


