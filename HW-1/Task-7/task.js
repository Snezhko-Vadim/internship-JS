let longestCommonPrefix = function(strs) {
    let commonPrefix;
    commonPrefix=strs[0];
    recursiveFindCommonPrefix = ()=>{
        for(let i = 0; i<strs.length; i++){
            if(!strs[i].includes(commonPrefix)){
                commonPrefix=commonPrefix.slice(0,commonPrefix.length-1)
                recursiveFindCommonPrefix();
            }
        }
    }
    recursiveFindCommonPrefix();
    return commonPrefix;
};
console.log(longestCommonPrefix(["dog","racecar","car"]));