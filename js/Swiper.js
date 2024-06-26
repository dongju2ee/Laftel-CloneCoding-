document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderImages = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function slide() {
        currentIndex++;
        if (currentIndex >= sliderImages.length) {
            currentIndex = 0;
        }
        const offset = currentIndex * -20; // -20vw씩 이동
        sliderWrapper.style.transform = `translateX(${offset}vw)`;
    }

    setInterval(slide, 2000); // 2초마다 슬라이드 이동
});
