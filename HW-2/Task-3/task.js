let singleNumber = function(nums) {
    const repetitionObject = {}
    for(let i = 0; i<nums.length; i++) {
        if(repetitionObject[nums[i]]) {
            repetitionObject[nums[i]] += 1
        } else {
            repetitionObject[nums[i]] = 1
        }
    }
    for(let num in repetitionObject){
        if(repetitionObject[num]===1){
            return num;
        }
    }
    return null;
};
console.log(singleNumber([4,1,2,1,2]));