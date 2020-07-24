function circle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const smallCircle = circle(2);

// enumerate through object
for (let key in smallCircle) {
  if (typeof smallCircle[key] !== "function")
    console.log(key, smallCircle[key]);
}

// get the keys of an object in an array
const keys = Object.keys(smallCircle);
console.log(keys);

// check for existance using the IN operator
if ("radius" in smallCircle) {
  console.log("Circle has radius");
}
