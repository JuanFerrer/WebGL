var scene, camera, renderer;
var geometry, material, mesh;
var light, lightModel, lightMaterial, lightMesh;
var valueX, valueY, counter;

var isRight = false;
var isUp = false;

init();
animate();

function init() {

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
	light.position.set(2, 0, 0);

	scene.add(mesh);
	scene.add(light);
	scene.add(lightMesh);
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
	light.position.z = 2 * -Math.cos(valueY);
	valueX += increase;
	valueY += increase;


	light.add(lightMesh);

	renderer.render(scene, camera);

}