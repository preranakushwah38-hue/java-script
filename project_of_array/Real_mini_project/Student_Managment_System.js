let students = ["prerana","Aman","Riya","Rahul","Neha"];
let marks = [85,72,91,28,76];

// let total_students = students.reduce((sum,students)=>sum + students,0);
let total_students = students.length
let total_marks =marks.reduce((sum,marks)=>sum + marks,0);
let highest = Math.max(...marks)
let topper_index = marks.indexOf(highest)
let topper = students[topper_index];

let lowest = Math.min(...marks)
let average = total_marks / students.length
if(marks.every(mark =>mark >= 33)){
    console.log("pass");
    
}
else{
    console.log("Fail");
    
}
// let fail = students.filter(marks => marks<33);

students.push("priya");
// let new_student = students.pop()

console.log("Total",total_students);

console.log("Highest no",highest);
console.log("Lowest no", lowest);
console.log("Average",average)
// console.log("Pass",pass);
// console.log("fail",fail);
console.log("Topper",topper);
console.log("Topper Marks:",highest);

console.log("new student add",students);
// console.log("student remove",students);





