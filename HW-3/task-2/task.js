var Cat = (function () {
  let sum = 0;
  let numOfCats = 0;
  function Constructor(name,weight){
    if(name === undefined || weight === undefined){
      throw Error('function parameters are not specified');
    }
    sum = sum + weight;
    numOfCats++;
    Object.defineProperties(this,{
      "name":{
        get: function(){return name},
        set: function(value){name = value},
      },
      "weight":{
        get: function(){return weight},
        set: function(value){
          sum = (sum - weight)+value;
          weight = value;
        },
      },
    });
  };
  Object.defineProperty(Constructor,"averageWeight",{
    value: function () {
      if(numOfCats === 0){
        return 0;
      }
      else{
        return sum/numOfCats;
      }
    },
  });
  return Constructor;
 }());