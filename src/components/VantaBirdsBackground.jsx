// VantaBirdsBackground.js
import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const VantaBirdsBackground = ({darkMode}) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
 
 

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: darkMode ? 0x262626 : 0xffffff,
        color1: 0xab5ad4,
        color2: 0x3fff,
        colorMode: "lerpGradient",
        birdSize: 1.2,
        wingSpan: 20.0,
        cohesion: 77.0,
        quantity: 3,
      });
    }

    // Cleanup to prevent memory leaks
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [darkMode]);

  return (
    <div
      ref={vantaRef}
      style={{ width: "100%", height: "100vh", position: "absolute", top: 0, left: 0 }}
      className="dark:bg-neutral-800 "
    />
  );
};

export default VantaBirdsBackground;
