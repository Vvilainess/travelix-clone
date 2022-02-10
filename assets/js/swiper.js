const heroSlider = new Swiper(".swiper.hero__slider", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".hero-button__slider.swiper-btn-next",
        prevEl: ".hero-button__slider.swiper-btn-prev",
    },
});
const ctaSlider = new Swiper(".swiper.cta__slider", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".cta-button__slider.swiper-btn-next",
        prevEl: ".cta-button__slider.swiper-btn-prev",
    },
});
const testimonialsSlider = new Swiper(".swiper.testimonials__slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    speed: 800,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".testimonials-button-slider.swiper-btn-next",
        prevEl: ".testimonials-button-slider.swiper-btn-prev",
    },
    breakpoints: {
        280: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 34,
        },
    },
});
