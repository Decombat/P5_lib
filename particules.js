let system = [];
let img;

function preload() {
  img = loadImage('https://raw.githubusercontent.com/cobra-foutre/P5_lib/master/txt_2.png');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
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
  this.acc = createVector(0, -0.05);
  this.lifespan = 250;
}

Particule.prototype.update = function() {
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.lifespan -= 2
}

Particule.prototype.display = function() {
  strokeWeight(1);
  image(img, this.pos.x, this.pos.y);
}

Particule.prototype.isDead = function() {
  if (this.lifespan < 0.0)
    return true;
  else
    return false;
}