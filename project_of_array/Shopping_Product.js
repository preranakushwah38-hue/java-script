let product = ["T-shirt","Jeans","Shoes","Bag","Watch"]

//first product 
let first_product = product[0]
let last_product = product[product.length - 1]
let total_product = (product.length)
let new_product = product.push("Laptop")
let new_product2 = product.splice(product.indexOf("Watch"),1)

let check_product = product.includes("Shoes")

console.log("first product",first_product);
console.log("last product",last_product);
console.log("total product",total_product);

console.log("new product",product);
console.log("Remove watch", new_product2);


console.log(check_product);
