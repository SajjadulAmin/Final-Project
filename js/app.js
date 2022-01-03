$(function () {

    //    venobox for video

    $('.venobox').venobox();


    //    audio plugin

    $('audio').audioPlayer({
        strVolume: '',
    });
    $(".close").on('click', function () {
        $('audio').audioPlayer({
            strPlay: '0',
        });
        $(".audioplayer").fadeOut();
        $(".audioplayer-playing").fadeIn();
    });
    

    //    video audio slider part

    $('.video-sld-left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        dots: true,
        arrows: false,
        autoplay: true,
        asNavFor: '.video-sld-right',
        autoPlay: true,
        responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                    
                ]

    });


    $('.video-sld-right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        asNavFor: '.video-sld-left',
        speed: 1000,
        responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                    }
                    
                ]

    });

    //    counter
    
    $('.counter').counterUp({
        delay: 10,
        time: 8000
    });
    

});