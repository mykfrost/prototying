
function Shape(color){
    this.color = color;

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
   
   }

//create a function for creating prototype and resetting constructor

function extend(Child , Parent){
 Child.prototype = Object.create(Parent.prototype);
//Resetting constructor so it does not use shape constructor   
Child.prototype.constructor = Child;
}

extend(Circle,Shape);

 function Circle(radius,color){
    Shape.call(this, color);
    this.radius = radius;
}

//Creat a new cicle object that inherits from shape base object


Circle.prototype.draw = function(){
       console.log('draw');
   }
function Square(size){
    this.size = size;
}

extend(Shape,Shape);

const s = new Shape('orange');
const c = new Circle(2,'red');
const sq = new Square(100);

console.log(c);
console.log(s);


