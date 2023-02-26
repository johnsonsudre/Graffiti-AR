// Crie a classe da nuvem de partículas
class ParticleCloud {
  constructor(scene) {
    this.scene = scene;
    this.particleCount = 1000;
    this.particleGeometry = new THREE.Geometry();
    this.particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      // map: new THREE.TextureLoader().load('path/to/particle/texture.png'),
      blending: THREE.AdditiveBlending,
      transparent: true,
    });
    this.particles = new THREE.Points(
      this.particleGeometry,
      this.particleMaterial
    );
    this.generateParticles();
  }

  // Método para gerar as partículas
  generateParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 100;
      const color =
        "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);
      this.particleMaterial.color.set(color);
      this.particleGeometry.vertices.push(new THREE.Vector3(x, y, z));
    }
    this.scene.add(this.particles);
  }

  // Método para atualizar a posição das partículas
  update(deltaTime) {
    for (let i = 0; i < this.particleCount; i++) {
      const particle = this.particleGeometry.vertices[i];
      particle.y -= deltaTime * 1.1 * (Math.random() - 0.5); // velocidade de queda das partículas
      var randNum = Math.random();
      var side = randNum > 0.5 ? 0.6 : 0.4;
      particle.x += (randNum - side) * 0.05; // Altera a posição aleatoriamente

      if (particle.y < -25) {
        particle.y = 25;
      }
    }
    this.particleGeometry.verticesNeedUpdate = true;
  }
}
