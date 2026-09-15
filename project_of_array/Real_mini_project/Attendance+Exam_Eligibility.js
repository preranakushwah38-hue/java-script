let studentName = "prerana";
let totalClasses = 100;
let attendedClasses = 82
let marks = [78, 85,91,72,88]
let attenedance = 82 * 100/100
console.log(`attendance ${attenedance}%`);
let tmarks = marks.reduce((marks,sum) =>marks + sum,0)
console.log("total marks = ",tmarks);
let average = tmarks/marks.length
let highest = Math.max(...marks)
let lowest = Math.min(...marks)
console.log(average);
console.log(highest);
console.log(lowest);



if(attenedance >= 75 && average >= 40){
    console.log("Eligible for exam");
}
else{
    console.log("Not Eligible");
}

if(average >= 90){
    console.log("Excellent");
}
else if(average >= 75){
    console.log("Very Good");
}
else if(average >= 60){
    console.log("Good");
}
else{
    console.log("Needs Improvement");
}


