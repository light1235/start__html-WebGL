const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
// scene.background = new THREE.Color(0xdddddd);



let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x130135 );
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );


window.addEventListener('resize', function () {
     let width = window.innerWidth;
     let height = window.innerHeight;
     renderer.setSize(width,height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
});

import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing";
import { Clock } from "three";





let controls = new  THREE.OrbitControls(camera,renderer.domElement);



const geometry1 = new THREE.SphereGeometry( 5, 32, 32 );
const material1 = new  THREE.MeshBasicMaterial({ color: 0xa000c0, wireframe: false});


const mesh1 = new THREE.Mesh(geometry1,material1);
// mesh1.layers.enable(1);
scene.add(mesh1);
const bloomOptions = {

     // luminanceThreshold: 2.4,
     // luminanceSmoothing: 2.1,
     // height: 480
};
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new EffectPass(mesh1, new BloomEffect({
     luminanceThreshold: 0.0,
     luminanceSmoothing: 0.0,
     height: 100
})));
const clock = new Clock();


camera.position.z = 20;

const animate = function () {
     requestAnimationFrame( animate );
     // mesh.rotation.x += 0.01;
     // mesh.rotation.y += 0.01;

     renderer.render( scene, camera );
     composer.render(clock.getDelta());
};

animate();
