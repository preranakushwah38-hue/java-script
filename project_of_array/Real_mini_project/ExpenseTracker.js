let expenses = [250,500,120,800,300]
let total_expense = expenses.reduce((sum,expense)=> sum + expense,0)
let highest = Math.max(...expenses);
let lowest = Math.min(...expenses);
let average = total_expense/expenses.length;
let budget = 3000;
if (total_expense <= budget){
    console.log("Within budget");
}
else{
    console.log("budget exceeded");  
}

console.log(total_expense);
console.log(highest);
console.log(lowest);
console.log(average);





