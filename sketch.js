const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions = [];
var score = 0;
var particle1;
var turn = 0;

var divisionHeight = 300;

gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }


  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 175));
  }

  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 275));
  }

  for (var j = 50; j <= width - 10; j = j + 50) {

    plinkos.push(new Plinko(j, 375));
  }

  ground = new Ground(width / 2, height, width, 20);


console.log(particle1);
}



function draw() {
  background(30, 30, 30);
  fill(200, 200, 200)
  textSize(25)
  text("Score : " + score, 20, 30);
  text("100", width / 2 + 20, 750);
  text("100", width / 2 - 60, 750);
  text("200", width / 2 - 140, 750);
  text("200", width / 2 + 100, 750);
  text("300", width / 2 + 175, 750);
  text("300", width / 2 - 220, 750);
  text("400", width / 2 + 250, 750);
  text("400", width / 2 - 295, 750);
  text("500", width / 2 + 330, 750);
  text("500", 20, 750);

  Engine.update(engine);
ground.display();

  for (var i = 0; i < plinkos.length; i++) {

    plinkos[i].display();

  }
  //  if(frameCount%60===0){
  //    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  //    score++;
  //  }


  // for (var j = 0; j < particles.length; j++) {

  //   particles[j].display();
  // }
  for (var i=0;i<plinkos.length;i++)
  {
    plinkos[i].display();
  }
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
// if(particle1!==null){
//   particle1.display();
// }
// mousePressed(() =>{
  if (gamestate !== "end" && keyDown("space") ) {
    console.log("hi1");
   
    x()
  }
  if(turn === 5){
    gamestate="end";
  }
  if(gamestate==="end")
  {
    textSize("30");
    text("GAME OVER",width/2,height/2)
  }
}

function x()
{ turn++;
  particle1 = new Particle(mouseX, 10, 10,10);
  console.log(particle1);
  particle1.display();
}
