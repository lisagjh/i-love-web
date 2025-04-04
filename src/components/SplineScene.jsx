import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default function ReflectiveObject() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const meshRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up the scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load HDRI for environment map (Kiara 1 Dawn from Polyhaven)
    const hdrLoader = new RGBELoader();
    hdrLoader.setDataType(THREE.HalfFloatType); // HDR image with half-float type
    hdrLoader.load("/kiara_1_dawn_1k.hdr", (hdrEquirect) => {
      hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;

      // Set the environment map to the scene (for lighting and reflections)
      scene.environment = hdrEquirect;

      // Create material with HDRI environment map
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.01,
        roughness: 0.01,
        envMap: hdrEquirect,
        envMapIntensity: 0.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
        opacity: 0.75,
        transparent: true,
      });

      // Create geometry for the object (Torus Knot in this case)
      const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 8); // Customize the radius and tube for shape
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshRef.current = mesh;

      // Position the camera
      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate the object for effect
        if (meshRef.current) {
          meshRef.current.rotation.x += 0.005;
          meshRef.current.rotation.y += 0.005;
        }

        renderer.render(scene, camera);
      };

      animate();
    });

    // Handle window resize
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
