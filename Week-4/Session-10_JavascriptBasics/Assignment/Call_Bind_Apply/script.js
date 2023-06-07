class calculator {
    add (num1, num2){
        return num1+num2;
    }
    subtract(num1,num2){
        return num1-num2;
    }
    multiply(num1,num2){
        return num1*num2;
    }
    divide(num1,num2){
        return num1/num2;
    }
}

class ScientificCalculator extends calculator{
    square(num){
        return square(num);
    }
    cube(num){
        return cubeOf(num);
    }
    power(num1,num2){
        return Math.pow(num1,num2);
    }
}

///////////////////////////////////////////
// Created an instance of the ScientificCalculator class
const one = new ScientificCalculator();

///////////////////////////////////////////
// Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5.
console.log("Using call() 10+5 = ", one.add.call(null,10,5));

///////////////////////////////////////////
// Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
console.log("Using apply() 10-5 = ", one.subtract.apply(null,[10,5]));

///////////////////////////////////////////
//Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number
// by 2 and returns the result. Bind the "multiplyByTwo" method to the instance of the
// ScientificCalculator class.
function multiplyByTwo(num){
    return this.multiply(num,num2=2);
}

one.multiplyByTwo = multiplyByTwo.bind(one);
console.log("Using bind() multiplyByTwo(5) = ", one.multiplyByTwo(5))

///////////////////////////////////////////
// Using the "bind" method, create a new method named "powerOfThree" that raises a number to the
// power of 3 and returns the result. Bind the "powerOfThree" method to the instance of the
// ScientificCalculator class.

function powerOfThree(num){
    return this.power(num,num2=3);
}

one.powerOfThree = powerOfThree.bind(one);
console.log("Using bind() powerOfThree(2) = ",one.powerOfThree(2))