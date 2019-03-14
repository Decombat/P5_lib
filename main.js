var start = 0;
var inc = 0.01;
var bruitz = 0;

function setup() {
  createCanvas(200, 200);
  pixelDensity(1);
}

function draw() {
  background(0, 0, 120, 255);
  noiseDetail(20);
  var bruitx = 0;
  var bruity = 0;
  loadPixels();
  var index = 0;
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      index = (width * y + x) * 4;
      bruit = noise(bruitx, bruity, bruitz) * height;
      pixels[index] = bruit;
      pixels[index + 1] = bruit;
      pixels[index + 2] = bruit;
      pixels[index + 3] = 255;
      bruitx += inc;
    }
    bruitx = 0;
    bruity += inc;
    bruitz += 0.001;
  }
  updatePixels();
}

function mouseClicked() {
  console.log("click");
  noLoop();
}