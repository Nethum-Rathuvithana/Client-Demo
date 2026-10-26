import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function ThreeHeroScene({ scrollProgress = 0, onGownHoverChange }) {
  const mountRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef(0.003);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF7F2EA);
    scene.fog = new THREE.FogExp2(0xF7F2EA, 0.04);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.3, 5.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    container.appendChild(renderer.domElement);

    // 2. Warm Sunlit Arcade Lighting
    const ambientLight = new THREE.AmbientLight(0xFDF8EE, 1.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xFFF3DD, 2.4);
    sunLight.position.set(4, 7, 3);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    // Soft sky bounce light
    const bounceLight = new THREE.DirectionalLight(0xD5E3EE, 0.8);
    bounceLight.position.set(-4, -2, -2);
    scene.add(bounceLight);

    // 3. Classical Travertine Floor
    const floorGeo = new THREE.PlaneGeometry(30, 40);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xE9DFCF,
      roughness: 0.85,
      metalness: 0.05
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.1;
    floor.receiveShadow = true;
    scene.add(floor);

    // 4. Colonnade Arches (arch_kit)
    const archGroup = new THREE.Group();
    archGroup.name = "arch_kit";
    const archMat = new THREE.MeshStandardMaterial({
      color: 0xE9DFCF,
      roughness: 0.9,
      metalness: 0.02
    });

    for (let i = 0; i < 6; i++) {
      const zOffset = -i * 3.5;
      // Left Column
      const colLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 5, 24), archMat);
      colLeft.position.set(-2.8, 1.4, zOffset);
      colLeft.castShadow = true;
      colLeft.receiveShadow = true;
      archGroup.add(colLeft);

      // Right Column
      const colRight = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, 5, 24), archMat);
      colRight.position.set(2.8, 1.4, zOffset);
      colRight.castShadow = true;
      colRight.receiveShadow = true;
      archGroup.add(colRight);

      // Arch Header Beam
      const archHeader = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.35, 0.5), archMat);
      archHeader.position.set(0, 3.8, zOffset);
      archHeader.castShadow = true;
      archGroup.add(archHeader);
    }
    scene.add(archGroup);

    // 5. Marble Pedestal (pedestal)
    const pedestalGroup = new THREE.Group();
    pedestalGroup.name = "pedestal";
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0xE6DCB8,
      roughness: 0.4,
      metalness: 0.1
    });

    const pedestalBase = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.95, 0.25, 32), pedestalMat);
    pedestalBase.position.y = -0.98;
    pedestalBase.receiveShadow = true;
    pedestalGroup.add(pedestalBase);

    const pedestalShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.75, 0.55, 32), pedestalMat);
    pedestalShaft.position.y = -0.6;
    pedestalShaft.castShadow = true;
    pedestalShaft.receiveShadow = true;
    pedestalGroup.add(pedestalShaft);

    scene.add(pedestalGroup);

    // 6. Sculptural Peach Gown (hero_gown)
    const gownGroup = new THREE.Group();
    gownGroup.name = "hero_gown";
    gownGroup.position.set(0, 0.2, 0);

    // Peach Chiffon Material with soft transmission & gentle sheen
    const peachChiffonMat = new THREE.MeshPhysicalMaterial({
      color: 0xE7B49A,
      roughness: 0.35,
      metalness: 0.05,
      transmission: 0.45,
      thickness: 0.6,
      sheen: 0.8,
      sheenColor: 0xFFE6DC,
      transparent: true,
      opacity: 0.94,
      side: THREE.DoubleSide
    });

    // Sculpted Bodice
    const bodiceGeo = new THREE.CylinderGeometry(0.24, 0.28, 0.85, 28);
    const bodiceMesh = new THREE.Mesh(bodiceGeo, peachChiffonMat);
    bodiceMesh.position.y = 0.45;
    bodiceMesh.castShadow = true;
    gownGroup.add(bodiceMesh);

    // Neckline & Shoulder Drape
    const shoulderGeo = new THREE.TorusGeometry(0.32, 0.08, 16, 32, Math.PI);
    const shoulderMesh = new THREE.Mesh(shoulderGeo, peachChiffonMat);
    shoulderMesh.rotation.x = Math.PI / 2;
    shoulderMesh.position.set(0, 0.85, 0);
    gownGroup.add(shoulderMesh);

    // Fluted Chiffon Skirt
    const skirtGeo = new THREE.ConeGeometry(0.95, 1.8, 36, 12, true);
    const skirtMesh = new THREE.Mesh(skirtGeo, peachChiffonMat);
    skirtMesh.position.y = -0.4;
    skirtMesh.castShadow = true;
    gownGroup.add(skirtMesh);

    // Flowing layered drape petals (fluting)
    for (let p = 0; p < 8; p++) {
      const angle = (p / 8) * Math.PI * 2;
      const drapeGeo = new THREE.CylinderGeometry(0.04, 0.25, 1.4, 12);
      const drapePetal = new THREE.Mesh(drapeGeo, peachChiffonMat);
      drapePetal.position.set(Math.cos(angle) * 0.4, -0.35, Math.sin(angle) * 0.4);
      drapePetal.rotation.z = Math.sin(angle) * 0.18;
      drapePetal.rotation.x = Math.cos(angle) * 0.18;
      gownGroup.add(drapePetal);
    }

    scene.add(gownGroup);

    // 7. Sheer Billowing Curtains (Left and Right)
    const curtainMat = new THREE.MeshPhysicalMaterial({
      color: 0xFDFBF7,
      transparent: true,
      opacity: 0.45,
      roughness: 0.6,
      transmission: 0.6,
      side: THREE.DoubleSide
    });

    const curtainGeo = new THREE.PlaneGeometry(1.8, 4.2, 16, 24);
    const leftCurtain = new THREE.Mesh(curtainGeo, curtainMat);
    leftCurtain.position.set(-2.2, 1.5, 1.2);
    leftCurtain.rotation.y = 0.4;
    scene.add(leftCurtain);

    const rightCurtain = new THREE.Mesh(curtainGeo, curtainMat);
    rightCurtain.position.set(2.2, 1.5, 1.0);
    rightCurtain.rotation.y = -0.4;
    scene.add(rightCurtain);

    // 8. Interaction & Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    let mouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isDraggingRef.current) {
        const deltaX = e.clientX - previousMousePositionRef.current.x;
        rotationVelocityRef.current = deltaX * 0.005;
        gownGroup.rotation.y += rotationVelocityRef.current;
        previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
        rotationVelocityRef.current = deltaX * 0.005;
        gownGroup.rotation.y += rotationVelocityRef.current;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Render loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Inertial rotation
      if (!isDraggingRef.current) {
        gownGroup.rotation.y += rotationVelocityRef.current;
        rotationVelocityRef.current *= 0.96; // damping
        if (Math.abs(rotationVelocityRef.current) < 0.002) {
          rotationVelocityRef.current = 0.0025; // continuous peaceful idle rotation
        }
      }

      // Gentle breathing motion on the gown
      gownGroup.position.y = 0.2 + Math.sin(elapsedTime * 1.2) * 0.02;

      // Sheer curtains sway with cursor & gentle wind
      const sway = Math.sin(elapsedTime * 1.5) * 0.12 + mouse.x * 0.15;
      leftCurtain.position.x = -2.2 + sway * 0.3;
      leftCurtain.rotation.y = 0.35 + sway * 0.2;
      rightCurtain.position.x = 2.2 - sway * 0.3;
      rightCurtain.rotation.y = -0.35 - sway * 0.2;

      // Camera dolly on scroll
      camera.position.z = 5.2 - scrollProgress * 1.8;
      camera.position.y = 1.3 - scrollProgress * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scrollProgress]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-turn select-none"
      style={{ minHeight: '520px', width: '100%', height: '100%' }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (onGownHoverChange) onGownHoverChange(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (onGownHoverChange) onGownHoverChange(false);
      }}
    >
      {/* Floating 3D Badge Indicator */}
      <div
        className="absolute top-6 right-6 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.8,
          background: 'rgba(241, 233, 220, 0.85)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(184, 164, 140, 0.5)',
          borderRadius: '9999px',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 4px 14px rgba(27, 25, 23, 0.06)'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#E7B49A', display: 'inline-block' }} />
        <span className="label-caps-dark" style={{ fontSize: '0.625rem', letterSpacing: '0.14em' }}>
          hero_gown · Drag to Turn
        </span>
      </div>
    </div>
  );
}
