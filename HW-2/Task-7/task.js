let containsDuplicate = function(nums) {
    let referenceCountObj={};
    for(let i = 0; i < nums.length; i++){
        if(!referenceCountObj.i){
            referenceCountObj.i=1;
        }
        else{
            return true;
        }
    }
    return false;
};