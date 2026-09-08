//String Analyzer ek string do:
//"javaScript is Awesome"
//Find: length, uppercase, lowercase, first character, last character, space ki count
let string = "JavaScript is Awesome"
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.toLowerCase());
console.log(string[0]);
console.log(string[string.length-1]);
let nospace = string.replaceAll(" ","")
let space;
space =  string.length - nospace.length
console.log(space);






