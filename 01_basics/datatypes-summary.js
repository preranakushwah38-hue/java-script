// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId)


// +++++++++++++++++++++++++++++++++


//  Stack(Primitive), Heap(non - Primitive)


let myChannelname = "motivationvideobyprerana"
let anothername = myChannelname
anothername = "prerana"
console.log(anothername);
console.log(myChannelname);


let user1 = {
    email : "user@googl.com" ,
    upi : "user@ybl" 
}

let user2 = user1

user2.email = "prerana@google.com"
console.log(user2.email)
console.log(user1.email);


