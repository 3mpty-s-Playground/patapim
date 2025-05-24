"use client";

import useWindowSize from "@/hooks/useWindowSize";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

type Props = {
    // Dans l'ordre : x, y, z
    modelPos: [number, number, number];
    modelRot: [number, number, number];
};

export default function Scene({ modelPos, modelRot }: Props) {
    const { width, height } = useWindowSize();

    return (
        <Canvas
            style={{
                position: "fixed",
                width: width,
                height: height,
                top: "0",
            }}>
            {/* Lumière de la scène */}
            <ambientLight intensity={1.5} />

            {/* Pour pouvoir faire tourner le model au clic */}
            {/* Zoom à la molette désactivé */}
            <OrbitControls enableZoom={false} />

            <Model position={modelPos} rotation={modelRot} />
        </Canvas>
    );
}
