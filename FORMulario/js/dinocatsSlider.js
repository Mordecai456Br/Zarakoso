const track = document.getElementById('dinocat-track');

track.addEventListener('wheel', (e) => {
    e.preventDefault(); // impede a rolagem vertical padrão
    track.scrollLeft += e.deltaY * 3; // deltaY é quanto a roda moveu verticalmente
});



let currentIndex = 0;

function initSlider() {
    const track = document.getElementById('dinocat-track');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider(track);
        }
    });

    arrowRight.addEventListener('click', () => {
        const totalCards = track.children.length;
        const visibleCards = Math.floor(track.parentElement.offsetWidth / track.children[0].offsetWidth);
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateSlider(track);
        }
    });
}

function updateSlider(track) {
    const cardWidth = track.children[0].offsetWidth + 16; // inclui gap de 1rem
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

initSlider();