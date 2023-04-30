import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const MemojiCanvas = styled.div`
  z-index: 1;
  height: 18vh;
  width: 15vh;
  max-height: 100%;
  border-radius: var(--border-radius);
  position: fixed;
  bottom: 32vh;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
`;

export default function MemojiScene() {
  const canvasRef = useRef();
  const mixer = useRef();
  const clock = useRef(new THREE.Clock());
  const model = useRef();

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Sizes
    const sizes = canvasRef.current.getBoundingClientRect();

    // Camera
    const camera = new THREE.PerspectiveCamera(15, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true, // transparent background
    });
    renderer.setSize(sizes.width, sizes.height);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = Math.PI / 2 - 0.1; // Minimum angle from top view
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Maximum angle from top view
    controls.minAzimuthAngle = -Math.PI / 20;
    controls.maxAzimuthAngle = Math.PI / 20;

    // Enable zooming in and out
    controls.enableZoom = false;

    // Set the minimum and maximum distance that the camera can zoom in and out
    controls.minDistance = 1; // e.g., zoom in to a minimum of 2 units
    controls.maxDistance = 10; // e.g., zoom out to a maximum of 10 units

    // Set the minimum and maximum zoom level (controls the sensitivity of zooming)
    controls.minZoom = 0.5; // e.g., minimum zoom level is half of the default
    controls.maxZoom = 3; // e.g., maximum zoom level is 1.5 times the default

    // Load GLB model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/assets/unam3d/unamthumb1.glb", (gltf) => {
      model.current = gltf.scene;
      model.current.position.y = -0.1;
      //model.current.rotation.x = Math.PI / 0.5;
      model.current.rotation.x += -0.1;
      model.current.rotation.y += 0.1;
      //model.current.rotation.y = Math.PI / 5;
      scene.add(model.current);

      // Update the model's scale to match the size in the other scene/component
      model.current.scale.set(0.1, 0.1, 0.1);

      // Play animation
      const animations = gltf.animations;
      if (animations && animations.length) {
        mixer.current = new THREE.AnimationMixer(model.current);
        animations.forEach((clip) => {
          const action = mixer.current.clipAction(clip);
          action.play();
        });
      }
    });

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update();

      // Update animation
      if (mixer.current) {
        mixer.current.timeScale = 2; // Speed up animation
        mixer.current.update(clock.current.getDelta());
      }

      // Constantly Rotate the model
      if (model.current) {
        //model.current.rotation.x += 0.01;
        //model.current.rotation.y += 0.01;
        //model.current.rotation.z += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <MemojiCanvas>
      <Canvas ref={canvasRef} className="webgl" />;
    </MemojiCanvas>
  );
}
