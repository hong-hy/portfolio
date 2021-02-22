// header
$('header .menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('header .menu-item').toggleClass('active');
    $('header .logo').toggleClass('active');
});

// section01
gsap.defaults({
    ease: 'power4',
    duration: 1
});

const mainVisualTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.top-sec',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true
    }
});

mainVisualTl.from('.top-sec .wrap-img li', {
    opacity: 0,
    stagger: {
        each: 0.5
    }
})
.from('.top-sec .txt', {
    opacity: 0,
    y: 100
})