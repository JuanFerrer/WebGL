var scene, camera, renderer;
var cubeG, cubeM, cube;
var light, lightG, lightM, lightMesh, lightColor;
var light2, lightM2, lightMesh2, lightColor2;
var light3, lightM3, lightMesh3, lightColor3;
var valueX, valueY, counter;

var isRight = false;
var isUp = false;

init();
animate();



function init() {

	keyboardInit();

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 100);
	camera.position.z = 10;

	// Models
	cubeG = new THREE.IcosahedronGeometry(1);
	cubeM = new THREE.MeshLambertMaterial({ color: 0xF44336 });
	cube = new THREE.Mesh(cubeG, cubeM);

	lightG = new THREE.SphereGeometry(0.3, 100, 100);
	lightColor = 0x3F51B5;
	lightM = new THREE.MeshBasicMaterial({ color: lightColor });
	lightMesh = new THREE.Mesh(lightG, lightM);

	lightColor2 = 0xFFFFFF
	lightM2 = new THREE.MeshBasicMaterial({ color: lightColor2 });
	lightMesh2 = new THREE.Mesh(lightG, lightM2);

	lightColor3 = 0x4CAF50;
	lightM3 = new THREE.MeshBasicMaterial({ color: lightColor3 });
	lightMesh3 = new THREE.Mesh(lightG, lightM3);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x212121, 1);
	document.body.appendChild(renderer.domElement);

	// Lights
	light = new THREE.PointLight(lightColor);
	light2 = new THREE.PointLight();
	light3 = new THREE.PointLight(lightColor3);

	light.add(lightMesh);
	light2.add(lightMesh2);
	light3.add(lightMesh3);

	scene.add(cube);
	scene.add(light);
	scene.add(light2);
	scene.add(light3)

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

	light2.position.x = 3.2 * Math.cos(valueX);
	light2.position.y = 2 * Math.sin(valueX);
	light2.position.z = 3.2 * Math.sin(valueY);

	light3.position.x = 5 * -Math.cos(valueX);
	light3.position.y = 2 * -Math.cos(valueX);
	light3.position.z = 2 * Math.sin(valueY);

	valueX += increase;
	valueY += increase;

	renderer.render(scene, camera);

}