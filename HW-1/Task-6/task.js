let findPeakElement = function(nums) {
    let peakElemIndex = 0;
    for(let i = 0; i<nums.length-1;){
        if(nums[i]<nums[i+1]){
            peakElemIndex = i+1;
            i++
        }
        else return i;
    }
    return peakElemIndex;
};