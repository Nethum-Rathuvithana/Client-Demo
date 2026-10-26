import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ROLES } from '../data/fashionData';

export default function ThreeOrreryScene({ onSelectRole, onHoverRole }) {
  const mountRef = useRef(null);
  const hoveredRoleRef = useRef(null);
  const [activeRoleInfo, setActiveRoleInfo] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF7F2EA);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 6.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Warm Ambient and Sunbeams
    const ambient = new THREE.AmbientLight(0xFDF7EB, 1.6);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xFFE8C8, 2.0);
    sun.position.set(5, 8, 4);
    sun.castShadow = true;
    scene.add(sun);

    // Subtle travertine ground plane
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(4.8, 64),
      new THREE.MeshStandardMaterial({ color: 0xEFE5D6, roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.4;
    ground.receiveShadow = true;
    scene.add(ground);

    // Running stitch concentric rings on floor
    const ringGeo = new THREE.RingGeometry(2.35, 2.37, 64);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xB8A48C, side: THREE.DoubleSide });
    const stitchRing = new THREE.Mesh(ringGeo, ringMat);
    stitchRing.rotation.x = -Math.PI / 2;
    stitchRing.position.y = -0.38;
    scene.add(stitchRing);

    // 1. Central Ink Disc "A to W"
    const centerGroup = new THREE.Group();
    const discGeo = new THREE.CylinderGeometry(0.7, 0.75, 0.18, 36);
    const discMat = new THREE.MeshStandardMaterial({
      color: 0x1B1917,
      roughness: 0.25,
      metalness: 0.2
    });
    const centerDisc = new THREE.Mesh(discGeo, discMat);
    centerDisc.position.y = -0.15;
    centerGroup.add(centerDisc);

    // Glowing core ring on disc
    const coreRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.02, 16, 48),
      new THREE.MeshBasicMaterial({ color: 0xE7B49A })
    );
    coreRing.rotation.x = Math.PI / 2;
    coreRing.position.y = -0.05;
    centerGroup.add(coreRing);

    scene.add(centerGroup);

    // 2. Orbiting Nodes (5 main + 1 satellite)
    const orreryGroup = new THREE.Group();
    scene.add(orreryGroup);

    const nodeObjects = [];
    const radius = 2.4;

    const roleSymbols = [
      { id: 'designer', name: 'orrery_designer', color: 0xE7B49A },
      { id: 'brand', name: 'orrery_brand', color: 0xB8A48C },
      { id: 'retail', name: 'orrery_shop', color: 0xD5E3EE },
      { id: 'model', name: 'orrery_model', color: 0xE9DFCF },
      { id: 'customer', name: 'orrery_customer', color: 0xF1E9DC },
      { id: 'production', name: 'orrery_production', color: 0xC4B29B }
    ];

    roleSymbols.forEach((role, idx) => {
      const isSatellite = role.id === 'production';
      const angle = isSatellite ? (1 / 5) * Math.PI * 2 + 0.35 : (idx / 5) * Math.PI * 2;
      const dist = isSatellite ? radius * 1.35 : radius;

      const nodeGroup = new THREE.Group();
      nodeGroup.userData = { roleId: role.id, baseDist: dist, angle, targetY: 0, currentY: 0 };
      nodeGroup.name = role.name;

      // Marble pedestal
      const pedH = isSatellite ? 0.3 : 0.45;
      const pedR = isSatellite ? 0.22 : 0.32;
      const pedMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(pedR * 0.9, pedR, pedH, 24),
        new THREE.MeshStandardMaterial({ color: 0xF5EFE6, roughness: 0.35 })
      );
      pedMesh.position.y = pedH / 2 - 0.25;
      pedMesh.castShadow = true;
      nodeGroup.add(pedMesh);

      // Symbolic 3D Object atop pedestal
      let symbolMesh;
      if (role.id === 'designer') {
        // Dress form
        const torso = new THREE.Mesh(
          new THREE.CylinderGeometry(0.08, 0.14, 0.38, 16),
          new THREE.MeshStandardMaterial({ color: 0xE7B49A, roughness: 0.4 })
        );
        torso.position.y = 0.32;
        nodeGroup.add(torso);
      } else if (role.id === 'brand') {
        // Silk/metal brand label
        symbolMesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, 0.32, 0.04),
          new THREE.MeshStandardMaterial({ color: 0xB8A48C, metalness: 0.4, roughness: 0.2 })
        );
        symbolMesh.position.y = 0.32;
        nodeGroup.add(symbolMesh);
      } else if (role.id === 'retail') {
        // Clothing rail
        symbolMesh = new THREE.Mesh(
          new THREE.TorusGeometry(0.16, 0.03, 12, 24, Math.PI),
          new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.8, roughness: 0.2 })
        );
        symbolMesh.position.y = 0.26;
        symbolMesh.rotation.z = Math.PI;
        nodeGroup.add(symbolMesh);
      } else if (role.id === 'model') {
        // Camera lens cylinder
        symbolMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.12, 0.12, 0.22, 20),
          new THREE.MeshStandardMaterial({ color: 0x1B1917, metalness: 0.6, roughness: 0.1 })
        );
        symbolMesh.rotation.x = Math.PI / 2;
        symbolMesh.position.y = 0.3;
        nodeGroup.add(symbolMesh);
      } else if (role.id === 'customer') {
        // Garment bag
        symbolMesh = new THREE.Mesh(
          new THREE.ConeGeometry(0.16, 0.36, 16),
          new THREE.MeshStandardMaterial({ color: 0xE9DFCF, roughness: 0.6 })
        );
        symbolMesh.position.y = 0.3;
        nodeGroup.add(symbolMesh);
      } else {
        // Thread spool
        symbolMesh = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 0.24, 16),
          new THREE.MeshStandardMaterial({ color: 0xE7B49A, roughness: 0.5 })
        );
        symbolMesh.position.y = 0.25;
        nodeGroup.add(symbolMesh);
      }

      // Thread connecting center to pedestal
      const threadPoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(Math.cos(angle) * dist, 0, Math.sin(angle) * dist)
      ];
      const threadGeo = new THREE.BufferGeometry().setFromPoints(threadPoints);
      const threadLine = new THREE.Line(
        threadGeo,
        new THREE.LineDashedMaterial({ color: 0xB8A48C, dashSize: 0.1, gapSize: 0.08 })
      );
      threadLine.computeLineDistances();
      scene.add(threadLine);

      // Light Pulse Particle travelling both ways
      const pulseGeo = new THREE.SphereGeometry(0.04, 12, 12);
      const pulseMat = new THREE.MeshBasicMaterial({ color: 0xE7B49A });
      const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
      pulseMesh.position.set(0, 0, 0);
      scene.add(pulseMesh);

      nodeGroup.position.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist);
      orreryGroup.add(nodeGroup);

      nodeObjects.push({
        group: nodeGroup,
        roleId: role.id,
        pulseMesh,
        angle,
        dist,
        threadLine
      });
    });

    // 3. Mouse Raycasting for Orbit & Hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let orbitAngle = 0;
    let targetOrbitAngle = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevMouse.x;
        targetOrbitAngle += dx * 0.006;
        prevMouse = { x: e.clientX, y: e.clientY };
      }

      // Check hover on pedestals
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(orreryGroup.children, true);

      if (intersects.length > 0) {
        let parentGroup = intersects[0].object;
        while (parentGroup.parent && parentGroup.parent !== orreryGroup) {
          parentGroup = parentGroup.parent;
        }
        const roleId = parentGroup.userData.roleId;
        if (roleId && roleId !== hoveredRoleRef.current) {
          hoveredRoleRef.current = roleId;
          const roleData = ROLES.find(r => r.id === roleId);
          setActiveRoleInfo(roleData);
          if (onHoverRole) onHoverRole(roleData);
        }
      } else {
        if (hoveredRoleRef.current !== null) {
          hoveredRoleRef.current = null;
          setActiveRoleInfo(null);
          if (onHoverRole) onHoverRole(null);
        }
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onClick = (e) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(orreryGroup.children, true);
      if (intersects.length > 0) {
        let parentGroup = intersects[0].object;
        while (parentGroup.parent && parentGroup.parent !== orreryGroup) {
          parentGroup = parentGroup.parent;
        }
        const roleId = parentGroup.userData.roleId;
        if (roleId && onSelectRole) {
          onSelectRole(roleId);
        }
      }
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('click', onClick);

    // 4. Animation Loop
    let animationId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth orbit damping
      orbitAngle += (targetOrbitAngle - orbitAngle) * 0.08;
      targetOrbitAngle += 0.0015; // slow perpetual cosmic orbit

      orreryGroup.rotation.y = orbitAngle;

      // Animate pedestals & light pulses
      nodeObjects.forEach((node, i) => {
        const isHovered = hoveredRoleRef.current === node.roleId;
        const targetY = isHovered ? 0.35 : 0;
        node.group.position.y += (targetY - node.group.position.y) * 0.12;

        // Subtle bobbing
        if (!isHovered) {
          node.group.position.y += Math.sin(time * 2 + i) * 0.0015;
        }

        // Pulse traveling both ways along thread
        const currentRot = orreryGroup.rotation.y;
        const netAngle = node.angle + currentRot;
        const pulseCycle = (time * 0.8 + i * 0.4) % 2; // 0..2
        let travelFactor = pulseCycle <= 1 ? pulseCycle : 2 - pulseCycle; // 0->1->0

        node.pulseMesh.position.x = Math.cos(netAngle) * (node.dist * travelFactor);
        node.pulseMesh.position.z = Math.sin(netAngle) * (node.dist * travelFactor);
        node.pulseMesh.position.y = 0.05 + Math.sin(travelFactor * Math.PI) * 0.15;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('click', onClick);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [onSelectRole, onHoverRole]);

  return (
    <div className="relative w-full h-[520px] rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#B8A48C]/30 shadow-subtle flex flex-col justify-end">
      {/* 3D Canvas container */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Center Label Overlay */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <span className="label-caps">Orrery System · Drag to Orbit</span>
        <h4 className="font-serif text-2xl text-[#1B1917] mt-1">Who's Inside A to W</h4>
      </div>

      {/* Dynamic Role Card revealing what hovered role receives */}
      <div className="relative z-10 m-6 p-5 rounded-2xl bg-[#F7F2EA]/95 backdrop-blur-md border border-[#B8A48C]/40 shadow-float max-w-md transition-all duration-300">
        {activeRoleInfo ? (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="label-caps" style={{ color: '#E7B49A' }}>
                {activeRoleInfo.symbolLabel}
              </span>
              <span className="text-xs text-[#B8A48C] font-mono">Role Node</span>
            </div>
            <h3 className="font-serif text-xl font-medium text-[#1B1917]">{activeRoleInfo.title}</h3>
            <p className="text-xs text-[#1B1917]/80 mt-1 leading-relaxed">{activeRoleInfo.description}</p>
            
            <div className="mt-3 flex flex-wrap gap-1.5">
              {activeRoleInfo.perks.map((p, idx) => (
                <span key={idx} className="text-[10px] bg-[#E9DFCF] px-2 py-0.5 rounded-full text-[#1B1917]">
                  ✓ {p}
                </span>
              ))}
            </div>

            <button
              onClick={() => onSelectRole && onSelectRole(activeRoleInfo.id)}
              className="mt-4 btn-pill-ink w-full justify-center text-xs py-2"
            >
              {activeRoleInfo.cta} →
            </button>
          </div>
        ) : (
          <div className="text-center py-2 text-xs text-[#B8A48C]">
            <p className="font-serif italic text-sm text-[#1B1917]/70">
              Hover over an orbiting pedestal to explore roles, or click to enter.
            </p>
            <p className="mt-1 text-[11px]">Designer · Fashion Brand · Retail Shop · Model · Production · Customer</p>
          </div>
        )}
      </div>
    </div>
  );
}
