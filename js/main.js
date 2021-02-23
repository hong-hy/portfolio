// header
$('header .menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('header .menu-item').toggleClass('active');
    $('header .logo').toggleClass('active');
});

// section01
gsap.defaults({
    ease: 'power4',
    duration: 0.7
});

const mainVisualTl = gsap.timeline();

mainVisualTl.from('.top-sec .wrap-img li', {
    opacity: 0,
    y: 30,
    stagger: {
        each: 0.3
    }
})
.from('.top-sec .txt', {
    opacity: 0,
    y: 100
});