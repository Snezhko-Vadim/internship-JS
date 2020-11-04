let commonChars = function(A) {
  let longestWordIndex;
  let maxSizeOfWord=0;
  let answer=[];
  for(let i = 0; i<A.length; i++){
    A[i]=A[i].split('');
    if(A[i].length>maxSizeOfWord){
      maxSizeOfWord=A[i].length;
      longestWordIndex=i;
    }
  }
  for(let i = 0; i<A[longestWordIndex].length; i++){
    for(let k = 0; k<A.length; k++){
      let flag = false;
      for(let j = 0; j<A[k].length; j++){
        if(A[k][j]===A[longestWordIndex][i]){
          flag = true;
          if(k!==longestWordIndex){
            A[k].splice(j,1);
          }
          break;
        }
      }
      if(flag === true && k===A.length-1){
        answer.push(A[longestWordIndex][i]);
      }
      else if(flag === false){
        break;
      }
    }
  }
  return(answer);
};
console.log(commonChars(["bella","label","roller"]));