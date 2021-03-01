var gardenImage
var cat,catImage,catImage2,catImage3
var mouse,mouseImage,mouseImage2,mouseImage3;
function preload() {
    //load the images here
    gardenImage=loadImage("garden.png");

catImage=loadAnimation("cat1.png");
catImage2=loadAnimation("cat2.png","cat3.png");
catImage3=loadAnimation("cat4.png");

mouseImage=loadAnimation("mouse1.png");
mouseImage2=loadAnimation("mouse2.png","mouse3.png");
mouseImage3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(200,600,20,20);
    mouse.addAnimation(mouseImage);
    mouse.addAnimation("mouse calling",mouseImage2); 
    mouse.scale=0.15;

    cat=createSprite(700,600,20,20);
    cat.addAnimation(catImage);
    cat.addAnimation("cat running",catImage2);
    cat.scale=0.15;
    cat.lifetime=900;
   
    


}

function draw() {

    background(gardenImage,200,200);
    //Write condition here to evalute if tom and jerry collide
    
    //if(cat.x-moue.x<)
    //console.log(cat.x-mouse.x);
   
  
      playCondition();
    

    if(cat.x-mouse.x<143){
        mouse.addAnimation("MOUSEY",mouseImage3);
        mouse.changeAnimation("MOUSEY");

        cat.addAnimation("CATEY",catImage3);
        cat.changeAnimation("CATEY");

        cat.velocityX=0;
        cat.lifetime=-1;

    }
    //cat.y=World.mouseY;
    //cat.x=World.mouseX;
    drawSprites();

     
}


function playCondition(){
      cat.velocityX=-2;
      
      cat.changeAnimation("cat running");

      mouse.changeAnimation("mouse calling");
     
}
