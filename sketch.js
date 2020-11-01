var bg1,bg2,bg3,bg;
var box,boxIMG,player1,question1,startIMG;
var bike,track,question2,start2,pacman2,pacman3,pacman4;
var trophy,pacman,ghost4,ghost3,ghost2,ghost1,question3;
var option11,option21,option12,option22,option13,option23 ;
var option11IMG,option21IMG,option12IMG,option22IMG,option13IMG,option23IMG ;
var bg1IMG,bg2IMG,bgIMG,player2,player2IMG;
var player1IMG,question1IMG,coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8;
var bikeIMG,trackIMG,question2IMG;
var trophyIMG,pacmanIMG,ghost4IMG,ghost3IMG,ghost2IMG,ghost1IMG,question3IMG;
var g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17;
var gameState = 'Level1';
var rules1,rules2,rules3;
var rules1IMG,rules2IMG,rules3IMG;
var track,bgreset,reset,resetIMG;
var rules11,heart1,heart2,heart3,heart;
var question1,question1IMG,objIMG;
var wallsGroup, coinIMG;
var lives=5;

function preload(){
    option11IMG=loadImage("level1IMG/1level1.png");
    option21IMG=loadImage("level2IMG/2level1.png");
    option12IMG=loadImage("level2IMG/2level1.png");
    option22IMG=loadImage("level2IMG/2level2.png");
    option13IMG=loadImage("level3IMG/3level1.png");
    option23IMG=loadImage("level3IMG/3level2.png");
 bg1IMG=loadImage("level1IMG/bg1.png");
 bg2IMG=0;

 bgIMG=loadImage("bg.png");
pacman2=loadImage("level2IMG/pacman2.png")
pacman3=loadImage("level2IMG/pacman3.png")
pacman4=loadImage("level2IMG/pacman4.png")
 boxIMG=loadImage("level1IMG/box.png");
 player1IMG=loadImage("level1IMG/player1.png");
 question1IMG=loadImage("level1IMG/question1.png");
 bikeIMG=loadImage("level3IMG/animal1.png");
 //trackIMG=loadImage("level3IMG/animal5.png");
 question2IMG=loadImage("level2IMG/question2.png");
trophyIMG=loadImage("level2IMG/trophy.png");
pacmanIMG=loadImage("level2IMG/pacman.png");
ghost4IMG=loadImage("level2IMG/ghost4.png");
ghost3IMG=loadImage("level2IMG/ghost3.png");
ghost2IMG=loadImage("level2IMG/ghost2.png");
ghost1IMG=loadImage("level2IMG/ghost1.png");
question3IMG=loadImage("level3IMG/question3.png");
rules1IMG=loadImage("level1IMG/Rules1.png");
rules11=loadImage("level1IMG/rules1level.png");
rules2IMG=loadImage("level2IMG/rules2level.png");
option11IMG=loadImage("level1IMG/1level1.png")
option12IMG=loadImage("level1IMG/2level1.png")
question1IMG=loadImage("level1IMG/question1.png")
player2IMG=loadImage("level1IMG/player2.png")
bgreset=loadImage("bgreset.png")
coinIMG = loadImage("coin.png");
startIMG=loadImage("level2IMG/startbutton.png")
pacman2=loadImage("level2IMG/pacman2.png")
pacman3=loadImage("level2IMG/pacman3.png")
pacman4=loadImage("level2IMG/pacman4.png")
heart=loadImage("level2IMG/heart.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  
    GroundGroup=createGroup();
    wallsGroup = createGroup();
    level2Group=createGroup();
    ghostGroup=createGroup();

     player1=createSprite(50,50,50,50)
     player1.addImage(player1IMG)
     player1.scale=0.3;
     player1.visible=false;

     rules1=createSprite(windowWidth-200,600,20,20)
     rules1.addImage(rules1IMG)
     rules1.scale=0.7;
     //track=createSprite(500,470,20,20)
   //  track.scale=3.9;
     w1=createSprite(windowWidth/2-680,windowHeight/2,20,100)
     w1.visible=false;

     w2=createSprite(windowWidth-10,windowHeight/2,20,100)
     w2.visible=false;
      heart1=createSprite(windowWidth/2,windowHeight/2-30,20,20)
heart1.addImage(heart)
heart1.scale=0.2;
heart2=createSprite(windowWidth/2-50,windowHeight/2-30,20,20)
heart2.addImage(heart)
heart2.scale=0.2;
heart3=createSprite(windowWidth/2+50,windowHeight/2-30,20,20)
heart3.addImage(heart)
heart3.scale=0.2;
   
trophy=createSprite(windowWidth/2,windowHeight/2+150,20,20)
trophy.addImage(trophyIMG)
trophy.scale=1.3;
trophy.visible=false;

   box=createSprite(720,450,20,20)
   box.addImage(boxIMG)
   box.scale=0.4;

      ghost4=createSprite(windowWidth/2,windowHeight-300,20,20)
      ghost4.addImage(ghost4IMG)
      ghost4.scale=1.5;
      ghost3=createSprite(windowWidth-100,windowHeight/2,20,20)
      ghost3.addImage(ghost3IMG)
      ghost3.scale=1.5;
      ghost2=createSprite(windowWidth/2-500,windowHeight/2,20,20)
      ghost2.addImage(ghost2IMG)
      ghost2.scale=1.5;
      ghost1=createSprite(windowWidth/2+100,windowHeight/2-300,20,20)
      ghost1.addImage(ghost1IMG)
      ghost1.scale=1.5;
      ghost4.velocityY=4;
      ghost3.velocityY=4;
      ghost2.velocityY=4;
      ghost1.velocityY=4;
      ghost4.velocityX=4;
      ghost3.velocityX=4;
      ghost2.velocityX=4;
      ghost1.velocityX=4;

      pacman=createSprite(windowWidth/2-500,windowHeight/2+100,20,20)
      pacman.addImage(pacmanIMG)
      pacman.scale=0.5;
        ghostGroup.add(ghost4)
        ghostGroup.add(ghost2)
        ghostGroup.add(ghost3)
        ghostGroup.add(ghost1)
question2=createSprite(windowWidth/2,windowHeight/2-100,40,40)
question2.addImage(question2IMG)

option21=createSprite(windowWidth/2-100,windowHeight/2+100,20,20)
option21.addImage(option21IMG)
option22=createSprite(windowWidth/2+100,windowHeight/2+100,20,20)
option22.addImage(option22IMG)
option21.scale=0.4;
option22.scale=0.4;
option22.visible=false;
option21.visible=false;
question2.visible=false;


     coin1=createSprite(windowWidth/2-500,windowHeight/2,20,20)
     coin1.addImage(coinIMG)
     coin1.scale=0.3;
     coin2=createSprite(windowWidth-200,windowHeight/2,20,20)
     coin2.addImage(coinIMG)
     coin2.scale=0.3;
     coin3=createSprite(windowWidth/2,windowHeight/2+250,20,20)
     coin3.addImage(coinIMG)
     coin3.scale=0.3;
     coin4=createSprite(windowWidth/2,windowHeight/2-250,20,20)
     coin4.addImage(coinIMG)
     coin4.scale=0.3;
     coin5=createSprite(windowWidth/2,windowHeight/2+100,20,20)
     coin5.addImage(coinIMG)
     coin5.scale=0.3;
     coin6=createSprite(windowWidth/2,windowHeight/2-150,20,20)
     coin6.addImage(coinIMG)
     coin6.scale=0.3;
     
     trophy.visible=false;
   question1=createSprite(windowWidth-200,100,10,10)
   question1.addImage(question1IMG)
   question1.scale=0.5;

   option11=createSprite(windowWidth-300,200,10,10)
   option11.addImage(option11IMG);
   option12=createSprite(windowWidth-100,200,10,10)
   option12.addImage(option12IMG);
   option11.scale=0.3;
   option12.scale=0.3;
option12.visible=false;
option11.visible=false;
question1.visible=false;

    g1=SpriteCreation(120,70,220,20)
    g2=SpriteCreation(340,170,390,20)
    g3=SpriteCreation(450,305,20,380)
    g4=SpriteCreation(150,270,300,20)
    g5=SpriteCreation(240,360,260,20)
    g6=SpriteCreation(100,470,230,20)
    g7=SpriteCreation(360,430,20,130)
    g8=SpriteCreation(200,590,20,60)
    g9=SpriteCreation(600,500,500,20)
    g10=SpriteCreation(535,110,190,20)
    g11=SpriteCreation(640,225,20,250)
    g12=SpriteCreation(840,340,400,20)
    


   GroundGroup.add(box)

    GroundGroup.add(g1)
    GroundGroup.add(g2)
   GroundGroup.add(g3)
    GroundGroup.add(g4)
   GroundGroup.add(g5)
 GroundGroup.add(g6)
   GroundGroup.add(g7)
    GroundGroup.add(g8)
    GroundGroup.add(g9)
   GroundGroup.add(g10)
    GroundGroup.add(g11)
    GroundGroup.add(g12)

    GroundGroup.setVisibleEach(false)
    
    
     m1=Sprite2(windowWidth/2-400,windowHeight/2,20,400)
     m2=Sprite2(windowWidth-250,windowHeight/2,20,400)
     m3=Sprite2(windowWidth/2-50,windowHeight/2-200,500,20)
     m4=Sprite2(windowWidth/2-50,windowHeight/2+200,500,20)
     m5=Sprite2(windowWidth-170,windowHeight/2-90,20,70)
     m6=Sprite2(windowWidth-170,windowHeight/2+90,20,70)
     m7=Sprite2(windowWidth/2-480,windowHeight/2-90,20,70)
     m8=Sprite2(windowWidth/2-480,windowHeight/2+90,20,70)
     m9=Sprite2(windowWidth-80,windowHeight/2-60,200,20)
     m10=Sprite2(windowWidth-80,windowHeight/2+60,200,20)
     m11=Sprite2(windowWidth/2-570,windowHeight/2+60,200,20)
     m12=Sprite2(windowWidth/2-570,windowHeight/2-60,200,20)
     m13=Sprite2(windowWidth/2,windowHeight/2,300,20)
     m14=Sprite2(windowWidth/2-140,windowHeight/2-30,20,80)
     m15=Sprite2(windowWidth/2+140,windowHeight/2-30,20,80)
     m16=Sprite2(windowWidth/2,windowHeight/2-80,300,20)
     wallsGroup.add(m5);
    wallsGroup.add(m6);
    wallsGroup.add(m7);
    wallsGroup.add(m8);
    wallsGroup.add(m9);
    wallsGroup.add(m10);
    wallsGroup.add(m11);
    wallsGroup.add(m12);
    wallsGroup.add(m13);
    wallsGroup.add(m14);
    wallsGroup.add(m15); 
    wallsGroup.add(m1)
    wallsGroup.add(m3)
    wallsGroup.add(m2)
    wallsGroup.add(m4)
    wallsGroup.add(m16)
    pacman.visible = false
    level2Group.add(ghost1)
    level2Group.add(ghost2)
    level2Group.add(ghost3)
    level2Group.add(ghost4)
    level2Group.add(heart1)
    level2Group.add(heart2)
    level2Group.add(heart3)
    level2Group.add(coin1)
    level2Group.add(coin2)
    level2Group.add(coin3)
    level2Group.add(coin4)
    level2Group.add(coin5)
    level2Group.add(coin6)
    //level2Group.add(wallsGroup)

    level2Group.setVisibleEach(false)
    wallsGroup.setVisibleEach(false)

    start2=createSprite(windowWidth-200,580,100,20)
    start2.shapeColor="red" 
    start2.visible=false;
    start2.addImage(startIMG)
    start2.scale=0.5;

    

}
function draw(){
    background(bgIMG)

    
edges=createEdgeSprites();
player1.bounceOff(edges);
ghost4.bounceOff(edges);
ghost3.bounceOff(edges);
ghost2.bounceOff(edges);
ghost1.bounceOff(edges);
player1.bounceOff(g1)
player1.bounceOff(g2)
player1.bounceOff(g3)
player1.bounceOff(g4)
player1.bounceOff(g5)
player1.bounceOff(g6)
player1.bounceOff(g7)
player1.bounceOff(g8)
player1.bounceOff(g9)
player1.bounceOff(g10)
player1.bounceOff(g11)
player1.bounceOff(g12)
pacman.collide(wallsGroup);
ghost1.bounceOff(wallsGroup);
ghost2.bounceOff(wallsGroup);
ghost3.bounceOff(wallsGroup);
ghost4.bounceOff(wallsGroup);
ghost4.bounceOff(edges);
ghost2.bounceOff(edges);
ghost3.bounceOff(edges);
ghost1.bounceOff(edges);
  if(gameState == 'Level2'){
    if(pacman.isTouching(ghost1)){
      lives -= 1;
      pacman.x = 20;
    pacman.y = 115;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    }
    else if(pacman.isTouching(ghost2)){
      lives -= 1;
      pacman.x = 20;
    pacman.y = 115;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    }
    else if(pacman.isTouching(ghost3)){
      lives -= 1;
      pacman.x = 20;
    pacman.y = 115;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    }
    else if(pacman.isTouching(ghost4)){
      lives -= 1;
      pacman.x = 20;
    pacman.y = 115;
    pacman.velocityX = 0;
    pacman.velocityY = 0;
    }
    if(lives == 3){
      heart1.visible = false;
    }
    if (lives == 2){
      heart2.visible = false
    }
    if(lives == 1){
      heart3.visible = false;
    } 
    if(heart3.visible=false){
      bgIMG=bgreset
    }}
    if(pacman.isTouching(w1)){
    pacman.x=windowWidth-240;
    pacman.y=windowHeight/2;
    pacman.velocityX=-4;
    }
    if(pacman.isTouching(w2)){
      pacman.x=windowWidth/2-410;
      pacman.y=windowHeight/2;
      pacman.velocityX=4;
      }

      if(pacman.isTouching(coin1)){
        coin1.visible=false;
      }
      if(pacman.isTouching(coin2)){
        coin2.visible=false;
      }
      if(pacman.isTouching(coin3)){
        coin3.visible=false;
      }
      if(pacman.isTouching(coin4)){
        coin4.visible=false;
      }
      if(pacman.isTouching(coin5)){
        coin5.visible=false;
      }
      if(pacman.isTouching(coin6)){
        coin6.visible=false;
      } 
      if(gameState == 'Level2' && (coin1.visible=== false && coin2.visible=== false &&
        coin3.visible=== false&&coin4.visible=== false&&
        coin5.visible=== false&&coin6.visible=== false)){
        wallsGroup.setVisibleEach(false);
        ghost4.visible=false;
        ghost3.visible=false;
        ghost2.visible=false;
        ghost1.visible=false;
        
        heart1.visible=false;
        heart2.visible=false;
        heart3.visible=false;
        
        option22.visible=true;
        option21.visible=true;
        question2.visible=true;
      }
   
    

   if(keyDown(UP_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = -10;
  }
  
  if(keyDown(DOWN_ARROW)) {
    player1.velocityX = 0;
    player1.velocityY = 10;
  }
  
  if(keyDown(RIGHT_ARROW)) {
    player1.addImage(player1IMG)
    player1.velocityX = 10;
    player1.velocityY = 0;
  }
  
  if(keyDown(LEFT_ARROW)) {
    player1.addImage(player2IMG)
    player1.velocityX = -10;
    player1.velocityY = 0;
  }
  if(gameState == 'Level2'){
    if(keyDown(UP_ARROW)) {
      pacman.addImage(pacman4)
      pacman.velocityX = 0;
      pacman.velocityY = -4;
    }
    
    if(keyDown(DOWN_ARROW)) {
      pacman.addImage(pacman3)
      pacman.velocityX = 0;
      pacman.velocityY = 4;
    }
    
    if(keyDown(RIGHT_ARROW)) {
      pacman.addImage(pacmanIMG)
      pacman.velocityX = 4;
      pacman.velocityY = 0;
    }
    
    if(keyDown(LEFT_ARROW)) {
      pacman.addImage(pacman2)
      pacman.velocityX = -4;
      pacman.velocityY = 0;
    }
}
  


     if (player1.isTouching(box)){
       player1.velocityX=0
       player1.velocityY=0
       box.destroy()
       option12.visible=true;
       option11.visible=true;
       question1.visible=true;
       player1.visible=false;
     }
     if (mousePressedOver(option11)){
       bgIMG=rules2IMG
       GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false

     }
     if (mousePressedOver(reset)){
       bgIMG=bgIMG
       option12.visible=false
option11.visible=false
question1.visible=false
     }
     if (mousePressedOver(option12)){
      bgIMG=bgreset
      GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false
   reset.visible=true;
    }
    
//track.display();

    drawSprites();
    textSize(55)
    if(mousePressedOver(start2)){
      bgIMG=bg2IMG
      start2.destroy()
      level2Group.setVisibleEach(true)
      wallsGroup.setVisibleEach(true)
      gameState = 'Level2'
      pacman.visible = true;
    }
    if (mousePressedOver(option11)){
      bgIMG=rules2IMG
      GroundGroup.setVisibleEach(false)
option12.visible=false
option11.visible=false
question1.visible=false
text("Press r to Start",400,200)
start2.visible=true;
    }
    if (mousePressedOver(rules1)){
      bgIMG=rules11
      rules1.visible=false;
      stroke("black")
      gameState="start"
      
    }
    if (gameState === "start"){
      textSize(55)
      text("Press Space To Start",400,200)
      if (keyDown ("space")){
        gameState='play'
        bgIMG=bg1IMG
        GroundGroup.setVisibleEach(true)
        player1.visible=true;
      }
    }
    
}   

function SpriteCreation(x,y,width,height){
    var obj=createSprite(x,y,width,height)
   obj.shapeColor=rgb(152, 105, 62)
    player1.collide(obj);
   // obj.visible=false;
    return obj;
    
}
function Sprite2(x,y,width,height){
  var obj2=createSprite(x,y,width,height)
 obj2.shapeColor='blue'
  pacman.collide(obj2);
 // obj.visible=false;
  return obj2;
  
}
