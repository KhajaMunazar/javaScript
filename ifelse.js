//condition based checking variables

let age = 19;

if (age > 18) {
  console.log("You can Drive")
} else  {
  console.log("You cannot Drive")
}

let isAlive = true;

if (isAlive == false) {
  console.log("I am Alive")
} else {
  console.log("I am Dead")
}

const marks = 82;
let grade;

if (marks >= 90) {
  grade = 'A+';
} else if (marks >= 80) {
  grade = 'A';
} else if (marks >= 70) {
  grade = 'B';
} else if (marks >= 60) {
  grade = 'C';
} else if (marks >= 50) {
  grade = 'D';
} else {
  grade = 'f';
}

console.log(grade);