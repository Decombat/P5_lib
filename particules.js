let system = [];
let img;

function preload() {
  img = loadImage('https://66.media.tumblr.com/6d5ceb0863c4adfa7cfb1b16ccd40a5c/tumblr_p0ajd4b4uy1rr6w39o2_1280.jpg');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  image(img, 0, 0);
  for (var i = 0; i < system.length; i++) {
    system[i].addsys();
  }
  if (system.length > 2)
    system.splice(0, 1);
}

function mouseClicked() {
  system.push(new System(createVector(mouseX, mouseY)));
}

let System = function(position) {
  this.p = [];
  this.pos = position;
}

System.prototype.addsys = function() {
  this.p.push(new Particule(this.pos));
  for (var i = 0; i < this.p.length; i++) {
    this.p[i].update();
    this.p[i].display();
  }
  if (this.p[0].isDead())
    this.p.splice(0, 1);
}


let Particule = function(position) {
  this.pos = position.copy();
  this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
  this.acc = createVector(0, 0.05);
  this.lifespan = 250;
}

Particule.prototype.update = function() {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.lifespan -= 2
}

Particule.prototype.display = function() {
  strokeWeight(1);
  ellipse(this.pos.x, this.pos.y, 2, 2);
}

Particule.prototype.isDead = function() {
  if (this.lifespan < 0.0)
    return true;
  else
    return false;
}