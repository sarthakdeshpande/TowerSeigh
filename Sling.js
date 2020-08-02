class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }  

        this.pointB = pointB;
        this.sling = Constraint.create(options)
        World.add(world,this.sling);

    }

    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.rope.bodyA){
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB
            strokeWeight = 4
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
}  