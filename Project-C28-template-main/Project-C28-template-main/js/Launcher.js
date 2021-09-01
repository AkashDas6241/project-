class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        
        }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.launcher = Matter.Constraint.create(options);
        World.add(world,this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(7);
        line (pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body;
    }
}