let mesaCamarada = [];

mesaCamarada.push("Gabriel");
let resto = ["Sabrina", "Carolines", "Ana banana", "Lavinia", "Julha Fiajho"]

resto.forEach(pessoa => {
    mesaCamarada.push(pessoa)
});

function matarImpostor() {
    console.log(`${resto} votou para eliminar ${mesaCamarada[0]}`)
    mesaCamarada.shift();
}

matarImpostor()
console.log(mesaCamarada)