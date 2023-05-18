// Put your solution here

let nums= [4,2,9,1,8];

function devideArray(nums){
    const even = [];
    const odd = [];
    
    for(let i=0; i<nums.length; i++){
        if (nums[i]%2) {
            odd.push(nums[i]);
        } else {
            even.push(nums[i]);
        }
    }
    console.log("Even Number: ",even);
    console.log("Odd Number: ", odd);
}

devideArray(nums);