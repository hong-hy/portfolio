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
});