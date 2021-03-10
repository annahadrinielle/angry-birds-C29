class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        //right arm image
        this.sling1 = loadImage("sprites/sling1.png");
        //left arm image
        this.sling2 = loadImage("sprites/sling2.png");
        
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

    
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            image(this.sling1,200,20);
            image(this.sling2,170,20);

            if(pointA.x < 230){
                push();
                strokeWeight(4);
                stroke(48,23,8)
                //right line
                line(pointA.x - 20, pointA.y, pointB.x + 50, pointB.y);
                bird.display();
                //left line
                line(pointA.x - 20, pointA.y, pointB.x, pointB.y);
                image(this.sling3, pointA.x - 20,pointA.y - 10, 10, 30)
                pop();
            }
            else
            {
                push();
                strokeWeight(4);
                stroke(48,23,8)
                //right line
                line(pointA.x + 20, pointA.y, pointB.x + 50, pointB.y);

                bird.display();
                //left line
                line(pointA.x + 20, pointA.y, pointB.x, pointB.y);
                image(this.sling3, pointA.x + 20,pointA.y - 10, 10,30);
                pop();
            }
            
        }
    }
    
}
