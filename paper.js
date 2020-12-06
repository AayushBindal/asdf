class Paper{
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
    this.body = Bodies.rectangle(200,200,20,20,options);
    this.width = 20;
    this.height = 20;
    World.add(world,this.Body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        strokeWeight(4);
        stroke("green");
        rect(0,0,this.width,this.height);
        pop();
} 
}