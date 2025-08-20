let mesaCamarada = [];

mesaCamarada.push("Gabriel");
let resto = ["Sabrina","Carolines","Ana banana", "Lavinia", "Julha Fiajho"]

resto.forEach(pessoa => {
    mesaCamarada.push(pessoa)
});

matarImpostor(){
mesaCamarada.shift();
}
console.log(mesaCamarada)