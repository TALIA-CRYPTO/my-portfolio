"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "EcoSphere Dashboard",
        category: "Web Application",
        image: "/assets/project1.png",
        description: "An AI-powered environmental monitoring dashboard with real-time data visualization.",
        tech: ["Next.js", "TypeScript", "Three.js"],
    },
    {
        title: "Nova Bank Pro",
        category: "Fintech Solution",
        image: "/assets/project2.png",
        description: "A secure, high-performance banking interface with dark mode minimalist design.",
        tech: ["React", "Tailwind", "Framer Motion"],
    },
    {
        title: "Quantum Portfolio",
        category: "Branding & Web",
        image: "/assets/project3.png",
        description: "A premium portfolio experience for creative agencies with high-fidelity animations.",
        tech: ["Next.js", "GLSL", "GSAP"],
    },
];

export default function ProjectGallery() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-obsidian">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="container mx-auto px-6 mb-12 absolute top-20 left-0 right-0 z-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected <span className="text-brand-lime">Works</span></h2>
                    <p className="text-white/40 max-w-md">A showcase of high-performance digital products engineered for excellence.</p>
                </div>

                <motion.div style={{ x }} className="flex gap-12 px-6 pt-40">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw]"
                        >
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden glass border-white/10 group-hover:border-brand-emerald/30 transition-colors">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-obsidian/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 md:p-12">
                                    <div className="flex gap-4 mb-6">
                                        <button className="p-3 rounded-full bg-white/10 hover:bg-brand-emerald hover:text-obsidian transition-colors">
                                            <ExternalLink size={20} />
                                        </button>
                                        <button className="p-3 rounded-full bg-white/10 hover:bg-brand-emerald hover:text-obsidian transition-colors">
                                            <Github size={20} />
                                        </button>
                                    </div>
                                    <span className="text-brand-emerald font-medium uppercase tracking-widest text-xs mb-2">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Outside label for when not hovering */}
                            <div className="mt-6 group-hover:opacity-0 transition-opacity">
                                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-white/40 text-sm">{project.category}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
