hlight = new THREE.AmbientLight (0x404040,100);
scene.add(hlight);


var loader = new THREE.GLTFLoader();

//standart
loader.load(
     'scene.gltf',
     function ( object ) {
          // called when the resource is loaded
          scene.add( object.scene );
     },

);


//---------------------------

var loader = new THREE.GLTFLoader();
loader.load('scene.gltf', handle_load);

var mesh;

function handle_load(gltf){
     mesh = gltf.scene.children[0];
     mesh.material = new THREE.MeshLambertMaterial();
     scene.add(mesh);
     mesh.position.z = -10;
     animate();
}

//---------------------------
let loader = new  THREE.TextureLoader();
loader.load("../assets/img/smoke-1.png", function (texture) {
     cloudGeo = new THREE.PlaneBufferGeometry(500,500);
     cloudMaterial = new  THREE.MeshLambertMaterial({
          map:texture,
          transparent: true
     })
     let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
     scene.add(cloud);
})
