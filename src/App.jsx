import { Canvas } from "@react-three/fiber";
import React from "react";
import "./style.css";
import { OrbitControls, useTexture } from "@react-three/drei";
import Showcase from "./components/Showcase";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const App = () => {
  return (
    <>
      <Canvas flat camera={{ fov: 45 }}>
        <OrbitControls enableZoom={false} />
        <ambientLight />
        <Showcase />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={3.2} // The bloom intensity.
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
          />
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>

      {/* <div className="w-full p-4 text-4xl font-bold text-center text-white bg-black">Work Showcase</div> */}
    </>
  );
};

export default App;
