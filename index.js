
function Shape(color){
    this.color = color;

}
Shape.prototype.duplicate = function(){
    console.log('duplicate');
   
   }

   const s = new Shape('orange');


//create a function for creating prototype and resetting constructor

function extend(Child , Parent){
    Child.prototype = Object.create(Parent.prototype);
   //Resetting constructor so it does not use shape constructor   
   Child.prototype.constructor = Child;
   }


 function Circle(radius,color){
    Shape.call(this, color);
    this.radius = radius;
}

//Creat a new cicle object that inherits from shape base object

extend(Circle,Shape);
//Method Overriding

Circle.prototype.duplicate = function(){
    console.log('duplicate');
   
   }

Circle.prototype.draw = function(){
       console.log('draw');
   }
  
   const c = new Circle(2,'red');

function Square(size){
    this.size = size;
}

extend(Shape,Shape);

const sq = new Square(100);





console.log(c);
console.log(s);


