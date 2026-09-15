let movies = ["Avatar","KGF","Dangal","3 Idiots"];
let ticketPrice = 200;
let tickets = 4;

console.log(movies);
console.log(ticketPrice);
console.log(tickets);
let subtotal = ticketPrice * tickets
console.log("subtotal",subtotal);
let discount;

if(tickets >= 10){
    discount = subtotal * 20 / 100
}
else if(tickets >= 5){
    discount = subtotal * 10/100
}
else{
    discount = 0
}
let final_bill = subtotal - discount;
if(final_bill > 1000){
    console.log("free Popcorn");
}
else{
   console.log("No free Popcorn");
}


