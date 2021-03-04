class Slingshot{
    constructor(bodyA,pointB){
      
        var options={
            bodyA: bodyA ,
            pointB:pointB , 
            length: 100,
            stiffness: 0.007
        };
        
        this.slingshot=Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.slingshot);
    }
     fly() {
         this.slingshot.bodyA=null;
     }
   show(){
       if(this.slingshot.bodyA){
   var pointA=this.slingshot.bodyA.position;
   var pointB=this.pointB;
       
   strokeWeight(4)
   stroke(70,40,30)
   line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
   line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
   
       }
       
   }
   
   
   
   }