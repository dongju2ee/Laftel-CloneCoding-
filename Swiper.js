var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5, // Show 5 slides at a time
    spaceBetween: 10, // Space between slides
    navigation: {
        nextEl: '#nextBtn',
        prevEl: '#prevBtn',
    },
});

// Previous button click event listener
document.getElementById('prevBtn').addEventListener('click', function () {
    swiper.slidePrev(); // Move to the previous slide
});

// Next button click event listener
document.getElementById('nextBtn').addEventListener('click', function () {
    swiper.slideNext(); // Move to the next slide
});
