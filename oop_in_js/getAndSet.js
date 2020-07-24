function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  // This allows us to get a local variable this is a typical getter but requires a special function name
  this.getDefaultLocation = () => {
    return defaultLocation;
  };

  // this is a specific javascript solution. Here we can set getters and setters and do some logic on each
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location.");
      }
      defaultLocation = value;
    },
  });
}

const smallCircle = new Circle(2);

smallCircle.defaultLocation = 1;
console.log(smallCircle.getDefaultLocation());
console.log(smallCircle.defaultLocation);
