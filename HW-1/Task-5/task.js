let majorityElement = function(nums) {
    let mutableArr=[...nums];
    while(mutableArr.length!==0){
        let numOfElems=0;
        let currElem = mutableArr[0];
        for(let k=0;k<mutableArr.length;){
            if(currElem===mutableArr[k]){
                mutableArr.splice(k,1)
                numOfElems++;
            }
            else{
                k++;
            }
        }
        if(numOfElems>nums.length/2){
            return currElem;
        }
    }
    return 0;
};