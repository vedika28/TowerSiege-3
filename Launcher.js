class Launcher {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.launch = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world, this.launch);
    }

    display() {
        if (this.launch.bodyA) {
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.launch.bodyA = null;
    }

    attach(body) {
        this.launch.bodyA = body;
        Matter.Body.setAngle(body, 0);
    }
}