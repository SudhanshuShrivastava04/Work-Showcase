import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Showcase = () => {
  const texture = useTexture("./image.png");
  const ref = useRef(null);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <group rotation={[0, 1.5, 0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry
          args={[
            1, // radiusTop
            1, //radiusBottom
            1, //height
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