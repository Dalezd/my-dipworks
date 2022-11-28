var pox = new Array(15);
var poy = new Array(15);
var col = new Array(15);
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  frameRate(120);
}

function draw() {
  background(220);
     // display the incoming data
   background(255);
   let fillChange =map(mouseX,0,width,0,128);
   //let size =(300 - abs(mouseX - width/2))/4;
  
   for(var i=1;i<pox.length-1;i++){
     pox[i]=pox[i+1];
     poy[i]=poy[i+1];
     col[i]=col[i+1];
     
   }
   col[col.length-1]=fillChange;
   pox[pox.length-1]=mouseX;
   poy[poy.length-1]=mouseY;
   // put drawing code here
 
   for(var i=0;i<pox.length-1;i++){

   rectMode(CENTER);
   fill(col[i]*2,150,150,0.06);
   strokeWeight(1.5);
   strokeJoin(ROUND);
   stroke(col[i]*2+5,100,160,0.2);
   aFace(pox[i],poy[i],width/8);
   }
}
function aFace(faceX,faceY,faceSize){ 
  square(faceX,faceY,faceSize,3);
  // push();
  // fill(255);
  // ellipse(faceX-15,faceY-10,10x,10);
  // ellipse(faceX+15,faceY-10,10,10);
  // arc
  // pop();

}