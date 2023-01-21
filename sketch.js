let sirkel = 3
let xpos = 400
let ypos = 300
let størrelse = 0
let hp = 1
let score = 0
let ekstrahastighetx = -0.5
let ekstrahastighety = 0.5
let økningshastighet = .2
let antallBalls = 2
let poeng = 0
let balls = []
let vanskelighetsgrad = 1

function setup() { 
  cnv = createCanvas(1300, 600); 
  cnv.mousePressed(clicked)
  noCursor();
  alert('--> click on the asteroid to destroy it                                                           -->arrow up increases difficulty and arrow down decreases difficulty')

} 

//respawner ballen
function respawn() {
  størrelse = 0
  ekstrahastighetx = random(-0.7, 0.7)
  ekstrahastighety = random(-0.7, 0.7)
  xpos = random(300, 1000);
  ypos = random(200, 400);
}

//vanskelighetsgrad funksjon
function keyPressed() {
  if(keyCode === UP_ARROW && vanskelighetsgrad < 3) {
    vanskelighetsgrad = vanskelighetsgrad + 1

  } else if (keyCode === DOWN_ARROW && vanskelighetsgrad > 1) {
    vanskelighetsgrad = vanskelighetsgrad -1
  }


}
//musepress funksjon
function clicked() {
  let avstand = dist(xpos, ypos, mouseX, mouseY)
  let radius = størrelse/2

  if(avstand <= radius) { 
    respawn()
    økningshastighet = økningshastighet + 0.5
    poeng = poeng + 1
  }
}

function draw() { 
  noStroke()
  background(0,0,40)
  xpos = xpos + ekstrahastighetx
  ypos = ypos + ekstrahastighety
  størrelse = størrelse + økningshastighet

  // for å få flere baller, fortsetter på en annen branch
  for(let i = 0; i < antallBalls; i++) {
    fill(180)
    circle(xpos, ypos, størrelse)
    
  }

  //poengsystem
  let s = 'Poengsum ' + poeng;
  fill(255);
  text(s, 10, 10, 100, 100);

  //skjekker om ballen er for stor
  if(størrelse >= 300) {
    respawn()
    hp = hp -1
    økningshastighet = 1
  }
  stroke(0, 255, 0)
  if(poeng == 5) {
    antallBalls = 2
  }

  //vanskelighetsgrad regler
  if(vanskelighetsgrad == 3) {
    stroke(255,0,0)
    økningshastighet = 8
   
  }
  if(vanskelighetsgrad == 2) {
    stroke(255, 255, 0)
    økningshastighet = 6

  }
  if (vanskelighetsgrad == 1) {
    stroke(0,255,0)
    økningshastighet = 2
    }

    //skjekker om hp er for lav
  if (hp == 0) {
    størrelse = 25
    poeng = 0
    hp = 1
  }

  //crosshair
  line(mouseX+22,mouseY+22,mouseX-22,mouseY-22) 
  line(mouseX-22,mouseY+22,mouseX+22,mouseY-22)
}