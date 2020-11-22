function nouveau (Constructor) {
  let arrayOfArguments = [];
  for(let arg of arguments){
    if(arg !== Constructor){
      arrayOfArguments.push(arg);
    }
  }
  let typeOfReturnedValue = typeof Constructor(...arrayOfArguments);
  if((typeOfReturnedValue === 'object' || typeOfReturnedValue === 'function') && Constructor(...arrayOfArguments) !== null){
    return Constructor(...arrayOfArguments);
  }
  else{
    let obj = Object.create(Constructor.prototype);
    let newFunc = Constructor.bind(obj);
    newFunc(...arrayOfArguments);
    return obj;
  }
}