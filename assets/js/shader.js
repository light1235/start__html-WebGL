const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );




let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xFFFCFF);
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );


window.addEventListener('resize', function () {
     let width = window.innerWidth;
     let height = window.innerHeight;
     renderer.setSize(width,height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
});


let ball = {
     rotationY:0,
}

import fragmentShader from '../shaders/fragment.glsl';
import  vertexShader from '../shaders/vertex.glsl';


let gui = new dat.GUI();
gui.add(ball,'rotationY').min(-0.2).max(0.2).step(0.001);
let controls = new  THREE.OrbitControls(camera,renderer.domElement);



const geometry = new THREE.BoxGeometry( 5,5,5 );
// const material = new  THREE.MeshNormalMaterial({wireframe: true});
const material = new  THREE.ShaderMaterial({
          fragmentShader,
          vertexShader,
          uniforms: {
            time: { value: 0}
          },
     });
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);



camera.position.z = 20;

const animate = function () {
     requestAnimationFrame( animate );
     // mesh.rotation.x += 0.01;
     // mesh.rotation.y += 0.01;
     mesh.rotation.y += ball.rotationY;
     renderer.render( scene, camera );
};

animate();
