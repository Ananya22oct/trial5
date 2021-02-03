class Hero {  
    constructor(x, y,r){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic' : false
        }
       this.x=x
       this.y=y;
       this.r=100;
       this.body=Bodies.circle(this.x,this.y,100,options);
       this.image=loadImage("Superhero-01.png");
       World.add(world,this.body);
       
        
   }
   display(){
    var pos=this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,33,33);

   

   }
}