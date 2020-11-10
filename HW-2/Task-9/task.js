let intersect = function(nums1, nums2) {
    let changingArr = [...nums1];
    let answer = [];
    for(let i = 0; i < changingArr.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums2[j] === changingArr[i]){
                answer.push(changingArr.splice(i,1));
            }
        }
    }
    return answer;
};