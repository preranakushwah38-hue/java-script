let correctUsername = "prerna"
let correctpassword = "1344u33"

let username = "prerna"
let password = "1344u33"

if(correctUsername === username && correctpassword === password){
    console.log("Both are correct")
}
else if(correctUsername != username && correctpassword === password){
    console.log("username is incorrect and password is correct")
}
else if(correctUsername === username && correctpassword != password){
    console.log("username is correct and password is incorrect")
}
else{
    console.log("Both are incorrect");
    
}