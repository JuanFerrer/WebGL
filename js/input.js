//http://keycode.info/

var modelRotSpeed = 0.05;

var camMoveSpeed = 0.1;
var camRotSpeed = 0.01;

function keyboardInit() {
	document.addEventListener("keydown", keydownAction, false);
}

function keydownAction(e) {
	var keyCode = e.which;

	// Spacebar
	if (keyCode == 32) {
		spacebarDown();
	}

	// Left
	if (keyCode == 37) {
		move("left");
	}
	// Right
	if (keyCode == 39) {
		move("right");
	}
	// Up
	if (keyCode == 38) {
		move("front");
	}
	// Down
	if (keyCode == 40) {
		move("back");
	}

	// A
	if (keyCode == 65) {
		rotate("left");
	}
	// D
	if (keyCode == 68) {
		rotate("right");
	}
	// W
	if (keyCode == 87) {
		rotate("up");
	}
	// S
	if (keyCode == 83) {
		rotate("down");
	}

}

function spacebarDown() {
	cube.rotation.x += modelRotSpeed;
	cube.rotation.y += modelRotSpeed;
}

// LOCAL!!
function move(dir) {
	switch (dir) {
		case "left":
			camera.position.x -= camMoveSpeed
			break;
		case "right":
			camera.position.x += camMoveSpeed
			break;
		case "front":
			camera.position.z -= camMoveSpeed
			break;
		case "back":
			camera.position.z += camMoveSpeed
			break;
	}
}

// LOCAL!!
function rotate(dir) {
	switch (dir) {
		case "left":
			camera.rotation.y += camRotSpeed
			break;
		case "right":
			camera.rotation.y -= camRotSpeed
			break;
		case "up":
			camera.rotation.x += camRotSpeed
			break;
		case "down":
			camera.rotation.x -= camRotSpeed
			break;
	}
}