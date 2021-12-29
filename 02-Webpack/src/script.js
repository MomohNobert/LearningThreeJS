import './style.css';
import * as THREE from "three";

const scene= new THREE.Scene();

const canvas = document.querySelector('.webgl');

// Red Cube.
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

// Add mesh to scene.
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Provide a camera? point of view. position & orientation.
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;

// Add camera to scene.
scene.add(camera)

// Create the renderer.
const renderer = new THREE.WebGLRenderer({
  canvas
})

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);