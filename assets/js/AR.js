import * as THREE from 'three/build/three.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 40);


let renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.xr.enabled = true;
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );
document.body.appendChild( ARButton.createButton( renderer ) );

window.addEventListener('resize', function () {
     let width = window.innerWidth;
     let height = window.innerHeight;
     renderer.setSize(width,height);
     renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
});


let light = new THREE.DirectionalLight(0xffffff, 1);
light.position.setScalar(1);
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));
scene.add(new THREE.GridHelper(20, 20));


let controls = new  OrbitControls(camera,renderer.domElement);


const geometry = new THREE.BoxGeometry( 1,1,1 );
const material = new  THREE.MeshNormalMaterial({});

const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);
mesh.position.set(0, -1.5, -2.5);


const clock = new THREE.Clock();

const animate = function () {
     requestAnimationFrame( animate );
     // controls.update();
     mesh.rotation.y = clock.getElapsedTime();
     // mesh.rotation.y += 0.01;

     // mesh.rotation.y += ball.rotationY;
     renderer.render( scene, camera );
};

animate();

