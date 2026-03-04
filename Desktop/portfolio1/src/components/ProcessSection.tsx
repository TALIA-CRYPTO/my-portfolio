"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        title: "Discovery & Research",
        description: "Deep diving into your business goals, target audience, and competition to build a solid strategic foundation.",
        icon: Search,
        color: "brand-emerald",
    },
    {
        title: "Strategy & UX Design",
        description: "Mapping out user flows and wireframing high-fidelity interfaces that prioritize conversion and engagement.",
        icon: PenTool,
        color: "brand-lime",
    },
    {
        title: "Engineering & Launch",
        description: "Building your digital product with modern, scalable technologies and clean, maintainable code.",
        icon: Code2,
        color: "brand-emerald",
    },
    {
        title: "Optimization & Growth",
        description: "Continuous monitoring and iteration to ensure your website evolves with your business and market trends.",
        icon: Rocket,
        color: "brand-lime",
    },
];

export default function ProcessSection() {
    return (
        <section className="container mx-auto px-6 py-32">
            <div className="flex flex-col items-center mb-24 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The <span className="text-brand-lime">Process</span></h2>
                <p className="text-white/40 max-w-md italic">How I turn ambition into industry-leading digital experiences.</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Central Neon Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-emerald via-brand-lime to-brand-emerald opacity-20 hidden md:block" />

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`relative flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            {/* Content Side */}
                            <div className="w-full md:w-1/2 flex flex-col px-12">
                                <div className={`p-8 rounded-3xl glass glass-emerald hover:bg-white/[0.03] transition-all group ${index % 2 === 0 ? "md:text-right md:items-end" : "md:text-left md:items-start"
                                    } flex flex-col`}>
                                    <div className={`p-4 rounded-2xl bg-${step.color}/10 border border-${step.color}/20 text-${step.color} mb-6 w-fit`}>
                                        <step.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white">0{index + 1}. {step.title}</h3>
                                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Icon / Center Node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center shrink-0">
                                <div className={`w-4 h-4 rounded-full border-2 bg-obsidian border-${step.color} glow-emerald z-10`} />
                                {index < steps.length - 1 && (
                                    <div className="w-px h-24 bg-gradient-to-b from-brand-emerald to-brand-lime opacity-20 block md:hidden translate-y-4" />
                                )}
                            </div>

                            {/* Empty Side (Desktop) */}
                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
