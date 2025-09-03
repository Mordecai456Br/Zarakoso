function gerarDinocards(dinos) {
    const container = document.getElementById('dinocat-slider');

    dinos.forEach(dino => {
        // Cria o card principal
        const card = document.createElement('div');
        card.classList.add('dinocat-card');

        // Imagem
        const img = document.createElement('img');
        img.classList.add('dinocat-img');
        img.src = dino.img;
        img.alt = dino.name;
        card.appendChild(img);

        // Texto
        const textDiv = document.createElement('div');
        textDiv.classList.add('dinocat-text-div');

        const name = document.createElement('p');
        name.classList.add('dinocat-name');
        name.textContent = dino.name;

        const description = document.createElement('p');
        description.classList.add('dinocat-description');
        description.textContent = dino.description;

        textDiv.appendChild(name);
        textDiv.appendChild(description);
        card.appendChild(textDiv);

        // Botão
        const button = document.createElement('button');
        button.classList.add('dinocat-choose');
        button.textContent = 'Choose';
        card.appendChild(button);

        // Adiciona o card no container
        container.appendChild(card);
    });
}
