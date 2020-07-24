// Abstraction is hiding the details and only showing essentials
function Circle(radius) {
  this.radius = radius;

  // to hide default location we can instead make it a local variable instead of a property
  // this.defaultLocation = { x: 0, y: 0 };
  let defaultLocation = { x: 0, y: 0 };

  // we can make this a private method by removing it as a property and using local variables
  // this.computeOptimumLocation = function () {
  // ...
  // };

  let computeOptimumLocation = function (num) {
    console.log("I am a hidden function ", num);
  };

  this.draw = function draw() {
    computeOptimumLocation(0.1);
    console.log("draw");
  };
}

const smallCircle = new Circle(2);

smallCircle.draw();
