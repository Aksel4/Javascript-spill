let sirkel = 3
let xpos = 400
let ypos = 300
let størrelse = 50
let hp = 3
let meteor = {

}
let ekstrahastighetx = -0.5
let ekstrahastighety = 0.5
function setup() { 
  createCanvas(1300, 600); 
} 

function mouse() {
  
  }

function clicked() {
  let avstand = dist(xpos, ypos, mouseX, mouseY)
  let radius = størrelse/2
}



function draw() { 
  noStroke()
  background(20)
  circle(xpos, ypos, størrelse)
  fill(60, 60, 60)
  
  xpos = xpos - ekstrahastighetx
  ypos = ypos + ekstrahastighety
  størrelse = størrelse + 1

  if(størrelse >= 300) {
    størrelse = 25
    xpos = random(300, 1000);
    ypos = random(200, 400)
    hp = hp -1
    
    if(ekstrahastighetx <= 0){
      ekstrahastighetx = 0.5
    }
    if(ekstrahastighetx >= 0){
      ekstrahastighetx = -0.5
    }
    if(ekstrahastighety <= 0){
      ekstrahastighety = 0.5
    }
    if(ekstrahastighety >= 0){
      ekstrahastighety = -0.5
  }
    
  }
  stroke(0, 255, 255) 
  line(mouseX+22,mouseY+22,mouseX-22,mouseY-22) 
  line(mouseX-22,mouseY+22,mouseX+22,mouseY-22)
}
