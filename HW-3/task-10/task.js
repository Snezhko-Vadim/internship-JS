class Cuboid {
  constructor(length,width,height){
    this.length=length;
    this.width=width;
    this.height=height;
    Object.defineProperties(this,{
      'surfaceArea':{
        get: function(){
          return (this.length*this.width+this.width*this.height+this.height*this.length)*2
        }
      },
      'volume':{
        get: function(){
          return this.length*this.width*this.height
        }
      }
    })
  }
}
class Cube extends Cuboid {
  constructor(length){
    super(length,length,length);
  }
}