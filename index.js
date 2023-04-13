const messages = [];

function writeCards(array) {
    for (let i = 0; i <array.length; i++) {
        messages[i] = `Thank you, ${array[i]}, for the wonderful surprise gift!`;
    }

    return messages;


} 

function countDown(posInt) {
    while (posInt > -1) {
        console.log(posInt--);
    }
}





































// const names = ["Guadalupe", "Ollie", "Aki"];
// const cards =[]

// function writeCards(names) {
//     for (let i = 0; i <names.length; i++) {
//         cards[i]=`Thank you, ${names[i]}, for the wonderful surprise gift!`
//     }
//     return cards;
//     }




// const gifts =["teddy bear", "drone", "doll"]

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)
//     }
//     return gifts; 
//     }

// wrapGifts(gifts);

// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }
























// Code your solutions in this file
// Guadalupe, Ollie, Aki
// Thank you, NAME, for the wonderful surprise gift! 











// function countDown(number) {
//     while (number >= 0) {
//         console.log(number--);
//     }   
//     }