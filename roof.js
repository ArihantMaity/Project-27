class Roof {
    constructor(x,y,width,height) {
      var roofoptions = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,roofoptions);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  }