"use strict";
let studenti =[
    {
        'id': 213,
        'name': 'Marco della Rovere ',
        'grades': 78,
    },
    {
        'id': 110,
        'name': 'Paola Cortellessa',
        'grades': 96,
    },
    {
        'id': 250,
        'name': 'Andrea Mantegna',
        'grades': 48,
    },
    {
        'id': 145,
        'name': 'Gaia Borromini ',
        'grades': 74,
    },
    {
        'id': 196,
        'name': 'Luigi Grimaldello ',
        'grades': 68,
    },
    {
        'id': 102,
        'name': 'Piero della Francesca',
        'grades': 50,
    },
    {
        'id': 120,
        'name': 'Francesca da Polenta',
        'grades': 84,
    },
]
console.log(`Nomi di tutti gli stundenti:`)
 let maiuscolo = studenti.map((riga)=>{
    let studentiMaiuscolo = `${riga.id} ${riga.name.toUpperCase()} ${riga.grades}`;
    console.log(studentiMaiuscolo)
   return studentiMaiuscolo
 })

console.log(`Studenti con voti superiori al totale 70:`)
 let over70 = studenti.filter((voto)=>{if(voto.grades > 70)return true})
for(let dati in over70){
    let bravi = over70[dati]
    console.log(`${bravi.id} ${bravi.name.toUpperCase()} ${bravi.grades}`)
}

console.log(`Studenti con voti superiori al totale 70 e id superiore a 120`)
let idUp = studenti.filter((voto)=>{if(voto.id > 120 && voto.grades > 70)return true})
for(let dati in idUp){
    let bravi = idUp[dati]
    console.log(`${bravi.id} ${bravi.name.toUpperCase()} ${bravi.grades}`)
}