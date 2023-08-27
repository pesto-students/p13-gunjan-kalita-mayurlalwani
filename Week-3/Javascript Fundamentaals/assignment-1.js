function divideArray(nums){
    let evenNums = [];
    let oddNums = [];
    nums.forEach(num => {
        if(num % 2 === 0){
            evenNums.push(num)
        }
        else{
            oddNums.push(num)
        }
    });
    return {
        "EvenNumbers":evenNums.length>0 ? evenNums.sort() :"None",
        "OddNumbers":oddNums.length>0 ? oddNums.sort() :"None"
    }
}

divideArray([4,2,9,1,8])