import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import useKeyboard from "../hooks/useKeyboardControls";

export default function Box(props) {
  const boxRef = useRef();
  const { forward, backward, left, right } = useKeyboard();

  useFrame(() => {
    /**
     * translateX and translateZ are same as -
     * boxRef.current.position.x += value;
     * boxRef.current.position.z += value;
     */
    if (forward) {
      boxRef.current.translateZ(-0.02);
    } else if (backward) {
      boxRef.current.translateZ(0.02);
    } else if (left) {
      boxRef.current.translateX(-0.02);
    } else if (right) {
      boxRef.current.translateX(0.02);
    }
  });

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" />
    </mesh>
  );
}
