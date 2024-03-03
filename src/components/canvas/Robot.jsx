import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robot = ({ isMobile }) => {
    const robot = useGLTF("./desktop_pc/robot.gltf");
    const meshRef = useRef(); // Reference to the mesh object
  
    // Use the useFrame hook to update the mesh position for the bouncing effect
    useFrame(({ clock }) => {
      if (meshRef.current) {
        // Update the Y position of the mesh using a sine function for bouncing effect
        meshRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1; // Adjust the amplitude of the bouncing
      }
    });
  
    // Define the scale and position based on isMobile
    const scale = isMobile ? 0.0003 : 1.3;
    const position = isMobile ? [5, -5, -20] : [4.5, -1, -1.8];
  
    return (
      <group ref={meshRef}>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight
          position={[0, 0, 0]} // Adjust the position of the spotlight to be closer to the robot
          angle={Math.PI / 4} // Adjust the angle to focus more light on the robot
          penumbra={0.1}
          intensity={2}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight intensity={1} />
        <primitive
          object={robot.scene}
          scale={[scale, scale, scale]} // Apply scale as an array for consistency
          position={position}
          rotation={[0, Math.PI / 4, 0]} // Adjust the rotation to face the front
        />
      </group>
    );
};

  

const RobotCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ position: "absolute", bottom: "20px", right: "20px" }} // Position the canvas
    >
      <Suspense fallback={<CanvasLoader />}>
       
        <Robot isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
