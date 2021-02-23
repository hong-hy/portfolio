// header
$('header .menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('header .menu-item').toggleClass('active');
    $('header .logo').toggleClass('active');
});