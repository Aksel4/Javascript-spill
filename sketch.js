let sirkel = 3
let xpos = 400
let ypos = 300
let størrelse = 0
let hp = 3
let score = 0
let ekstrahastighetx = -0.5
let ekstrahastighety = 0.5
let økningshastighet = .2
let antallBalls = 1
let poeng = 0
let balls = []

function setup() { 
  cnv = createCanvas(1300, 600); 
  cnv.mousePressed(clicked)

} 

function preLoad() {
  img = loadImage('Bilder/Stars.jpg') 
}

function clicked() {
  let avstand = dist(xpos, ypos, mouseX, mouseY)
  let radius = størrelse/2

  if(avstand <= radius) {  
    fill(60)
    størrelse = 0
    ekstrahastighetx = random(-0.7, 0.7)
    ekstrahastighety = random(-0.7, 0.7)
    xpos = random(300, 1000);
    ypos = random(200, 400);
    økningshastighet = økningshastighet + 0.1
    poeng = poeng + 1
  }
}



function draw() { 
  noStroke()
  background(30)
  xpos = xpos + ekstrahastighetx
  ypos = ypos + ekstrahastighety
  størrelse = størrelse + økningshastighet

  for(let i = 0; i < antallBalls; i++) {
    fill(240)
    circle(xpos, ypos, størrelse)
    
  }

  let s = 'Poengsum ' + poeng;
  fill(255);
  text(s, 10, 10, 100, 100);

  if(størrelse >= 300) {
    størrelse = 25
    xpos = random(300, 1000);
    ypos = random(200, 400);
    ekstrahastighetx = random(-1, 1)
    ekstrahastighety = random(-1, 1)
    hp = hp -1
    økningshastighet = 1
  }
  stroke(0, 255, 0)
  if(poeng == 5) {
    antallBalls = 2
  }
  if(hp == 2) {
    stroke(255,255,0)
  } 
  if(hp == 1) { 
    stroke(255, 0, 0)
  }
  if (hp == 0) {
    fill(200)
    økningshastighet = 1
    hp = 3
    størrelse = 25
    fill(60)
    poeng = 0
  }


  line(mouseX+22,mouseY+22,mouseX-22,mouseY-22) 
  line(mouseX-22,mouseY+22,mouseX+22,mouseY-22)
}