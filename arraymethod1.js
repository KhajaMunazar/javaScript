// .every() it checks all the values are true or not

let arr = [-5, 2, 4, 6, 8]
let check = arr.every((value) => value > 1)
console.log(check);

// .some() it checks only few values

let arr2 = [2, 5, -4, 1, 5, 8]
let output = arr2.some((value) => value < 0)
console.log(output);

// .flat()  it removes all the braces 
let arr3 = [1, 2, [2,5], [4,5]]
let final = arr3.flat();
console.log(final);

// .join() to join the elements
let name = ["K","H","A","J","A"]
let output2 = name.join("");
console.log(output2);

// indexOf()
let names = ["Hi", "Hello", "Bye"]
console.log(names.indexOf("Hi"));

// .fill()
let students = ["A1","B1","C1","D1"]
console.log(students.fill("F1"));