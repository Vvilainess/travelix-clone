const heroSlider = new Swiper(".swiper.hero__slider", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".hero-button__slider.swiper-button-next",
        prevEl: ".hero-button__slider.swiper-button-prev",
    },
});
const ctaSlider = new Swiper(".swiper.cta__slider", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: ".cta-button__slider.swiper-button-next",
        prevEl: ".cta-button__slider.swiper-button-prev",
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
        nextEl: ".testimonials-button-slider.swiper-button-next",
        prevEl: ".testimonials-button-slider.swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
