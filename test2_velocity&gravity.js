var objet;

function setup() {
  createCanvas(400, 400);
	objet = new mouv();
}

function draw() {
	background(220);
	objet.limits();
	objet.update();
	objet.show();
		objet.check();
}

function mouv(){
	this.location = createVector(height/2, width/2);
	this.velocity = createVector(0, 0);
	this.update = function(){
		this.dir = createVector(mouseX - this.location.x, mouseY - this.location.y )
		this.dir.normalize();
		this.velocity.add(this.dir);

		this.location.add(this.velocity);
	}
	this.show = function(){
		ellipse(this.location.x, this.location.y, 10,10);
	}
	this.check = function(){
	if (this.location.x > width){
      this.location.x = 0;
			this.velocity.x *= -1;
	}
    else if (this.location.x < 0){
      this.location.x = width;
			this.velocity.x *= -1;
		}
    if (this.location.y > height){
      this.location.y = 0;
			this.velocity.y *= -1;
		}
    else if (this.location.y < 0){
			this.location.y = height;
			this.velocity.y *= -1;
		}
	}
	this.limits = function(){
		if (this.velocity.x > 8)
			this.velocity.x = 8;
		if (this.velocity.y > 8)
			this.velocity.y = 8;
	}
}
