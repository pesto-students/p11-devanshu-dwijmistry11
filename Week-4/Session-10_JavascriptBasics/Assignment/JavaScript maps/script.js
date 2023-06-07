function calcWordFrequencies() {
    let str = prompt("Please write a list of words (separated by spaces):");

    let result = new Map();

    str.split(' ').forEach((data) => {
        if(result.has(data)){
            result.set( data , result.get(data)+1);
        }
        else{
            result.set(data,1);
        }
    })

    result.forEach((key, value) => {
        console.log(`${value} ${key}`);
    })

}

calcWordFrequencies();