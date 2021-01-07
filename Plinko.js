class plinko {
    constructor(x,y,r){
var options ={
    isStatic:true
}
// this.x=x;
// this.r=r;
// this.y=y;
this.r=10;
this.body = Bodies.circle(x,y,10,options);
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
}