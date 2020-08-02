class Polygon{
    constructor(x,y){
        var options ={
            isStatic:false,
            restitution : 0.3,
            density:1.2,
            friction:0.5  
        }
        this.radius = 13;
        this.body = Bodies.circle(x,y,this.radius,options);  
        this.image = loadImage("Sprites/polygon.png");    
        World.add(world,this.body);
        
    }

    
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS); 
        fill(255,255,0)
        ellipse(0,0,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,0 , 0, 60,30);  
        pop();
    }
}