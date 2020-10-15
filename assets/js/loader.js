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
//TextureLoader

//V1
let sprite = new THREE.TextureLoader().load('../assets/img/starts.png');

const material = new  THREE.PointsMaterial({
     color:0xaaaaaa,
     size:0.7,
     map:sprite
})

//V2


const material = new  THREE.PointsMaterial({
     color:0xaaaaaa,
     size:0.7,
     map:new  THREE.TextureLoader().load('../assets/img/1.jpg')
})


//font-loader
//https://gero3.github.io/facetype.js/

const fontLoader = new THREE.FontLoader();

fontLoader.load( '../assets/js/font.json', function ( font ) {

     var geometry = new THREE.TextGeometry( 'Hello three.js!', {
          font: font,
          size: 4.05,
          height: 0.01,
     } );
     const material = new   THREE.MeshBasicMaterial( {color: 0xff0000});
     const mesh = new THREE.Mesh(geometry,material);
     geometry.center();
     scene.add(mesh);
     scene.add(new THREE.AxesHelper(500,500));
});
