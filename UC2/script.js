const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselContent = document.querySelector('.carousel-content');

prevButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carouselContent.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });

    // Fechar o menu ao clicar fora dele (opcional)
    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            sideMenu.classList.remove('open');
        }
    });
});
