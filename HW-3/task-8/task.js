function construct(Class) {
  let arrayOfArguments = [];
  for(let arg of arguments){
    if(arg !== Class){
      arrayOfArguments.push(arg);
    }
  }
  let typeOfReturnedValue = typeof Class(...arrayOfArguments);
  if((typeOfReturnedValue === 'object' || typeOfReturnedValue === 'function') && Class(...arrayOfArguments) !== null){
    return Class(...arrayOfArguments);
  }
  else{
    let obj = Object.create(Class.prototype);
    let newFunc = Class.bind(obj);
    newFunc(...arrayOfArguments);
    return obj;
  }
}