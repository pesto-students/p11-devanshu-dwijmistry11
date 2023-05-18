// Your solution goes here 

function playGuessingGame(numToGuess, totalGuess=10){
    let num = NaN;

    // no numToGuess given
    if(numToGuess == undefined){
        alert("Invalid function call. \nplayGuessingGame(Number to Guess , total guess(optional))");
        return 0;
    }

    // game implementation
    for(let i=0 ; i<totalGuess; i++){
        num = prompt("Enter a number between 0 and 100.  (Guess:" + (i+1) +"/"+totalGuess +")");

        if(isNaN(num) || num === ""){
            alert("Please enter a number");
            i--;
        }else if(num == null){
            return 0;
        }else if(num < numToGuess){
            alert(num + " is too small. Guess a larger number.");
        }else if(num > numToGuess){
            alert(num + " is too large. Guess a smaller number.");
        }else if(num == numToGuess){
            return i+1;
        }
    }
    return 0;
}