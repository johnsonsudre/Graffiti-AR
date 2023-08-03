var scene, camera, renderer, clock, deltaTime, totalTime;
var arToolkitSource, arToolkitContext;
var markerZacimba;
var mesh;

initialize();
animate();

const arButton = document.getElementById("ar-button");
const introDiv = document.getElementById("intro");

arButton.addEventListener("click", () => {
  introDiv.style.display = "none";
  arToolkitSource.domElement.style.display = "block";
});

function imageAsPlane(url) {
  // cria um plano a partir da textura informada
  let loader = new THREE.TextureLoader();
  let texture = loader.load(url);
  let material = new THREE.MeshLambertMaterial({
    transparent: true,
    map: texture,
    side: THREE.BackSide,
  });

  let geometry = new THREE.PlaneGeometry(1, 1);
  let mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function initialize() {
  scene = new THREE.Scene();

  let ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
  scene.add(ambientLight);

  camera = new THREE.Camera();
  scene.add(camera);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
  });

  renderer.setClearColor(new THREE.Color("lightgrey"), 0);
  renderer.setSize(640, 480);
  renderer.domElement.style.position = "absolute";
  renderer.domElement.style.top = "0px";
  renderer.domElement.style.left = "0px";
  renderer.domElement.style["z-index"] = -1;
  // console.log(renderer.domElement.style);
  document.body.appendChild(renderer.domElement);

  clock = new THREE.Clock();
  deltaTime = 0;
  totalTime = 0;

  ////////////////////////////////////////////////////////////
  // setup arToolkitSource
  ////////////////////////////////////////////////////////////

  arToolkitSource = new THREEx.ArToolkitSource({
    // type of source - ['webcam', 'image', 'video']
    sourceType: "webcam",
  });

  function onResize() {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.domElement.style.display = "none";
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
    }
  }

  arToolkitSource.init(function onReady() {
    onResize();
  });

  // handle resize event
  window.addEventListener("resize", function () {
    onResize();
  });

  ////////////////////////////////////////////////////////////
  // setup arToolkitContext
  ////////////////////////////////////////////////////////////

  // create atToolkitContext
  arToolkitContext = new THREEx.ArToolkitContext({
    // debug - true if one should display artoolkit debug canvas, false otherwise
    // debug: true,
    // the mode of detection - ['color', 'color_and_matrix', 'mono', 'mono_and_matrix']
    detectionMode: "mono",
    // type of matrix code - valid iif detectionMode end with 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
    matrixCodeType: "4x4",
    // Pattern ratio for custom markers
    patternRatio: 0.5,
    // Labeling mode for markers - ['black_region', 'white_region']
    // black_region: Black bordered markers on a white background, white_region: White bordered markers on a black background
    // labelingMode: "black_region",
    // url of the camera parameters
    cameraParametersUrl: "data/camera_para.dat",
    // tune the maximum rate of pose detection in the source image
    // maxDetectionRate: 30,
    // // resolution of at which we detect pose in the source image
    // canvasWidth: 640,
    // canvasHeight: 480,
    // enable image smoothing or not for canvas copy - default to true
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
    imageSmoothingEnabled: true,
  });

  // copy projection matrix to camera when initialization complete
  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  ////////////////////////////////////////////////////////////
  // setup markerRoots
  ////////////////////////////////////////////////////////////

  // build markerControls
  markerZacimba = new THREE.Group();
  markerZacimba.name = "zacimba";
  scene.add(markerZacimba);
  let markerControls1 = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerZacimba,
    {
      // size of the marker in meter
      // size: 1,
      // type of marker - ['pattern', 'barcode', 'unknown' ]
      type: "pattern",
      // url of the pattern - IIF type='pattern'
      patternUrl: "data/ananse-ntontan.patt",
      // value of the barcode - IIF type='barcode'
      // barcodeValue: null,
      // change matrix mode - [modelViewMatrix, cameraTransformMatrix]
      changeMatrixMode: "modelViewMatrix",
      // turn on/off camera smoothing
      // smooth: true,
      // number of matrices to smooth tracking over, more = smoother but slower follow
      // smoothCount: 5,
      // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
      // smoothTolerance: 0.01,
      // threshold for smoothing, will keep still unless enough matrices are over tolerance
      // smoothThreshold: 2,
    }
  );

  var markerModel = new THREE.Object3D();

  var loader = new THREE.GLTFLoader();
  loader.crossOrigin = true;
  // console.log(loader);

  loader.load("/assets/animations/graffiti-animado-v4.glb", function (data) {
    var object = data.scene;
    object.rotation.x = Math.PI / 2;
    object.rotation.y = Math.PI;
    markerModel.add(object);
  });

  markerZacimba.add(markerModel);

  ////////////////////////////////////////////////////////////
  // setup particles
  ////////////////////////////////////////////////////////////
  particle = new ParticleCloud(scene, "/assets/images/dust.png");

  ////////////////////////////////////////////////////////////
  // presentation
  ////////////////////////////////////////////////////////////
  presentation = new Presentation(scene);
  presentation.add();
  // console.log(presentation.assets.children[0]);
  // markerRoot1.add(presentation.assets);
}

function update() {
  // update artoolkit on every frame
  if (arToolkitSource.ready !== false)
    arToolkitContext.update(arToolkitSource.domElement);
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  requestAnimationFrame(animate);
  deltaTime = clock.getDelta();
  totalTime += deltaTime;
  particle.update(0.01);
  update();
  render();
}
