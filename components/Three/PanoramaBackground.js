import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export default function PanoramaViewer() {
  const containerRef = useRef();
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    let renderer = rendererRef.current;

    if (!renderer) {
      renderer = new THREE.WebGLRenderer();
      rendererRef.current = renderer;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const texture = loader.load("/assets/jungle.jpeg");

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 0.1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.rotateSpeed = 0.3;

    const onWindowResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    let lastTime = 0;
    const rotationSpeed = 0.00005;

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      requestAnimationFrame(animate);

      sphere.rotation.y += rotationSpeed * delta;

      controls.update();
      renderer.render(scene, camera);
    };

    animate(0);

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      renderer.dispose();
      controls.dispose();
    };
  }, []);

  return <Container ref={containerRef} />;
}
