function spyOn(func){
  let numOfCalls = 0;
  let usingValues = [];
  let returnedValues = [];
  let spyOnFunc = function(){
    numOfCalls++;
    let answer = func(...arguments);
    for (let arg of arguments){
      usingValues.push(arg);
    }
    returnedValues.push(answer);
    return answer;
  };
  spyOnFunc.callCount = function(){
    return numOfCalls;
  };
  spyOnFunc.wasCalledWith = function (value){
    if(usingValues.length === 0){
      return false
    }
    for(let i = 0; i<usingValues.length; i++){
      if(value===usingValues[i]){
        return true;
      }
    }
    return false;
  }
  spyOnFunc.returned = function (value){
    if(returnedValues.length === 0){
      return false
    }
    for(let i = 0; i<returnedValues.length; i++){
      if(value===returnedValues[i]){
        return true;
      }
    }
    return false;
  }
  return spyOnFunc;
}