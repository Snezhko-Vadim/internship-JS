Object.prototype.hash = function(string) {
  let pathArr = string.split('.');
  let item = this;
  for(let i = 0; i<pathArr.length; i++){
    if(!item[pathArr[i]]){
      return undefined;
    }
    item = item[pathArr[i]];
  }
  return item;
}