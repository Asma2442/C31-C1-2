class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.bigarray = []
  }

  display() {
    
    super.display();

    if(this.body.position.x>220 && this.body.velocity.x>10){
    var place = [this.body.position.x,this.body.position.y]
    this.bigarray.push(place)
    }

    for(var i=0;i<this.bigarray.length;i++){
      image(this.smoke,this.bigarray[i][0],this.bigarray[i][1])
    }
  }
}

//this.bigarray = [[x1,y1],[x2,y2],..]
