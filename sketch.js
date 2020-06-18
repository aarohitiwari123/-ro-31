var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var f = 0; f <=width; f = f + 80) {
     divisions.push(new Divisions(f, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var m = 50; m <=width-10; m=m+50) 
    {
    
       plinkos.push(new Plinko(m,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background(0);
  Engine.update(engine);
  ground.display();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }

  for (var m = 0; m < particles.length; m++) {
   
    particles[m].display();
  }
 
   for (var f = 0; f < divisions.length; f++) {
     
     divisions[f].display();
   }
}