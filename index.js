// Code your solutions in this file
// Guadalupe, Ollie, Aki
// Thank you, NAME, for the wonderful surprise gift! 

const names = ["Guadalupe", "Ollie", "Aki"];
const cards =[]

function writeCards(names) {
    for (let i = 0; i <names.length; i++) {
        cards[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
    }
    return cards;
    }

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }   
    }