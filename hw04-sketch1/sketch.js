// interaction keyTyped（time）
// Condition: The clock moves forward when the type "go", not when time passes.
function setup() {
  createCanvas(400, 400);
}

function keyTyped() {
  if (key === 't' || key === 'i' || key === 'm' || key === 'e') {
      // Move time forward when type "TIME"
    time++;
  } else {
    time = millis(); // Time progresses normally when not interacting
  }
  displayTime(time);
}

function displayTime(t) {
  // Convert time to hours, minutes, seconds
  let seconds = floor(t / 1000) % 60;
  let minutes = floor(t / (1000 * 60)) % 60;
  let hours = floor(t / (1000 * 60 * 60)) % 24;
}