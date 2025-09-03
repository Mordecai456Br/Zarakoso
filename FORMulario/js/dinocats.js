function gerarDinocards(dinos) {
    const container = document.querySelector('.dinocat-wrapper'); // <-- alterado

    dinos.forEach(dino => {
        const card = document.createElement('div');
        card.classList.add('dinocat-card');
        
        const divDinocat_ImgAndText = document.createElement('divDinocat_ImgAndText');
        divDinocat_ImgAndText.classList.add('dinocat-img-text')
        card.appendChild(divDinocat_ImgAndText);
        
        const img = document.createElement('img');
        img.classList.add('dinocat-img');
        img.src = dino.img;
        img.alt = dino.name;
        divDinocat_ImgAndText.appendChild(img);

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
        divDinocat_ImgAndText.appendChild(textDiv);

        const button = document.createElement('button');
        button.classList.add('dinocat-choose');
        button.textContent = 'Choose';
        card.appendChild(button);

        container.appendChild(card);
    });
}


const dinos = [
    { name: "Jhonnyssauro", description: "Jhonny versao dinossauro", img: "/FORMulario/assets/imgs/jhonnyssauro.jpg" },
    { name: "Pepessauro", description: "Pe de pano anos atras", img: "/FORMulario/assets/imgs/pepessauro.jpg" },
    { name: "Superlaserssauro", description: "Raios de laser pelos olhos", img: "/FORMulario/assets/imgs/superlaserssauro.jpg" },
    { name: "Escargotssauro", description: "Dinossauro sabor escargot", img: "/FORMulario/assets/imgs/escargotssauro.jpg" },
    { name: "Petliopatas", description: "Solta pétalas peludas", img: "/FORMulario/assets/imgs/petliopatas.jpg" },
    { name: "Gat-rex", description: "O Clássico T-Rex esta de volta.. minhando", img: "/FORMulario/assets/imgs/gat-rex.jpg" },
    { name: "José", description: "Raio ultrajante pela boca", img: "/FORMulario/assets/imgs/jose.jpg" },
    { name: "Espinogation", description: "Cuidado p nao se espetar", img: "/FORMulario/assets/imgs/espinogation.jpg" },
    { name: "Brisa", description: "Se protege da brisa com seu casaco", img: "/FORMulario/assets/imgs/brisa.jpg" },
    { name: "😓", description: "Chora no banho", img: "/FORMulario/assets/imgs/sadDinossaur.jpg" },
];

gerarDinocards(dinos);




