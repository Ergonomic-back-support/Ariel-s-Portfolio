document.addEventListener('scroll', function() {
    const imageContainer = document.querySelector('.image-container');
    const rect = imageContainer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
        imageContainer.style.opacity = 1;
    } else {
        imageContainer.style.opacity = 0;
    }
});
