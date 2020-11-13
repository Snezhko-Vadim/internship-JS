let intersect = function(nums1, nums2) {
    let changingArr = [...nums1];
    let answer = [];
    for(let i = 0; i < nums2.length; i++){
        for(let j = 0; j < changingArr.length;){
            if(changingArr[j] === nums2[i]){
                answer.push(changingArr.splice(j,1));
                break;
            }
            else{
                j++;
            }
        }
    }
    return answer;
};