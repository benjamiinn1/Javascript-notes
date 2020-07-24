// Primitives are copied by their value
// Primitives: Number, String, Boolean, Symbol, undefined, null
// Objects are copied by their reference
// Objects: Object, Function, Array

// In this example we are using a primitive type. Y is a copy not a reference to x.
let x = 10;
let y = x;

x = 20;
console.log(y);

// In this example t is an object. v is a reference to t.
let t = [1, 2, 3];
let v = t;

t.push(4);
console.log(v);

// In this example primX is a primitive type. even though we are calling increase with a global variable, the scope of primX inside the increase function is local, that is why we do not see it increasing in the console.
let primX = 10;

function increase(primX) {
  primX++;
}

increase(primX);
console.log(primX);

// In this example objY is an object type. because of this everywhere objY is passed, it is a reference to the objY global value. Because of this, we see that objY is incremented when increaseObj is run.
let objY = { value: 10 };

function increaseObj(objY) {
  objY.value++;
}

increaseObj(objY);
console.log(objY);
