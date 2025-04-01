import React, { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!containerRef.current) return;

      // Get container dimensions
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container center (from -1 to 1)
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate rotation and movement based on mouse position
  const rotateX = mousePosition.y * 10; // 5 degrees max rotation
  const rotateY = mousePosition.x * -10; // negative for correct direction
  const translateX = mousePosition.x * 10; // 10px max movement
  const translateY = mousePosition.y * 10;

  // Add to the JSX, just before the return statement
  const hoverScale = 1.6; // Scale on hover (slightly larger than normal)
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          transform: `translate(${translateX}px, ${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          width: "100%",
          height: "100%",
          transition: "transform 0.1s ease-out", // Smooth animation
        }}
      >
        <Spline
          scene="https://prod.spline.design/Ecr8GcEqJSPOrP1v/scene.splinecode"
          style={{
            transform: `scale(${isHovering ? hoverScale : 1.5})`,
            transformOrigin: "center center",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
    </div>
  );
}
