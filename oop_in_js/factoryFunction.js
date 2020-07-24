// FACTORY FUNCTION
function circle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

let smallCircle = circle(2);
let largeCircle = circle(10);

console.log(smallCircle.radius);
largeCircle.draw();

console.log(largeCircle.constructor);
