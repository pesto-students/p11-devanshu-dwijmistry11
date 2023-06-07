// Protecting the Object 
// Create a JavaScript object called person with properties name, age, and email. Implement the 
// following: 
// • Make the name and email properties read-only. 
// • Make the age property write-only. 
// • Add a method called getAge() that returns the age property. 
// • Add a method called setAge() that accepts an age parameter and updates the age 
// property. 

// hint
// Protecting the Object 
// • Use Object.defineProperty() or any other Object methods to create read -only 
// and write-only properties. 


const person = {};

Object.defineProperty(person, 'name', {
  value: 'Dwij',
  writable: false
});

Object.defineProperty(person, 'age', {
  value: undefined,
  writable: true
});

Object.defineProperty(person, 'email', {
  value: 'dwijmistry11@gmail.com',
  writable: false
});

Object.defineProperty(person, 'getAge', {
  value: function() {
    return this.age;
  }
});

Object.defineProperty(person, 'setAge', {
  value: function(newAge) {
    this.age = newAge;
  }
});

// Testing the object
console.log(person.name);      // Output: Dwij
console.log(person.email);     // Output: dwijmistry11@gmail.com
console.log(person.getAge());  // Output: undefined

person.setAge(25);
console.log(person.getAge());  // Output: 25

person.age = 30;  // Writing to write-only property (age)
console.log(person.getAge());  // Output: 30 (age was updated)

person.name = 'Mistry';  // Attempting to write to read-only property (name)
console.log(person.name);  // Output: Dwij (name remains unchanged)





// JavaScript Prototype 
// Create a JavaScript object called Vehicle with properties make, model, and year. Implement the 
// following: 
// • Add a method called getDetails() that returns a string with the vehicle's make, model, 
// and year. 
// • Create a subclass called  Car that extends Vehicle with an additional property numDoors. 
// • Override the getDetails() method in Car to include the number of doors in the string 
// that is returned. 
// • Create an instance of Vehicle and an instance of Car, and call the getDetails() 
// method on each instance, logging the result to the console. 

// hint
// JavaScript Prototype 
// • Use the prototype property to add methods to a JavaScript object. 
// • Extend a base object by creating a subclass with the extends keyword. Override methods 
// from the base object by redefining them in the subclass. 


// Prototype
function Vehicle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year
}

Vehicle.prototype.getDetails = function(){
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
}

function Car(make, model, year, numDoors){
    Vehicle.call(this, make, model, year);
    this.numDoors = numDoors;
}

Car.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, Doors: ${this.numDoors}`;
  }

var vehicle = new Vehicle('Toyota', 'Camry', 2020);
var car = new Car('Ford', 'Mustang', 2022, 2);

console.log(vehicle.getDetails()); // Output: Make: Toyota, Model: Camry, Year: 2020
console.log(car.getDetails()); // Output: Make: Ford, Model: Mustang, Year: 2022, Doors: 2