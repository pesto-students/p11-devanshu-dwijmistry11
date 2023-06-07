
// counter function that increment a counter by 1
function counter(){
    let count=0;
    return function fn(){
        return count+=1;
    }
}

//  creating new instances of counter function using new keyword
const firstCounter = new counter;
const secondCounter = new counter;

// calling 1st instance which is totally isolated. 
let firstValues = [];
for(let i=0; i<5; i++){
    firstValues[i] = firstCounter();
}
console.log("firstValues array: ",firstValues);


let secondValues = [];
for(let i=0; i<3; i++){
    secondValues[i] = secondCounter();
}
console.log("secondValues array: ",secondValues);