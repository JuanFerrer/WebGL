var scene, camera, renderer;
var geometry, material, mesh;
var light, lightModel, lightMaterial, lightMesh;
var valueX, valueY, counter;

var isRight = false;
var isUp = false;

init();
animate();

function keyboardInit() {
	document.addEventListener("keydown", keydownAction, false);
}

function keydownAction(e) {
	var keyCode = e.which;

	// Spacebar
	if (keyCode == 32) {
		spacebarDown();
	}

}

function spacebarDown() {
	mesh.rotation.x += 0.05;
	mesh.rotation.y += 0.05;
}

function init() {

	keyboardInit();

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
	camera.position.z = 8;

	// Models
	geometry = new THREE.IcosahedronGeometry(1);
	material = new THREE.MeshLambertMaterial({ color: 0xF44336 });
	mesh = new THREE.Mesh(geometry, material);

	lightModel = new THREE.SphereGeometry(0.3, 100, 100);
	lightMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
	lightMesh = new THREE.Mesh(lightModel, lightMaterial);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x212121, 1);
	document.body.appendChild(renderer.domElement);

	// Lights
	light = new THREE.PointLight();

	scene.add(mesh);
	scene.add(light);
	scene.add(lightMesh);

	light.add(lightMesh);
}

function animate() {

	requestAnimationFrame(animate);

	if (valueX == null) valueX = 0;
	if (valueY == null) valueY = 0;
	if (counter == null) counter = 0;

	var steps = 200;
	var increase = Math.PI * 2 / steps;
	counter = counter < steps ? counter + 1 : 0

	light.position.x = 2 * Math.sin(valueX);
	light.position.y = 2 * Math.sin(valueX) / 3;
	light.position.z = 2 * -Math.cos(valueY);
	valueX += increase;
	valueY += increase;

	renderer.render(scene, camera);

}