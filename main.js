document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const images = product.querySelectorAll('.product-images img');
        let currentIndex = 0;
        let interval;

        // Показати перше зображення при завантаженні сторінки
        images[currentIndex].classList.add('active');

        // Функція для зміни зображень
        function changeImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        // Запуск зміни зображень через 3 секунди при наведенні
        product.addEventListener('mouseenter', function() {
            interval = setInterval(changeImage, 3000);
        });

        // Зупинка зміни зображень при виведенні курсору
        product.addEventListener('mouseleave', function() {
            clearInterval(interval);
            images[currentIndex].classList.remove('active'); // Скидання активного зображення
            currentIndex = 0;
            images[currentIndex].classList.add('active'); // Встановити перше зображення як активне
        });
    });
});
