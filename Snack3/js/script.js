"use strict";

const biciclette = [
    { nome: 'Bici1', peso: 9 },
    { nome: 'Bici2', peso: 4 },
    { nome: 'Bici3', peso: 6 },
    { nome: 'Bici4', peso: 8 },
    { nome: 'Bici5', peso: 10 },
]



let pesoMinore = biciclette[0];

biciclette.forEach((bici) => {
    if (bici.peso < pesoMinore.peso) {
      pesoMinore = bici;
    }
  });

  let {nome, peso} = pesoMinore

console.log(`La bici con il peso minore è ${nome} e pesa: ${peso}kg`)




