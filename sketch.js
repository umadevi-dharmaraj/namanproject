
var shuriken;
var shurikein;
function preload() {
  shurikeinAnimation=loadAnimation("assets/s1.png","assets/s2.png","assets/s3.png","assets/s4.png");
  downImage=  loadImage("assets/down.png")
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  shurikein=createSprite(width/2-120,height/4,100,100);
  shurikein.addAnimation("shurikein",shurikeinAnimation);
  shurikein2=createSprite(width/2-120,height-200,100,100);
  shurikein2.addAnimation("shurikein",shurikeinAnimation);
  shurikein.scale=0.3;
  shurikein2.scale=0.3;
  down=createSprite(width-100,600,100,100);
  down.addImage("down",downImage);
  //down.scale=0.6;
  
}

function draw() {
  background("white");
  //shurikein.addAnimation("shurikein",shurikeinAnimation);
  var wi=width;
  var n =wi/15;
  var x=0;
  var y = 0;
  for(var i = 0;i<n;i++){
    rectangle(x,height-720,15,50);
    x+=30;
  }
  for(var i = 0;i<n;i++){
    rectangle(y,height-140,15,50);
    y+=30;
  }
  drawSprites();
}

function rectangle(x,y,w,h) {
push()
fill("red");
stroke("green")
rect(x,y,w,h);
pop()
}
function handlePlayerControl (){
  
}

