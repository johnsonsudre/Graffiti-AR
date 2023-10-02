//////////////////////////////////////////////////////////////////////////////////
//		Inicia Threejs
//////////////////////////////////////////////////////////////////////////////////

console.log("Inicia app");

let debug = document.getElementById("debug");
debug.visible = false;
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
scene.visible = false;

//////////////////////////////////////////////////////////////////////////////////
//		Insere alguns objetos na cena
//////////////////////////////////////////////////////////////////////////////////

var root = new THREE.Object3D();
scene.add(root);

const axesHelper = new THREE.AxesHelper(5);
root.add(axesHelper);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

//////////////////////////////////////////////////////////////////////////////////
//		Inicia uma camera básica
//////////////////////////////////////////////////////////////////////////////////

// Cria uma camera
var camera = new THREE.Camera();
camera.near = 0.01;
camera.far = 10000;
scene.add(camera);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

////////////////////////////////////////////////////////////////////////////////
//          Inicia arToolkitSource
////////////////////////////////////////////////////////////////////////////////

var arToolkitSource = new THREEx.ArToolkitSource({
  sourceType: "webcam",
  // sourceWidth: 480,
  // sourceHeight: 640,
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
  console.log(ev.target);
  // console.log(ev);
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
    // canvasWidth: 480,
    // canvasHeight: 640,
    // debug: true,
    maxDetectionRate: 60,
    imageSmoothingEnabled: true,
  },
  {
    // sourceWidth: 480,
    // sourceHeight: 640,
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
  // size of the marker in meter
  size: 0.18,
  type: "nft",
  // descriptorsUrl: "data/dataNFT/pinball",
  descriptorsUrl: "data/dataTeste/teste3",
  changeMatrixMode: "cameraTransformMatrix",
  smooth: true,
  smoothCount: 5,
  smoothThreshold: 2,
  smoothTolerance: 0.01,
  minConfidence: 0.6,
});

// cube.position.copy(camera.position);

//////////////////////////////////////////////////////////////////////////////////
// Adiciona um ouvinte para detectar quando o marcador é rastreado
//////////////////////////////////////////////////////////////////////////////////

markerControls.addEventListener("markerFound", function (event) {
  // Acesse o objeto de marcador rastreado
  var marker = event.target;
  console.log(marker);

  // Obtenha as dimensões do marcador "NFT"
  // var markerWidth = marker.m_width;
  // var markerHeight = marker.m_height;

  // console.log("Largura do marcador NFT: " + markerWidth);
  // console.log("Altura do marcador NFT: " + markerHeight);

  // Agora você pode usar markerWidth e markerHeight conforme necessário
});

//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////

var threeGLTFLoader = new THREE.GLTFLoader();
var model;

threeGLTFLoader.load("./resources/gem-ufes.glb", function (gltf) {
  model = gltf.scene.children[0];
  model.name = "gem-ufes";
  // const clips = gltf.animations;

  // var animation = gltf.animations[0];
  // var mixer = new THREE.AnimationMixer(gltf.scene);
  // mixers.push(mixer);
  // const clip = THREE.AnimationClip.findByName(clips, "flamingo_flyA_");
  // var action = mixer.clipAction(clip);
  // action.play();

  root.matrixAutoUpdate = false;
  root.add(model);

  // model.position.z = -100;
  //model.position.z = 100;

  window.addEventListener("arjs-nft-init-data", function (nft) {
    console.log(nft);
    // var msg = nft.detail;
    // model.position.y = ((msg.height / msg.dpi) * 2.54 * 10) / 2.0; //y axis?
    // model.position.x = ((msg.width / msg.dpi) * 2.54 * 10) / 2.0; //x axis?
  });

  //////////////////////////////////////////////////////////////////////////////////
  //		stabilização da camera
  //////////////////////////////////////////////////////////////////////////////////

  // Variáveis para suavização
  const smoothing = 0.2; // Valor de suavização (ajuste conforme necessário)
  let positionSmoothed = new THREE.Vector3(); // Posição suavizada

  // Função para atualizar a posição do marcador suavizada
  function updatePositionSmoothed(newPosition) {
    positionSmoothed.lerp(newPosition, smoothing);
  }

  //////////////////////////////////////////////////////////////////////////////////
  //		renderizar dudo na pagina
  //////////////////////////////////////////////////////////////////////////////////

  var animate = function () {
    requestAnimationFrame(animate);

    // if (mixers.length > 0) {
    //   for (var i = 0; i < mixers.length; i++) {
    //     mixers[i].update(clock.getDelta());
    //   }
    // }

    if (!arToolkitSource.ready) {
      return;
    }

    arToolkitContext.update(arToolkitSource.domElement);

    // update scene.visible if the marker is seen
    scene.visible = camera.visible;

    if (markerControls.object3d.visible) {
      // Obtenha a matriz de transformação do marcador
      const markerMatrix = markerControls.object3d.matrixWorld;
      // Atualize a posição do retângulo com base na posição do marcador
      const markerPosition = new THREE.Vector3();
      markerMatrix.decompose(
        markerPosition,
        new THREE.Quaternion(),
        new THREE.Vector3()
      );
      // updatePositionSmoothed(markerPosition);
      // rectangle.position.copy(positionSmoothed);

      // rectangle.position.setFromMatrixPosition(markerMatrix);
      // rectangle.quaternion.setFromRotationMatrix(markerMatrix);
      debug.style.display = "block";
      debug.innerText = JSON.stringify("TEXTO");
    } else debug.style.display = "none";

    renderer.render(scene, camera);
  };

  requestAnimationFrame(animate);
});
