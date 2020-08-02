class Block {
  constructor(x, y) {
    var options = {
      isStatic: false,
      restitution: 0.8,
      friction: 0.3,
      density: 1.0
    }
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    this.width = 20;
    this.height = 20;

    World.add(world, this.body);
  }

  
  display() {
    console.log(this.body.speed);
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0, 0, 255);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255, this.Visiblity);
      
      pop();
    }

  }
  score(){
    if(this.Visibility < 0  && this.Visiblity > -1005){
      score++;
    }
  }
};
