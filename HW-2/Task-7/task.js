let containsDuplicate = function(nums) {
    let referenceCountObj={};
    for(let i = 0; i < nums.length; i++){
        if(!referenceCountObj[nums[i]]){
            referenceCountObj[nums[i]]=1;
        }
        else{
            return true;
        }
    }
    return false;
};