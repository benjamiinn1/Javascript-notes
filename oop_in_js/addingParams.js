function circle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// ADD
// properties can be added by . notation
const smallCircle = circle(2);
smallCircle.location = { x: 1 };

// dynamic properties can be added by using brackets
const propertyName = "dynamicProp";
smallCircle[propertyName] = { y: 3 };

// DELETE
delete smallCircle.location;
delete smallCircle[propertyName];
