class ball {
    constructor() {
      var options = {
        isStatic:false,
       restitution:1.2,
       friction:0.5,
       density:1.2
      }
      this.body = Bodies.circle(56,86,55,options);
      this.radius=55;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle =this.body.angle;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("blue");
        ellipse(0, 0, this.radius);
        pop();
    }
  };

  