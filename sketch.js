const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var engine, world;
var drops = [];
var umbrella;

function preload() {}

function setup() {
	createCanvas(500, 800);

	engine = Engine.create();
	world = engine.world;

	for (var i = 0; i < 101; i++) {
		drops.push(new Drops(random(-20, 5), random(-2000, 0)));
		console.log(drops[i]);
	}

	umbrella = new Umbrella(250, 700);

	Engine.run(engine);
}

function draw() {
	background('black');

	for (var i = 1; i <= drops.length - 1; i++) {
		drops[i].display();
	}

	umbrella.display();

	drawSprites();
}
