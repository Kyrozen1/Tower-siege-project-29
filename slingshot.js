class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x<220){
            strokeWeight(7);
            //line(pointA.x, pointA.y, pointB.x, pointB.y);
            stroke(48,22,8)
            line(pointA.x-30,pointA.y,pointB.x+40,pointB.y-30)
            line(pointA.x-30,pointA.y,pointB.x+40,pointB.y+60)
            }
            else{
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            stroke(48,22,8)
            line(pointA.x-30,pointA.y,pointB.x+40,pointB.y-30)
            line(pointA.x-30,pointA.y,pointB.x+40,pointB.y+60)
            }
        }
    }
    
}