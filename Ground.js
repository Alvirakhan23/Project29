class Ground{

    constructor(x,y,w,h){
        var ground_options={
            isStatic : true
          }
          this.x = x;
          this.y = y;
          this.w = w;
          this.h = h;
          this.ground = Bodies.rectangle(x,y,w,h,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,this.w,this.h);
    }
}