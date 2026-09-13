let students = ["Aman","Riya","Prerana","Rahul","Neha"]

let first = students[0]
let last = students[students.length - 1]
let total = students.length
let add = students.push("karan")
let remove = students.splice(students.indexOf("Neha"),1)
let check = students.includes("Prerana")


console.log("first student = ",first);
console.log("last student = ",last);
console.log("total student = ",total);
console.log("new student add = ",students);
console.log("aman student remove = ",first);
console.log("Check prerana is present",check);
