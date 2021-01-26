class Drops {
	constructor(x, y) {
		this.drop = Bodies.circle(x, y, 5, {restitution: 0.1});
		World.add(world, this.drop);
	}

	display() {
		push();
		translate(this.drop.position.x, this.drop.position.y);
		ellipseMode(CENTER);
		fill('#00FFFF');
		ellipse(0, 0, 10, 10);
		pop();
		this.update();
	}

	update() {
		if (this.drop.position.y > 800) {
			Body.setPosition(this.drop, {x: random(0, 500), y: 0});
			Body.setVelocity(this.drop, {x: -1, y: 10});
		}
	}
}
