// header
$('header .menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('header .menu-item').toggleClass('active');
    $('header .logo').toggleClass('active');
});

// top button
$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > 200){
        $('.top-btn').addClass('active');
    } else {
        $('.top-btn').removeClass('active');
    };

    $('.top-btn').on('click', function() {   
        $('html, body').stop().animate({
            scrollTop:0
        });
    });

    var docH = $(document).height();
    var winH = $(this).height();
    var footer = $('footer').outerHeight();
    var test = (docH-winH) - footer/2;

    if (scrollTop > test) {
        $('.top-btn').addClass('end');
    } else {
        $('.top-btn').removeClass('end');
    }
});