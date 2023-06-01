"use strict";
let vip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'] 

let tavoloVip = vip.map((nomeVip, i) =>{
    let posto ={
        'nometavolo': 'VIP',
        'nome' : nomeVip,
        'posto': (i++)+1,
    }
    return posto
 
})

for(let dati in tavoloVip){
    console.log(`Tavolo: ${tavoloVip[dati].nometavolo} Nome: ${tavoloVip[dati].nome} Posto: ${tavoloVip[dati].posto}`)
   }
 