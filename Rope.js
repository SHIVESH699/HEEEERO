class Rope {
  constructor(bodyA,pointB){
      var options={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:0.03 ,
      length: 30,
  }
  this.rope=Constraint.create(options);
  this.pointB=pointB;
  World.add(world,this.rope);

  }
  display(){
      if(this.rope.bodyA)
      line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
  }

  fly(){
      this.rope.bodyA=null;
  }
  
}