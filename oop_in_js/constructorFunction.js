// CONSTRUCTOR FUNCTION (uses this and new keywords to simulate classes like java)
// using new inherently returns the circle to the variable name
function Circle(radius) {
  this.radius = radius;
  this.draw = function draw() {
    console.log("draw");
  };
}

const smallCircle = new Circle(2);
const largeCircle = new Circle(10);

// INTERNALLY THE NEW OPERATOR DOES THIS (it sets an empty object and calls the constructor with the arguments)
Circle.call({}, 4);
// .apply is the same thing as .call, but arguments are passed in list
Circle.apply({}, [1]);

console.log(smallCircle.radius);
largeCircle.draw();

console.log(largeCircle.constructor);

console.log(obj.constructor);
