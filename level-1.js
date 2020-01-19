// 1. Declare and initialise a variable with a string value.

var animal = "Wolf";

// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
    name: "Hussain",
    age: 26
}

// 3. Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = false; 

if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
}

// 4. Create an array of five numbers. Loop through the array and console log each value.

var numbers = [10, 5, 20, 30, 40];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.

for (var i = 15; i<= 25; i++) {
    console.log(i);
}

// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var i = 15; i<= 25; i++) {
    console.log(i);
}
if(i === 20) {
    console.log(i);
}

// 7. Create an array of two objects. Each object must have the same three properties (with different values):
 
var PersonsList = [
    {
      Name : "Bjørn Hansen",
      Age : 30,
      IsWorking : false,
    },
    {
      Firstname : "Maria Johansen",
      Age : 27,
      IsWorking : true,
    }
  ];
  
  PersonsList.forEach(person => {console.log(person.Age, person.IsWorking)})

// 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
// Inside the function, log the string "I don't like " together with the argument.
// Call the function and pass in a value of your choice.

function whatIDontlike(theFruit){
    console.log("I don't like " + theFruit);
  }

  whatIDontlike("banana");


// 9. Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.

function subtract(firstnumber, secondnumber) {
    var sum = secondnumber - firstnumber;
    console.log(sum);
}

subtract(5, 20);

// 10.Create an empty array. Create a function that accepts one argument. Inside the function, add the argument to the array. Call the function and pass in a value of any type.

var carList = [];

function addValueToList(item) {
    carList.push(item);
}

addValueToList("BMW");

