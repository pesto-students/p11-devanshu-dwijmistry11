// Create a class named "Person" with the following properties: 
//     a. Name: string 
//     b. Age: number 
//     c. Gender: string 
//     d. Nationality: string 
// 
// Create a method named "introduce" in the Person class that returns a string containing the person's 
// name, age, gender, and nationality. 
class Person {
    constructor(Name, Age, Gender, Nationality){
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.Nationality = Nationality;
    }

    introduce() {
        return `My name is ${this.Name}, I am ${this.Age} years old, I am ${this.Gender}, and I am an ${this.Nationality}.`;
    }

}

// Created three instances of the Person class and assign values to their properties.
let p1 = new Person('Dwij', 27, 'Male', 'Indian');
let p2 = new Person('Devanshu', 29, 'Male', 'Indian');
let p3 = new Person('Pushpa', 50, 'Female', 'Indian');

// Call the introduce method on each instance and print the returned string to the console.
console.log('person instance 1: ',p1.introduce());
console.log('person instance 2: ',p2.introduce());
console.log('person instance 3: ',p3.introduce());

// Create a subclass named "Student" that inherits from the Person class. 
// Add a new property to the Student class named "subject" of type string. 
// Create a method named "study" in the Student class that returns a string containing the subject that the student is studying. 
class Student extends Person{
    constructor(Name, Age, Gender, Nationality, subject){
        super(Name, Age, Gender, Nationality);
        this.subject = subject;
    }
    study(){
        return `I am studying ${this.subject}.`
    }
}

// Create an instance of the Student class and assign values to its properties. 
let s1 = new Student('Mehul', 27, 'Male','Indian','JavaScript');
 
// Call the introduce method on the Student instance and print the returned string to the console. 
// Call the study method on the Student instance and print the returned string to the console. 
console.log('student instance 1: ',s1.introduce(),s1.study());

 
