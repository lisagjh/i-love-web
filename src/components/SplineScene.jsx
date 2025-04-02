import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

export default function StarShape() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Load HDRI for environment map (Kiara 1 Dawn from Polyhaven)
    const hdrLoader = new RGBELoader();
    hdrLoader.setDataType(THREE.HalfFloatType); // HDR image with half-float type
    hdrLoader.load("/rooftop_night_1k.hdr", (hdrEquirect) => {
      hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;

      // Set the environment map to the scene (for lighting and reflections)
      scene.environment = hdrEquirect;

      // Create and add the star shape with material (after HDRI loading)
      const star = createStar(hdrEquirect);
      scene.add(star);
      starRef.current = star;

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);

        // Gentle floating animation for the star
        if (starRef.current) {
          starRef.current.rotation.y += 0.002;
        }

        renderer.render(scene, camera);
      };

      animate();
    });

    // Function to create the 3D star shape (from SVG)
    const createStar = (envMap) => {
      const svgData = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1.5 -1.5 3 3">
        <path d="M0,-1 L0.4,-0.3 L1,-0.2 L0.5,0.2 L0.6,0.8 L0,0.5 L-0.6,0.8 L-0.5,0.2 L-1,-0.2 L-0.4,-0.3 Z" fill="currentColor"/>
      </svg>`;

      const loader = new SVGLoader();
      const svgGroup = loader.parse(svgData);

      // Get path shapes
      const shapes = [];
      svgGroup.paths.forEach((path) => {
        shapes.push(...path.toShapes(true)); // Convert SVG path to Three.js Shape
      });

      if (shapes.length === 0) {
        console.error("Failed to generate shapes from SVG");
        return new THREE.Mesh();
      }

      // Create geometry
      const geometry = new THREE.ExtrudeGeometry(shapes[0], {
        depth: 0.2,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.05,
        bevelSegments: 5,
      });

      // Create material for glass effect
      const material = new THREE.MeshStandardMaterial({
        color: 0x64c1d8, // Base color of the glass
        metalness: 0.1, // Glass has low metalness
        roughness: 0.05, // Smooth surface for glossiness
        transparent: true, // Enable transparency
        opacity: 0.8, // Semi-transparent
        envMap: envMap, // Environment map for reflections
        refractionRatio: 0.98, // Glass refractive index (0.98 for glass)
        reflectivity: 0.1, // Light reflectivity
        clearcoat: 1, // Clear glossy coating on top of the glass
        clearcoatRoughness: 0, // Very smooth clearcoat for high gloss
      });

      return new THREE.Mesh(geometry, material);
    };

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);

    // Mouse interaction to rotate the star based on mouse movement
    const handleMouseMove = (event) => {
      if (!starRef.current) return;

      // Get container dimensions
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container center
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      // Rotate star based on mouse position
      gsap.to(starRef.current.rotation, {
        x: -y * 0.3, // Tilt up/down
        z: x * 0.3, // Tilt left/right
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
