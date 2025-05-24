"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { gsap } from "gsap";
import Scene from "@/components/Scene";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);
    const endRef = useRef<HTMLElement>(null);

    const [modelPos, setModelPos] = useState<[number, number, number]>([
        0, 0, 0,
    ]);
    const [modelRot, setModelRot] = useState<[number, number, number]>([
        0, 0, 0,
    ]);

    useEffect(() => {
        const pos = { z: 0, x: 0 };
        const rot = { y: 0 };

        // On raproche le modèle pendant le scroll de la première section
        gsap.to(pos, {
            z: 3,
            scrollTrigger: {
                trigger: section2Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    setModelPos([pos.x, 0, pos.z]);
                },
            },
        });

        // Le modèle tourne pendant le scroll de la deuxième section
        gsap.to(rot, {
            y: Math.PI * 1.75,
            scrollTrigger: {
                trigger: section3Ref.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    setModelRot([0, rot.y, 0]);
                },
            },
        });

        // On décale le modèle sur la droite (x: 2) pendant le scroll de la troisième section
        gsap.to(pos, {
            x: 2,
            scrollTrigger: {
                trigger: endRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: () => {
                    setModelPos([pos.x, 0, pos.z]);
                    setModelRot([0, rot.y, 0]);
                },
            },
        });
    }, []);

    return (
        <main className={styles.main}>
            <section ref={section1Ref}>
                <p>Start</p>
            </section>
            <section ref={section2Ref}>
                <p>brr brr</p>
            </section>
            <section ref={section3Ref}>
                <p>patapim</p>
            </section>
            <section ref={endRef}>
                <p>Fin</p>
            </section>

            <Scene modelPos={modelPos} modelRot={modelRot} />
        </main>
    );
}
