<template>
    <div ref="container" :class="className"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { stars, constellations, type Star } from './constants';

const props = defineProps({
    className: {
      type: String,
      default: ''
    }
});
  
const container = ref<HTMLDivElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.OrthographicCamera;
let renderer: THREE.WebGLRenderer;
let starField: THREE.Group;
  
onMounted(() => {
    initThree();
    animate();
    window.addEventListener('resize', onWindowResize);
});
  
onBeforeUnmount(() => {
    window.removeEventListener('resize', onWindowResize);
    if (renderer) {
      renderer.dispose();
    }
});

function animate() {
    requestAnimationFrame(animate);

    // Update all star animations
    starField.children.forEach(child => {
        if (child.userData.update) {
            child.userData.update();
        }
    });

    renderer.render(scene, camera);
}

function initThree() {
    scene = new THREE.Scene();
    
    const aspect = 881 / 211;
    const frustumSize = 211;
    camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2, 
      frustumSize * aspect / 2, 
      frustumSize / 2, 
      frustumSize / -2, 
      0.1, 
      1000
    );
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    if (container.value) {
      const { width, height } = container.value.getBoundingClientRect();
      renderer.setSize(width, height);
      container.value.appendChild(renderer.domElement);
    }
  
    starField = new THREE.Group();
    scene.add(starField);
  
    createStars();
    createConstellations();
  
    camera.position.z = 100;
    
    // Scale the entire starField to fit within the viewport
    const scale = Math.min(window.innerHeight / 211, window.innerWidth * 0.5 / 881);
    starField.scale.setScalar(scale);
}
  
function createStars() {
    stars.forEach((star) => {
      const [x, y, dim, blur] = star;
      const starGeometry = new THREE.CircleGeometry(dim ? 0.5 : 1, 32);
      const starMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        transparent: true, 
        opacity: dim ? 0.2 : 0.5
      });
      const starMesh = new THREE.Mesh(starGeometry, starMaterial);
      
      starMesh.position.set(x - 881/2, 211/2 - y, 0);
      
      if (blur) {
        const blurMaterial = new THREE.MeshBasicMaterial({ 
          color: 0xffffff, 
          transparent: true, 
          opacity: 0.1
        });
        const blurMesh = new THREE.Mesh(new THREE.CircleGeometry(1.5, 32), blurMaterial);
        blurMesh.position.copy(starMesh.position);
        starField.add(blurMesh);
      }
      
      starField.add(starMesh);
  
      // Animation
      animateStar(starMesh, dim);
    });
}
  
function createConstellations() {
    constellations.forEach((constellation) => {
        const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });
        const points = constellation.map(([x, y]) => new THREE.Vector3(x - 881/2, 211/2 - y, 0));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        starField.add(line);
    });
}
  
function animateStar(star: THREE.Mesh, dim: boolean | undefined) {
    const initialScale = dim ? 0.8 : 1;
    const targetScale = initialScale * 1.2;
    const duration = Math.random() * 2 + 2;
    let time = Math.random() * Math.PI * 2; // Random start time
  
    function update() {
      time += 0.016; // Assuming 60fps
      const scale = initialScale + (Math.sin(time / duration) + 1) / 2 * (targetScale - initialScale);
      star.scale.setScalar(scale);
    }
  
    // Add the update function to the animation loop
    renderer.setAnimationLoop(() => {
      update();
      renderer.render(scene, camera);
    });
}
  
function onWindowResize() {
    if (container.value) {
      const { width, height } = container.value.getBoundingClientRect();
      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
  
      // Rescale the starField to fit within the new viewport
      const scale = Math.min(height / 211, width * 0.5 / 881);
      starField.scale.setScalar(scale);
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
}
</style>