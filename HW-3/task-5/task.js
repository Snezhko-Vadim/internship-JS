let extendArrayMixin = {
  square: function(){
    return this.map((item)=>item*item);
  },
  cube: function(){
    return this.map((item)=>item*item*item);
  },
  average: function(){
    if(!this.length){
      return NaN;
    }
    let sum =  this.reduce(function(sum, item) {
      return sum+item;
    },0);
    return sum/this.length;
  },
  sum: function(){
    return this.reduce(function(sum, item) {
      return sum+item;
    },0);
  },
  even: function(){
    return this.filter((item)=>item%2===0);
  },
  odd: function(){
    return this.filter((item)=>item%2!==0);
  }
}
Object.assign(Array.prototype,extendArrayMixin);