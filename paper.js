class Paper{

constructor (x,y,radius){

  this.image = loadImage("paper.png");

var options= {
  'restitution':0.8,
  'friction':0.3,
  'density':1.2

}

  this.body=Bodies.circle(x,y,radius,options);
  this.radius=radius;
  World.add(world,this.body);
}


display(){
var pos = this.body.position;
var angle = this.body.angle;


push();
translate(pos.x,pos.y);
rotate(angle);
ellipseMode(CENTER);
stroke("salmon");
strokeWeight(3);
fill("peachPuff");
image(this.image,0,0,this.radius);
pop();





}
}