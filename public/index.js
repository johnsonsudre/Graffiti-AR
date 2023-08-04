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
    // tipo de fonte - ['webcam', 'image', 'video']
    sourceType: "webcam",
  });

  function onResize() {
    arToolkitSource.onResizeElement();
    arToolkitSource.copyElementSizeTo(renderer.domElement);
    if (arToolkitContext.arController !== null) {
      arToolkitSource.domElement.style.display = "none";
      arToolkitSource.copyElementSizeTo(arToolkitContext.arController.canvas);
      arToolkitContext.arController.canvas.setAttribute(
        "willReadFrequently",
        "true"
      );
      // console.log(arToolkitContext.arController.canvas);
    }
  }

  arToolkitSource.init(function onReady() {
    onResize();
  });

  // lida com evento de redimensionamento
  window.addEventListener("resize", function () {
    onResize();
  });

  ////////////////////////////////////////////////////////////
  // configurar arToolkitContext
  ////////////////////////////////////////////////////////////

  // criar atToolkitContext
  arToolkitContext = new THREEx.ArToolkitContext({
    // debug - verdadeiro se for necessário exibir a tela de depuração do artoolkit, caso contrário, falso
    // debug: true,
    // o modo de detecao - ['color', 'color_and_matrix', 'mono', 'mono_and_matrix']
    detectionMode: "mono",
    // type of matrix code - valid iif detectionMode end with 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
    // tipo do código de matriz - tipo de código de matriz - válido se o detectionMode terminar com 'matrix' - [3x3, 3x3_HAMMING63, 3x3_PARITY65, 4x4, 4x4_BCH_13_9_3, 4x4_BCH_13_5_5]
    matrixCodeType: "4x4",
    // Taxa de padrão para marcadores personalizados
    patternRatio: 0.5,
    // Modo de rotulagem para marcadores - ['black_region', 'white_region']
    // // black_region: Marcadores com borda preta sobre fundo branco, white_region: Marcadores com borda branca sobre fundo preto
    // labelingMode: "black_region",
    // URL dos parâmetros da câmera
    cameraParametersUrl: "data/camera_para.dat",
    // ajusta a taxa máxima de detecção de pose na imagem de origem
    // maxDetectionRate: 30,
    // // resolução na qual detectamos a pose na imagem de origem
    // canvasWidth: 640,
    // canvasHeight: 480,
    // habilitar a suavização de imagem ou não para cópia de tela - padrão para verdadeiro
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
    imageSmoothingEnabled: true,
  });

  // copia a matriz de projeção para a câmera quando a inicialização é concluída
  arToolkitContext.init(function onCompleted() {
    camera.projectionMatrix.copy(arToolkitContext.getProjectionMatrix());
  });

  ////////////////////////////////////////////////////////////
  // configura markerRoots
  ////////////////////////////////////////////////////////////

  // constroi markerControls
  markerZacimba = new THREE.Group();
  markerZacimba.name = "zacimba";
  scene.add(markerZacimba);
  let markerControls1 = new THREEx.ArMarkerControls(
    arToolkitContext,
    markerZacimba,
    {
      // tamanho do marcador em metro
      // size: 1,
      // tipo de marcador - ['pattern', 'barcode', 'unknown' ]
      type: "pattern",
      // url do padrão - SE type='pattern'
      patternUrl: "data/ananse-ntontan.patt",
      // valor da barra de codigo - SE type='barcode'
      // barcodeValue: null,
      // muda o modo de matriz - [modelViewMatrix, cameraTransformMatrix]
      changeMatrixMode: "modelViewMatrix",
      // ativar/desativar a suavização da câmera
      // smooth: true,
      // número de matrizes para suavizar o rastreamento, mais = acompanhamento mais suave, mas mais lento
      // smoothCount: 5,
      // tolerância de distância para suavização, se # de matrizes smoothThreshold estiver abaixo da tolerância, o rastreamento permanecerá parado
      // smoothTolerance: 0.01,
      // limite para suavização, permanecerá imóvel, a menos que matrizes suficientes estejam acima da tolerância
      // smoothThreshold: 2,
    }
  );

  var markerModel = new THREE.Object3D();

  var loader = new THREE.GLTFLoader();
  loader.crossOrigin = true;
  // console.log(loader);

  // carrega ambiente
  loader.load("/assets/animations/graffiti-animado-v4.glb", function (data) {
    var object = data.scene;
    object.rotation.x = Math.PI / 2;
    object.rotation.y = Math.PI;
    markerModel.add(object);
  });

  markerZacimba.add(markerModel);

  ////////////////////////////////////////////////////////////
  // configura particulas
  ////////////////////////////////////////////////////////////
  particle = new ParticleCloud(scene, "/assets/images/dust.png");

  ////////////////////////////////////////////////////////////
  // cria informacoes interativas
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
