const tracks = document.querySelectorAll('.dinocat-track');

tracks.forEach(track => {
    track.addEventListener('wheel', (e) => {
        e.preventDefault(); // impede a rolagem vertical padrão
        track.scrollLeft += e.deltaY * 3; // deltaY é quanto a roda moveu verticalmente
    });
})



