//////////////////////////////////////////////////////////////////////////////////
//		Inicia Threejs
//////////////////////////////////////////////////////////////////////////////////

console.log("Inicia app");

var renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  precision: "mediump",
});

var clock = new THREE.Clock();

var mixers = [];

renderer.setPixelRatio(window.devicePixelRatio);

renderer.setClearColor(new THREE.Color("lightgrey"), 0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0px";
renderer.domElement.style.left = "0px";
document.body.appendChild(renderer.domElement);

// inicia cena e camera
var scene = new THREE.Scene();

//////////////////////////////////////////////////////////////////////////////////
//		Inicia uma camera básica
//////////////////////////////////////////////////////////////////////////////////

// Cria uma camera
var camera = new THREE.Camera();
scene.add(camera);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

////////////////////////////////////////////////////////////////////////////////
//          Inicia arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
  sourceType: "webcam",
  sourceWidth: 480,
  sourceHeight: 640,
});

arToolkitSource.init(function onReady() {
  // usa um redimensionador para telas de dispositivos móveis
  setTimeout(function () {
    onResize();
  }, 1000);
});

// Define redimensionador para o event listener "resize"
window.addEventListener("resize", function () {
  onResize();
});

// listener para carregamento final do marcador NFT
window.addEventListener("arjs-nft-loaded", function (ev) {
  console.log(ev);
});

// redimensionador
function onResize() {
  arToolkitSource.onResizeElement();
  arToolkitSource.copyElementSizeTo(renderer.domElement);
  if (arToolkitContext.arController !== null) {
    arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
  }
}

////////////////////////////////////////////////////////////////////////////////
//          Inicia arToolkitContext
////////////////////////////////////////////////////////////////////////////////

// cria atToolkitContext
var arToolkitContext = new THREEx.ArToolkitContext(
  {
    detectionMode: "mono",
    canvasWidth: 480,
    canvasHeight: 640,
  },
  {
    sourceWidth: 480,
    sourceHeight: 640,
  }
);

// inicia ele
arToolkitContext.init(function onCompleted() {
  // copia matriz de projeção do arToolkitContext para câmera
  camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
});

////////////////////////////////////////////////////////////////////////////////
//          Cria um ArMarkerControls
////////////////////////////////////////////////////////////////////////////////

// inicia controles para a camera
var markerControls = new THREEx.ArMarkerControls(arToolkitContext, camera, {
  type: "nft",
  // descriptorsUrl: "data/dataNFT/pinball",
  descriptorsUrl: "data/dataGEM/erika",
  changeMatrixMode: "cameraTransformMatrix",
});

scene.visible = false;

var root = new THREE.Object3D();
scene.add(root);

//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////

var threeGLTFLoader = new THREE.GLTFLoader();
var model;

threeGLTFLoader.load("./resources/Flamingo.glb", function (gltf) {
  model = gltf.scene.children[0];
  model.name = "Flamingo";
  const clips = gltf.animations;

  var animation = gltf.animations[0];
  var mixer = new THREE.AnimationMixer(gltf.scene);
  mixers.push(mixer);
  const clip = THREE.AnimationClip.findByName(clips, "flamingo_flyA_");
  var action = mixer.clipAction(clip);
  action.play();

  root.matrixAutoUpdate = false;
  root.add(model);

  model.position.z = -100;
  //model.position.z = 100;

  window.addEventListener("arjs-nft-init-data", function (nft) {
    console.log(nft);
    var msg = nft.detail;
    model.position.y = ((msg.height / msg.dpi) * 2.54 * 10) / 2.0; //y axis?
    model.position.x = ((msg.width / msg.dpi) * 2.54 * 10) / 2.0; //x axis?
  });

  //////////////////////////////////////////////////////////////////////////////////
  //		render the whole thing on the page
  //////////////////////////////////////////////////////////////////////////////////

  var animate = function () {
    requestAnimationFrame(animate);

    if (mixers.length > 0) {
      for (var i = 0; i < mixers.length; i++) {
        mixers[i].update(clock.getDelta());
      }
    }

    if (!arToolkitSource.ready) {
      return;
    }

    arToolkitContext.update(arToolkitSource.domElement);

    // update scene.visible if the marker is seen
    scene.visible = camera.visible;

    renderer.render(scene, camera);
  };

  requestAnimationFrame(animate);
});
