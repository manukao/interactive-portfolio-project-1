import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SceneInit from "./lib/MemojiScene";

export default function TESTTESTTEST() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    let loadedModel;
    const glftLoader = new GLTFLoader();
    glftLoader.load("./assets/nasapushups.gltf", (gltfScene) => {
      loadedModel = gltfScene;

      gltfScene.scene.rotation.y = Math.PI / 8;
      gltfScene.scene.position.y = 3;
      gltfScene.scene.scale.set(10, 10, 10);
      test.scene.add(gltfScene.scene);
    });

    const animate = () => {
      if (loadedModel) {
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
      <canvas id="myThreeJsCanvas" />
    </>
  );
}

// memojiheadbopnohand.glb
// ./assets/model(2).glb
