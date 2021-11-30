//Haz un bucle y muestra por consola todos aquellos valores 
//del array que incluyan la palabra "Camiseta".

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];

function FindWord(param) {

for (let i = 0; i < param.length; i++) {
    if (param[i].includes("Camiseta")) {
        console.log(param[i])
    }
}

}

FindWord(products)

