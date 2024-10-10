<template>
    <div ref="container" :class="className"></div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import GUI from 'lil-gui'
import { stars, constellations, type Star } from './constants';

const props = defineProps({
    className: {
      type: String,
      default: ''
    }
});

const container = ref<HTMLDivElement | null>(null);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let starField: THREE.Group;
  
// const gui = new GUI({
//     title: 'Star Field',
//     width: 300
// });

onMounted((): void => {
    console.log('mounted');
    initThree();
    animate(); // Start animation loop
    window.addEventListener('resize', onWindowResize);
});
  
onBeforeUnmount((): void => {
    window.removeEventListener('resize', onWindowResize);
    if (renderer) {
      renderer.dispose();
    }
});

const animate = () : void => {
    requestAnimationFrame(animate);

    // Update all star and line animations
    starField.children.forEach(child => {
        if (child.userData.update) {
            child.userData.update();  // Update stars and lines
        }
    });

    renderer.render(scene, camera); // Render the scene with updated positions
}

const animateStar = (star: THREE.Mesh) : void => {
    const initialPosition = star.position.clone();
    const floatAmplitude = 1.5;
    const floatSpeed = Math.random() * 0.5 + 0.2;
    let time = Math.random() * Math.PI * 2;

    function update() {
        time += .04 * floatSpeed;

        const offsetX = floatAmplitude * Math.sin(time);
        const offsetY = floatAmplitude * Math.sin(time + Math.PI / 2);

        star.position.x = initialPosition.x + offsetX;
        star.position.y = initialPosition.y + offsetY;
    }

    star.userData.update = update;
}

const animateLine = (line: THREE.Line, constellation: Array<[number, number]>): void => {
    // Update line geometry in an animation loop
    const updateLine = () => {
        const positions = (line.geometry as THREE.BufferGeometry).attributes.position.array;
        constellation.forEach(([x, y], index) => {
            positions[index * 3] = x - 881 / 2; // x
            positions[index * 3 + 1] = 211 / 2 - y; // y
            positions[index * 3 + 2] = 0; // z
        });
        line.geometry.attributes.position.needsUpdate = true; // Notify Three.js that the positions have changed
    };

    // Add your animation loop logic here to call updateLine
    // For example, if you're using a requestAnimationFrame loop:
    const animate = () => {
        updateLine();
        requestAnimationFrame(animate);
    };
    animate();
};


const initThree = () : void => {
    scene = new THREE.Scene();
    
    // Perspective camera setup
    const aspect = window.innerWidth / window.innerHeight;
    
    // Set FOV to a reasonable value and the camera's z position further away
    camera = new THREE.PerspectiveCamera(
        50,            // Field of view (start with 50 for a wide enough view)
        aspect,        // Aspect ratio
        0.1,           // Near clipping plane
        1000           // Far clipping plane
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
  
    camera.position.set(0, 0, 1000);

    onWindowResize();
}

const createStars = () : void => {
    stars.forEach((star) => {
        const [x, y, dim, blur] = star;
        const starGeometry = new THREE.CircleGeometry(dim ? 0.5 : 1, 32);
        const starMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xffffff, 
            transparent: true,
            opacity: dim ? 0.5 : 0.7
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

        animateStar(starMesh);
    });
}

const createConstellations = (): void => {
    constellations.forEach((constellation) => {
        const material = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.2 });

        // Create points from the constellation based on star coordinates
        const points = constellation.map(([x, y]) => new THREE.Vector3(x - 881 / 2, 211 / 2 - y, 0));

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, material);
        starField.add(line);

        // Pass both line and constellation to animateLine
        animateLine(line, constellation);
    });
};



const onWindowResize = () : void => {
    if (container.value) {
        const { width, height } = container.value.getBoundingClientRect();
        
        // Update camera aspect ratio based on new width/height
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        // Resize the renderer
        renderer.setSize(width, height);
    }
}
</script>

<style scoped>
div {
    width: 100%;
    height: 100%;
}
</style>