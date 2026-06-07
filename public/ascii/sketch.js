// ASCII Webcam – placeholder. Replace with your p5.js sketch.
// Uses relative paths so it works under any basePath (localhost or GitHub Pages).

function setup() {
  const container = document.getElementById("ascii-container");
  const canvas = createCanvas(640, 480);
  canvas.parent(container);
  noStroke();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(20);
  fill(0, 255, 100);
  textSize(24);
  text("ASCII Webcam – Replace sketch.js with your p5.js code", width / 2, height / 2);
}
