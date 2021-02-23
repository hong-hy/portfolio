gsap.defaults({
    ease: 'power4',
    duration: 0.7
});

// top section
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