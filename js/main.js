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

    $('section').each(function(){
        var slick_slider = $(this).find('.slick_slider');
        var slick_prev = $(this).find('.slick_prev');
        var slick_next = $(this).find('.slick_next');
        var slick_item = $(slick_slider).find('.slick_item');
        $(slick_prev).click(function(){
            $(slick_slider).slick('slickPrev');
        });
        $(slick_next).click(function(){
            $(slick_slider).slick('slickNext');
        });
        if(slick_item.length > 4){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && slick_item.length > 1){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && slick_item.length > 2){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && slick_item.length > 3){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }
    });


    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });





});


