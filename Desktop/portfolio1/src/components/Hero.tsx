"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Nebula Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/nebula.png"
                    alt="Nebula Background"
                    fill
                    className="object-cover opacity-60 scale-110"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase border border-brand-emerald/30 rounded-full bg-brand-emerald/5 text-brand-emerald">
                        Available for new projects
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                        I Design & Build <br />
                        <span className="text-brand-emerald text-glow-emerald">Websites</span> That Help <br />
                        Your Business <span className="text-brand-lime">Grow</span>.
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
                        Hi, I'm <span className="text-white font-semibold">Nyaboga Faith</span>. A Computer Science graduate and Software Engineer specializing in high-fidelity, premium digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-brand-emerald text-obsidian font-bold rounded-full flex items-center gap-2 glow-emerald transition-all hover:bg-brand-lime"
                        >
                            Get in Touch <ArrowRight size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full transition-all hover:bg-white/10"
                        >
                            View My Work
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-emerald/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-lime/10 blur-[120px] rounded-full pointer-events-none" />
        </section>
    );
}
