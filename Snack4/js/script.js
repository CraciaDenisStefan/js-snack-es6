"use strict";


function numeroCasuale(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const squadre = [
  { nome: 'Inter', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Milan', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Roma', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Lazio', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Brescia', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Napoli', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Bologna ', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Sampdoria', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Torino', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
  { nome: 'Juventus', punti: numeroCasuale(1, 90), FalliSubiti: numeroCasuale(1, 20) },
]


console.log(squadre)


let nomeFalli = squadre.map(({ nome, FalliSubiti }) =>({ nome, FalliSubiti }));


console.log(nomeFalli)