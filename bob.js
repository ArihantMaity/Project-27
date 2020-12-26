class Bob{
    constructor(x,y){
        var boboptions ={
            isStatic:false,
            restitution: 1,
            friction:0,
            density:7.8


        }
       
        this.body =  Matter.Bodies.circle(x,y,25,boboptions);
       // this.radius=50;
       
        
       
        World.add(world,this.body);
    }

    display(){
        var pose=this.body.position;
        var ang=this.body.angle;
        push()
        translate(pose.x,pose.y);
        rotate(ang);
        rectMode(CENTER);
        fill("yellow");

        ellipse(0,20,this.radius);
        pop();

    }
}