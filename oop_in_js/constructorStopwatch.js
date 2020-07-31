// EXAMPLE STOPWATCH
// Build a stopwatch object that has 4 functions
// start:     starts the timer, throws error if stopwatch is running
// stop:      stops the timer, throws error if stopwatch is not running
// duration:  checks how much time the stopwatch has been running
// reset:     sets stopwatch back to original state

// constructor version

function Stopwatch() {
  let duration = 0;
  let running = false;
  let startTime;
  this.start = () => {
    if (running) throw new Error("Stopwatch is already running!");
    running = true;
    startTime = Date.now() / 1000;
  };
  this.stop = () => {
    if (!running) throw new Error("Stopwatch is not running!");
    running = false;
    duration = duration + Date.now() / 1000 - startTime;
  };
  Object.defineProperty(this, "duration", {
    get: () => {
      return duration;
    },
  });
  Object.defineProperty(this, "running", {
    get: () => {
      return running;
    },
  });
  this.reset = () => {
    running = false;
    duration = 0;
  };
}

const constructorStopwatch = new Stopwatch();
constructorStopwatch.start();
setTimeout(() => {
  constructorStopwatch.stop(),
    console.log(constructorStopwatch.duration),
    setTimeout(() => {
      constructorStopwatch.start();
    }, 2000);
  setTimeout(() => {
    constructorStopwatch.stop(), console.log(constructorStopwatch.duration);
  }, 4000);
}, 3000);
