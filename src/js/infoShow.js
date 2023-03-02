
function createMesh() {
  const geometry = new THREE.CubeGeometry(1, 1,1);
  const material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
  });

  const newMesh = new THREE.Mesh(geometry, material);
  newMesh.position.setZ(-3);
  // console.log(newMesh);
  
  return newMesh;
}

class InfoAsset {
  constructor(asset, textArray) {
    this.asset = asset || createMesh();
    this.infos = textArray || [];
  }
  addText(text) {
    this.infos.push(text);
  }
}

class Presentation {
  constructor(scene) {
    this.scene = scene;
    this.assets = new THREE.Object3D();
    this.assets.position.y = -1;
    // this.assets.position.setZ(20);
    // this.scene.add(this.assets);
  }
  add() {
    const infoAsset = new InfoAsset();
    this.assets.children.push(infoAsset.asset);
  }
}
