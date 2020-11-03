let findPeakElement = function(nums) {
    let peakElemPos = [];
    let prevElem = nums[0];
    for(let i = 1; i<nums.length-1; i++){
        if(nums[i]>nums[i+1] && nums[i]>prevElem){
            peakElemPos.push(i);
        }
        prevElem=nums[i];
    }
    return peakElemPos;
};
console.log(findPeakElement([1,2,1,3,5,6,4]));