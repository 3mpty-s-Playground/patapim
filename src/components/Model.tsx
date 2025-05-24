"use client";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

type Props = {
    // Dans l'ordre : x, y, z
    position: [number, number, number];
    rotation: [number, number, number];
};

export default function Model({ position, rotation }: Props) {
    // On charge le modèle depuis le dossier "/public"
    const gltf = useLoader(GLTFLoader, "/patapim.glb");
    return (
        <primitive
            object={gltf.scene}
            scale={1}
            position={position}
            rotation={rotation}
        />
    );
}
