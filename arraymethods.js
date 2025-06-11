let fruits = ["Apple","Mango","Orange"]
// Index         0       1       2
console.log(fruits);
//.push (adds the element at last)
fruits.push("Banana")
fruits.push("Watermelon")
console.log(fruits);

//unshift addsat first
fruits.unshift("Suhail")
console.log(fruits);

fruits.shift() //removes element from first
fruits.pop() //removes element from last
console.log(fruits);

//.map and .forEach()

let numbers = ["10","20","30","40"];
numbers.forEach((value)=> {
  console.log(value)
});

// forEach is used to print all the elements in array
// forEach does not return value

let num1 = [5, 12, 8];
// .find ==> returns the first match based on condition.

num1.find((value) => {
  console.log(value > 5);
});

// .includes()

let arr = [1,2,3,4,5]
let check = arr.includes(3) //true
console.log(check)

let arr1 = [0,7,5,2,8,1]
//to sort the array  (ascending to descending)console.log(arr1.sort())
//to reverse the array  (descending to ascending)  after sorting
console.log(arr1.reverse());

let num2 = [1,5,20,11,80,53,23,1053]
console.log(num2.sort((a,b) => a - b));
console.log(num2.sort((a,b) => b - a));