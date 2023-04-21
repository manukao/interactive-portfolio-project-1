import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import MemojiScene from "./lib/MemojiScene";
import * as THREE from "three";
import styled from "styled-components";

const StyledCanvas = styled.canvas``;

export default function Memoji() {
  const mixer = useRef();
  const clock = useRef(new THREE.Clock());

  useEffect(() => {
    const test = new MemojiScene("memoji3d");
    test.initialize();
    test.animate();

    let loadedModel;

    const glftLoader = new GLTFLoader();
    glftLoader.load("./assets/unampushups.glb", (gltfScene) => {
      loadedModel = gltfScene;
      gltfScene.scene.position.y = -4.8;
      gltfScene.scene.rotation.y = Math.PI / 5;
      gltfScene.scene.scale.set(6, 6, 6);
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
      <StyledCanvas id="memoji3d" />
    </>
  );
}

// memojiheadbopnohand.glb
// ./assets/model(2).glb
