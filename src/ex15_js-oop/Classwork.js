var Shape = {
  type: 'none',
  edges: [],
  getType: function() {
  return this.type;
  },
  getPerimeter: function(){
    return this.edges.reduce((a,b)=>a+b, 0)
  },
  name: 'none',
  draw: function() {
    console.log(this.name + ' is drawn')
  }
}

function Triangle (name, a, b, c) {
  this.type = 'Triangle'; 
  this.name = name;
  this.edges = [a,b,c]
}
Triangle.prototype = Shape;
Triangle.prototype.constructor = Triangle;

function Square (name,a) {
  this.type = 'Square'; 
  this.name = name;
  this.edges = [a,a,a,a]
}

Square.prototype = Shape;
Square.prototype.constructor = Square;

function Rectangle (name,a,b) {
  this.type = 'Rectangle'; 
  this.name = name;
  this.edges = [a,b,a,b];  
}

Rectangle.prototype = Shape;
Rectangle.prototype.constructor = Rectangle;

function Polygon (name,...edges) {
  this.type = 'Rectangle'; 
  this.name = name;
  this.edges = edges; 
}

Polygon.prototype = Shape;
Polygon.prototype.constructor = Polygon;

var tr = new Polygon('irregular',5,4,1,2,4,5);
console.log(tr.getPerimeter());
console.log(tr.getType());
console.log(tr.name);
tr.draw();
