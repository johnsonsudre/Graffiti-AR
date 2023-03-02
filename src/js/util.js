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