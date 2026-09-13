let marks = [88,39,65,98,81,96,26]

let Total = marks.reduce((sum,num)=>sum + num ,0);
// console.log(Total);

let average = Total/marks.length

let Highest = Math.max(...marks)

let Lowest = Math.min(...marks)


let fail = marks.filter(mark => mark < 33);


console.log("total =",Total);
console.log("Average =",average);
console.log("Highest no =",Highest);
console.log("Lowest no =",Lowest);

if(marks.every(mark  => mark >= 33)){
    console.log("pass")
}
else{
    console.log("fail");
}

console.log("fail marks =",fail);

console.log("kitne fail hue h = ",fail.length);






