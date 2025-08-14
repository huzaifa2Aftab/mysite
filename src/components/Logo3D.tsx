"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Html } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function PixelCluster() {
	const group = useRef<THREE.Group>(null!);
	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		if (group.current) {
			group.current.rotation.y = t * 0.25;
			group.current.rotation.x = Math.sin(t * 0.3) * 0.1;
		}
	});

	const positions = useMemo(() => {
		const coords: [number, number, number][] = [];
		const layers = 5;
		for (let y = 0; y < layers; y++) {
			for (let x = 0; x <= y; x++) {
				coords.push([(x - y / 2) * 0.6, (layers / 2 - y) * 0.6, 0]);
			}
		}
		return coords;
	}, []);

	return (
		<group ref={group}>
			{positions.map((p, i) => (
				<mesh key={i} position={p} castShadow receiveShadow>
					<boxGeometry args={[0.5, 0.5, 0.5]} />
					<meshStandardMaterial color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#34d399"} emissive="#0ea5b7" emissiveIntensity={0.2} metalness={0.6} roughness={0.2} />
				</mesh>
			))}
		</group>
	);
}

export default function Logo3D({ height = 320 }: { height?: number }) {
	return (
		<div className="relative w-full" style={{ height }}>
			<Canvas camera={{ position: [0, 0.5, 6], fov: 50 }} dpr={[1, 2]}>
				<color attach="background" args={["#06070A"]} />
				<ambientLight intensity={0.6} />
				<directionalLight position={[3, 5, 5]} intensity={1.2} castShadow />
				<Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
					<PixelCluster />
				</Float>
				<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3} maxPolarAngle={(2 * Math.PI) / 3} />
			</Canvas>
			<div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(transparent,black)] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_70%)]" />
		</div>
	);
}