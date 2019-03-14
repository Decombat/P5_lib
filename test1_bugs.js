var obj = [];
var nbr = 10;

function setup() {
  createCanvas(600, 600);
  background(200);
  for (i = 0; i < nbr; i++) {
    obj[i] = new mouvement();
  }
}

function draw() {
  for (i = 0; i < nbr; i++) {
    obj[i].update();
    obj[i].draw();
    obj[i].check();
  }
}

function mouvement() {
  this.x = width / 2;
  this.y = height / 2;
  this.time = 0;

  this.update = function() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
    this.time += 0.005;
  }
  this.draw = function() {
    noStroke();
    this.tps = map(noise(this.time), 0, 1, 0, 255);
    this.size = map(noise(this.time), 0, 1, 1, 10)
    fill(this.tps);
    ellipse(this.x, this.y, this.size, this.size);
  }
  this.check = function() {
    if (this.x > width)
      this.x = 0;
    else if (this.x < 0)
      this.x = width;
    if (this.y > height)
      this.y = 0;
    else if (this.y < 0)
      this.y = height;
  }
}