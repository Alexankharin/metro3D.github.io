var sizex = window.innerWidth;
var sizey= window.innerHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, sizex/ sizey, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

renderer.setSize( sizex, sizey );

container = document.getElementById( 'canvas' );
document.body.appendChild( container );
container.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( .05, 32, 32 );
let materials = metro_colors.map(c => {
	return new THREE.MeshBasicMaterial( { color: c } );
});

var station_num = 268;
spheres = new Array();

for (var i = 0; i < station_num; i++) {
    var sphere = new THREE.Mesh( geometry, materials[metro_data['color'][i]] );
	sphere.name = metro_data['name'][i];
    sphere.position.set(metro_data['x'][i], metro_data['y'][i], metro_data['z'][i]);
	spheres.push(sphere);
    scene.add(sphere);
}

for (var i = 0; i < metro_links.length; i++){
    var line_geom = new THREE.Geometry();
    line_geom.vertices.push(spheres[metro_links[i]['n'][0]].position);
    line_geom.vertices.push(spheres[metro_links[i]['n'][1]].position);
    var line = new THREE.Line(line_geom, materials[metro_links[i]['c']]); 
    scene.add(line);
}


var controls = new THREE.OrbitControls( camera, renderer.domElement );

camera.position.z = 9;

function onMouseMove( event ) {
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function animate() {
	raycaster.setFromCamera( mouse, camera );

	// calculate objects intersecting the picking ray
	var intersects = raycaster.intersectObjects( spheres );
    if(intersects.length > 0) {
		document.getElementById("info").innerHTML=(intersects[ 0 ].object.name);

	}
	if (intersects.length == 0){
		document.getElementById("info").innerHTML="";
	}
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

window.addEventListener( 'mousemove', onMouseMove, false );
window.requestAnimationFrame(animate);
