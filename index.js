
function Shape(){

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
   
   }
  function Circle(radius){
    this.radius = radius;
}

//Creat a new cicle object that inherits from shape base object

Circle.prototype = Object.create(Shape.prototype);
//Resetting constructor so it does not use shape constructor   
Circle.prototype.constructor = Circle;
Circle.prototype.draw = function(){
       console.log('draw');
   }

const s = new Shape();
const c = new Circle(2);

console.log(c);
console.log(s);


