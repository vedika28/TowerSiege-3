class Polygon {

    constructor() {
        this.body = Bodies.circle(50, 200, 20);
        World.add(world, this.body);
        this.image = loadImage("Polygon.png");
        World.add(world,this.body);
    }

    display() {
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 40, 40);
    }
}