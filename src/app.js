var scene, camera, renderer, clock, deltaTime, totalTime;

var arToolkitSource, arToolkitContext;

var markerZacimba;

var mesh1;

initialize();
animate();

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
  mesh.rotation.x = 90;
  // mesh.rotation.y = 45;
  return mesh;
}

function initialize() {
  scene = new THREE.Scene();

  let ambientLight = new THREE.AmbientLight(0xcccccc, 1.0);
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
    debug: true,
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
    // maxDetectionRate: 60,
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
  markerZacimba.name = "marker1";
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
      smooth: true,
      // number of matrices to smooth tracking over, more = smoother but slower follow
      smoothCount: 5,
      // distance tolerance for smoothing, if smoothThreshold # of matrices are under tolerance, tracking will stay still
      smoothTolerance: 0.01,
      // threshold for smoothing, will keep still unless enough matrices are over tolerance
      smoothThreshold: 2,
    }
  );

  // the inside of the hole
  let geometry1 = new THREE.CubeGeometry(1, 1, 1);
  let loader = new THREE.TextureLoader();
  let texture = loader.load("assets/images/tiles.jpg");
  let material1 = new THREE.MeshLambertMaterial({
    transparent: true,
    map: texture,
    side: THREE.BackSide,
  });

  // mesh1 = new THREE.Mesh(geometry1, material1);
  // mesh1.position.y = -1;

  // mesh2 = imageAsPlane("./images/Interaction/zacimba.png");
  // mesh1.add(mesh2);
  // markerRoot1.add(mesh1);

  var model = new THREE.Object3D();
  // model.add(mesh2)
  markerZacimba.add(model);

  // var loaderGTLF = new GLTFLoader();
  // console.log(loaderGTLF);
  
  // loaderGTLF.loader(
  //   "./assets/animartions/graffiti animado - zacimba.glb",
  //   function (gltf) {
  //     console.log(gltf);
  // //     // mesh1.add(gltf.scene);
  // //     // console.log(mesh1);
  // //     // model.add(mesh1);
  //   }
  // );

  // mesh3 = imageAsPlane("./images/Interaction/zacimba-tittle.png");
  // mesh3.position.x += 10;
  // mesh1.add(mesh3);

  // the invisibility cloak (box with a hole)
  // let geometry0 = new THREE.BoxGeometry(1, 1, 1);
  // geometry0.faces.splice(4, 2); // make hole by removing top two triangles

  // let material0 = new THREE.MeshBasicMaterial({
  //   colorWrite: false,
  // });

  // let mesh0 = new THREE.Mesh(geometry0, material0);
  // mesh0.scale.set(1, 1, 1).multiplyScalar(1.01);
  // mesh0.position.y = -1;
  // markerRoot1.add(mesh0);

  ////////////////////////////////////////////////////////////
  // setup particles
  ////////////////////////////////////////////////////////////
  particle = new ParticleCloud(scene);

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
