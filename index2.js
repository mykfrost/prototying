
//Method overriding

function extend(Child , Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(){}

Shape.prototype.duplicate = function(){
    console.log('duplicate');
}
function Circle(){}

extend(Circle , Shape);

Circle.prototype.duplicate = function(){
    console.log('duplicate circle');
}
const c = new Circle();