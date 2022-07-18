
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
    //adding the other duplicate
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}

const c = new Circle();
console.log('CIRCLE OBJECT',c)
//For New shape

function Square (){}

extend(Square, Shape);

Square.prototype.duplicate = function(){
    //adding the other duplicate
    Shape.prototype.duplicate.call(this);
    console.log('duplicate square');
}

//array operation

const shapes =  [
    new Circle(),
    new Square()
];
//iterate objectcs using for of loop

for(let shapes of shape)
{
    shape.duplicate();
}

const sq = new Square();
console.log('SQUARE OBJECT',sq);