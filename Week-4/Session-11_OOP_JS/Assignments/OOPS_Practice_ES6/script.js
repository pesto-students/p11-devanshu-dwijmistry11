
// Section 1 - Inheritance: 
// • Create a class called Vehicle with properties make, model, year, color, and a method 
// drive(). 
// • The drive() method should log "Driving {make} {model}." to the console. 
// • Create a subclass called Car that extends Vehicle and adds a property numSeats. 
// • Create a subclass called RideShareCar that extends Car and adds a property 
// isAvailable. 

class Vehicle{
    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`Driving {make} {model}.`)
    }
}

class Car extends Vehicle{
    constructor(make, model, year, color, numSeats){
        super(make, model, year, color);
        this.numSeats = numSeats;
    }
}

class RideShareCar extends Car{
    constructor(make, model, year, color, numSeats, isAvailable){
        super(make, model, year, color, numSeats);
        this.isAvailable = isAvailable;
    }
}

// Section 2 - Polymorphism: 
// Create a class called Shape with a method calculateArea(). Then, create three subclasses 
// called Rectangle, Triangle, and Circle, each of which extends Shape. 
// Each subclass should override the calculateArea() method as follows: 
// • Rectangle should accept width and height parameters and calculate the area as  width 
// * height. 
// • Triangle should accept base and height parameters and calculate the area as  (base * 
// height) / 2. 
// • Circle should accept radius parameter and calculate the area as Math.PI * radius * 
// radius. 
// Finally, create instances of each subclass and call the calculateArea() method on each 
// instance, logging the result to the console. 

class Shape{
    calculateArea(){
        // will be override by the sub classes
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return (this.width*this.height);
    }
}

class Triangle extends Shape{
    constructor(base, height){
        super();
        this.base = base;
        this.height = height;
    }
    calculateArea(){
        return (this.base*this.height)/2;
    }
}

class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

const R = new Rectangle(10,20);
const T = new Triangle(10,20);
const C = new Circle(10);

console.log(R.calculateArea());
console.log(T.calculateArea());
console.log(C.calculateArea());

// Section 3 – Abstraction and encpasulation: 
// Create a class called BankAccount with properties accountNumber, balance, and 
// accountHolderName. Then, create two subclasses called CheckingAccount and 
// SavingsAccount, each of which extends BankAccount. 
// Make the accountNumber, balance, and accountHolderName properties private by using the # 
// symbol before their names. 
// Implement the deposit() and withdraw() methods in the CheckingAccount and 
// SavingsAccount subclasses.  These methods should accept a amount parameter and update the 
// balance property accordingly. 
// However, for the SavingsAccount subclass, if the balance drops below zero after a withdrawal, 
// the withdrawal should fail and the balance should not be updated. 
// Implement the getBalance() method in both the CheckingAccount and SavingsAccount 
// subclasses.  This method should return the balance property. 
// Finally, create instances of each subclass and call the deposit(), withdraw(), and 
// getBalance() methods on each instance, logging the result to the console. 
 
//  class BankAccount{
//     #accountNumber;
//     #balance;
//     #accountHolderName;

//     constructor(accountNumber, balance, accountHolderName){
//         this.#accountNumber = accountNumber;
//         this.#balance = balance;
//         this.#accountHolderName = accountHolderName;
//     }
//  }

//  class CheckingAccount extends BankAccount{
//     deposit(amount){
//         this.#balance+=amount;
//     }
    
//     withdraw(amount){
//         this.#balance-=amount;
//     }

//     getBalance(){
//         return this.#balance;
//     }
    
//  }

//  class SavingsAccount extends BankAccount{

//     deposit(amount){
//         super()
//         this.#balance+=amount;
//     }
    
//     withdraw(amount){
//         super()
//         if(this.#balance-amount < 0){
//             return 'ERROR: Withdrawal failed. Insufficient balance.'
//         }
//         else{
//             this.#balance-=amount;
//             return 'Transaction success.'
//         }
//     }

//     getBalance(){
//         return this.#balance;
//     }
//  }

//  let A = new CheckingAccount(123,1000,'Dwij');
//  let B = new SavingsAccount(456,2000,'Pesto');

//  console.log(A.deposit(1000));
//  console.log(A.withdraw(50));
//  console.log(A.getBalance());


class BankAccount {
    #accountNumber;
    #balance;
    #accountHolderName;

    constructor(accountNumber, balance, accountHolderName) {
        this.#accountNumber = accountNumber;
        this.#balance = balance;
        this.#accountHolderName = accountHolderName;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    getBalance() {
        return this.#balance;
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
        super(accountNumber, balance, accountHolderName);
    }

    withdraw(amount) {
        if (this.getBalance() - amount < 0) {
        return 'ERROR: Withdrawal failed. Insufficient balance.';
        } else {
        super.withdraw(amount);
        return 'Transaction success.';
        }
    }
}

let A = new CheckingAccount(123, 1000, 'Dwij');
let B = new SavingsAccount(456, 2000, 'Pesto');

A.deposit(1000);
A.withdraw(50);
console.log(A.getBalance()); // Output: 1950

B.deposit(1000);
console.log(B.withdraw(30000)); // Output: ERROR: Withdrawal failed. Insufficient balance.
console.log(B.getBalance()); // Output: 3000
