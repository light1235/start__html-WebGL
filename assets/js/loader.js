
//Model-loader/////////////////////////////////////////////////////////
hlight = new THREE.AmbientLight (0x404040,100);
scene.add(hlight);
{
     const loader = new THREE.GLTFLoader();

//standart
     loader.load(
          'scene.gltf',
          function ( object ) {
               // called when the resource is loaded
               scene.add( object.scene );
          },

     );

}


//---------------------------

//Model-loader-V2//////////////////////////////////////////////////////////
let loader = new THREE.GLTFLoader();
loader.load('scene.gltf', handle_load);

let mesh;

function handle_load(gltf){
     mesh = gltf.scene.children[0];
     mesh.material = new THREE.MeshLambertMaterial();
     scene.add(mesh);
     mesh.position.z = -10;
     animate();
}

//---------------------------
//TextureLoader////////////////////////////////////////////////////////
let sprite = new THREE.TextureLoader().load('../assets/img/starts.png');

const material = new  THREE.PointsMaterial({
     color:0xaaaaaa,
     size:0.7,
     map:sprite 
})
//TextureLoaderV2/////////////////////////////////////////////////////////////

{
     const material = new  THREE.PointsMaterial({
          color:0xaaaaaa,
          size:0.7,
          map:new  THREE.TextureLoader().load('../assets/img/1.jpg')
     })
}
// TextureLoader preload
let sprite = new THREE.TextureLoader();
sprite.load('../assets/img/1.jpg', function(materials){
     materials.preload();
}

//TextureLoader V3///////////////////////

const cubemap = new THREE.CubeTextureLoader()
     .setPath( `${assetPath}skybox1_` )
     .load( [
          'px.jpg',
          'nx.jpg',
          'py.jpg',
          'ny.jpg',
          'pz.jpg',
          'nz.jpg'
     ] );

scene.background = cubemap;

const material = new  THREE.MeshStandardMaterial({
     envMap: sprite,
});


//font-loader////////////////////////////////////////////////////////////

{
     let loader = new THREE.FontLoader();

     loader.load( '../assets/js/font.json', function ( font ) {

          var geometry = new THREE.TextGeometry( 'Hello three.js!', {
               font: font,
               size: 4.05,
               height: 0.01,
          } );
          const material = new   THREE.MeshBasicMaterial( {color: 0xff0000});
          const mesh = new THREE.Mesh(geometry,material);
          // mesh.position.x = 2 / window.innerWidth;
          geometry.center();
          // mesh.position.y = window.innerHeight / 4;
          scene.add(mesh);
          scene.add(new THREE.AxesHelper(500,500));
     } );
}


//font-loader with mesh Accessing

{
     let text;

     fontLoader.load(
          '../assets/js/font.json',
          function(font) {
               var geometry = new THREE.TextGeometry('BLASTER!', {
                    font: font,
                    size: 8.2,
                    height: 3,
               });
               var material = new THREE.MeshBasicMaterial({color: 0xff0000});
               text = new THREE.Mesh(geometry, material);
               geometry.center();
               scene.add(text);
          },
     );
}
