//set up scene, camera, renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//create a sphere
var geometry = new THREE.SphereGeometry(2,30,30);
var material = new THREE.MeshPhongMaterial({ ambient: 0x00ff00, color: 0xffffff, specular: 0x111111, shininess: 30, shading: THREE.SmoothShading, wireframe: true });
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 5;

var light1 = new THREE.PointLight(0x277198);
light1.add( new THREE.Mesh( new THREE.SphereGeometry(0.1, 16, 8), new THREE.MeshBasicMaterial( { color: 0x277198 } ) ) );
light1.position.set(0,0,0);
scene.add(light1);

var light2 = new THREE.PointLight(0xe53030);
light2.add( new THREE.Mesh( new THREE.SphereGeometry(0.1, 16, 8), new THREE.MeshBasicMaterial( { color: 0xe53030 } ) ) );
light2.position.set(0,0,0);
scene.add(light2);

var light3 = new THREE.PointLight(0x0db815);
light3.add( new THREE.Mesh( new THREE.SphereGeometry(0.1, 16, 8), new THREE.MeshBasicMaterial( { color: 0x0db815 } ) ) );
light3.position.set(0,0,0);
scene.add(light3);

//renderer function
function render() {
	var distance = 5;
	var time = Date.now()*0.005;
	requestAnimationFrame(render);
	//light1.intensity = (Math.sin(time*0.5)+1)/2
	light1.position.x = Math.sin(time*0.7)*distance;
	light1.position.y = Math.cos(time*0.7)*distance;
	
	//light2.intensity = (Math.sin(time*0.5)+1)/2
	light2.position.x = Math.sin(time*0.7)*distance;
	light2.position.z = Math.cos(time*0.7)*distance;
	
	light3.position.x = Math.cos(time*0.4)*distance;
	light3.position.y = Math.sin(time*0.3)*3;
	light3.position.z = Math.cos(time*0.2)*2;
	
	sphere.rotation.x += 0.02;
	sphere.rotation.y += 0.02;
	
	sphere.position.x = Math.sin(time*0.3);
	//sphere.position.y = Math.cos(time*0.4);
	sphere.position.z = Math.cos(time*0.3);
	renderer.render(scene, camera);
}



render();