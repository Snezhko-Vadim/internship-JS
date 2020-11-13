let longestCommonPrefix = function(strs) {
    let commonPrefix
    if(strs.length!==0){
        commonPrefix = strs[0];
    }
    else{
        return '';
    }
    let isFind = false;
    while(!isFind){
        for(let i = 0; i<strs.length; i++){
            if(strs[i].search(/[а-я]/g)!==-1){
                return '';
            }
            if(!strs[i].includes(commonPrefix)){
                commonPrefix=commonPrefix.slice(0,commonPrefix.length-1)
                isFind = false;
                break;
            }
            isFind = true;
        }
    }
    return commonPrefix;
};
console.log(longestCommonPrefix(["с","acc","ccc"]));