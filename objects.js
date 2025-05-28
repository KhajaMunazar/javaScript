//Read
//Write
//Update
//Delete

//All these are done in object

let person = {
    fname:"rahul",
    lname:"naik",
    age:17,
    email:"rahul17@gmail.com",
    isAlive:true,
    college:"GIET"
}
console.log(person);

person.contact = "+91892554343" //add
console.log(person)

person.age = 30 ; //update
console.log(person);

delete person.age
console.log(person);