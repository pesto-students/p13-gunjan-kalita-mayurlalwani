function divideArray(nums){
    let evenNums = [];
    let oddNums = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 === 0){
            evenNums.push(nums[i])
        }
        else{
            oddNums.push(nums[i])
        }
    }
    return {
        "Even Numbers":evenNums.length>0 ? evenNums.sort() :"None",
        "Odd Numbers":oddNums.length>0 ? oddNums.sort() :"None"
    }
}

divideArray([4,2,9,1,8])