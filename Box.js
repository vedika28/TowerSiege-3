class Box {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 0.8
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    color = this.color;
    World.add(world, this.body);

    this.rand = random(210, 255);
    this.rand2 = random(170, 200);
    this.rand3 = random(190, 220);

    this.visibility = 255;
  }

  score() {
    if (this.visibility<0 && this.visibility>-105) {
      score+=1;
    }
  }
  
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    fill(this.rand, this.rand2, this.rand3);

    if (this.body.speed < 3.1) {
      push();
      tint(255, this.visibility)
      rotate(angle);
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    } else {
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
    }
    // console.log(this.body.speed);
  }

  
  
}

