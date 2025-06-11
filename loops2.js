//for...of - used to loop over the values of an array:
//it is mainly used in arrays
let fruits = ["Apple","Banana","Mango","Orange","Watermelon"]
for (let a of fruits) {
  console.log(a)
}





//for...in - used to loop over the keys (indexes) of an array and objects
//it is mainly used in objects

let person = {
  fname:"Khaja",
  age: 22,
  city:"HYD"
}

for (let key in person) {
  console.log(key,person[key])
}