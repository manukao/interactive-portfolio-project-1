import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MemojiScene from "./lib/Unam3dScene";
import * as THREE from "three";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledCanvas = styled.canvas``;

export default function Unam3d() {
  const mixer = useRef();
  const clock = useRef(new THREE.Clock());
  const containerRef = useRef();

  useEffect(() => {
    const test = new MemojiScene("memoji3d", containerRef.current);
    test.initialize();
    test.animate();

    let loadedModel;

    const glftLoader = new GLTFLoader();
    glftLoader.load("./assets/unam3d/unampushups.glb", (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.position.y = -4.8;
      gltfScene.scene.rotation.y = Math.PI / 5;
      //gltfScene.scene.scale.set(4, 4, 4);
      test.scene.add(gltfScene.scene);
      const animations = gltfScene.animations;
      mixer.current = new THREE.AnimationMixer(gltfScene.scene);
      animations.forEach((clip) => {
        const action = mixer.current.clipAction(clip);
        action.play();
      });
    });

    const animate = () => {
      if (mixer.current) {
        mixer.current.update(clock.current.getDelta());
        //loadedModel.scene.rotation.x += 0.01;
        //loadedModel.scene.rotation.y += 0.01;
        //loadedModel.scene.rotation.z += 0.01;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <>
      <StyledContainer ref={containerRef}>
        <StyledCanvas id="memoji3d" />
      </StyledContainer>
    </>
  );
}
