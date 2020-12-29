class thief{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/thiefimage2removebg.png");
        this.image1 = loadImage("images/thiefimage1removebg.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

/*if(keyDown(UP_ARROW)){
            this.body.velocityY=-2
          }
          
          if(keyDown(DOWN_ARROW)){
            this.body.velocityY=2
          }
          
          if(keyDown(LEFT_ARROW)){
            this.body.velocityX=-2
          }
          
          if(keyDown(RIGHT_ARROW)){
            this.body.velocityX=2
          }*/

      }
