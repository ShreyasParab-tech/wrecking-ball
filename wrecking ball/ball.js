class Ball{
    constructor(x, y, r) {
        var options = {
            'frictionAir' : 0.005,
            'restitution' : 0.2,         
            'density':1.0
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
       ellipseMode(RADIUS)
        fill("silver");
        ellipse(0,0,this.r,this.r)
        pop();
      }
}