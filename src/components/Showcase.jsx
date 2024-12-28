import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Showcase = () => {
  const texture = useTexture("./images.png");
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <group rotation={[0, 2.5, 0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry
          args={[
            2, // radiusTop
            2, //radiusBottom
            2, //height
            60, // radialSegments
            60, // heightSegments
            true, // openEnded
          ]}
        />
        <meshStandardMaterial
          side={THREE.DoubleSide}
          transparent
          map={texture}
        />
      </mesh>
    </group>
  );
};

export default Showcase;
