let majorityElement = function(nums) {
    let mutableArr=[...nums];
    let majElem;
    for(let k=0;k<mutableArr.length;k++){
        let arrOfIndexDelElems = [];
        let numOfElems=0;
        for(let i=0; i<mutableArr.length;i++){
            if(mutableArr[i]===mutableArr[k]){
                numOfElems++;
                arrOfIndexDelElems.push(i);
            }
        }
        for(let j=1; j<arrOfIndexDelElems.length;j++){
            mutableArr.splice(arrOfIndexDelElems[j],1)
        }
        let zzz =nums.length/2;
        if(numOfElems>nums.length/2){
            majElem=mutableArr[k];
            break;
        }
    }
    return majElem;
};
console.log(majorityElement([3,2,3]));