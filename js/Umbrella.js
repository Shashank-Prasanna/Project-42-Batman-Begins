class Umbrella {
	constructor(x, y) {
		this.umbrella = Bodies.circle(x, y, 60, {restitution: 0.2, isStatic: true});
		World.add(world, this.umbrella);

		this.anim = loadAnimation(
			'images/Walking Frame/walking_1.png',
			'images/Walking Frame/walking_2.png',
			'images/Walking Frame/walking_3.png',
			'images/Walking Frame/walking_4.png',
			'images/Walking Frame/walking_5.png',
			'images/Walking Frame/walking_6.png',
			'images/Walking Frame/walking_7.png',
			'images/Walking Frame/walking_8.png'
		);
		this.man = createSprite(250, 700, 50, 50);
		this.man.addAnimation('man anim', this.anim);
		this.man.scale = 0.2;
	}

	display() {}
}
