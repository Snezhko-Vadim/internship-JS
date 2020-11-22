function isSantaClausable(obj) {
  arrayOfMethods = ['sayHoHoHo','distributeGifts','goDownTheChimney'];
  for (let i = 0; i<arrayOfMethods.length; i++){
    let isThereMethod = false;
    for(let method in obj){
      if(method === arrayOfMethods[i] && typeof obj[method] === 'function'){
        isThereMethod = true;
      }
    }
    if(!isThereMethod){
      return false;
    }
  }
  return true;
}