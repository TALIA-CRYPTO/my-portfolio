"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Layout,
    Smartphone,
    Cpu,
    Globe,
    Layers
} from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Building lightning-fast, scalable web applications with Next.js and React.",
        icon: Globe,
    },
    {
        title: "UI/UX Design",
        description: "Crafting beautiful, intuitive interfaces with a focus on user experience.",
        icon: Layout,
    },
    {
        title: "Mobile Solutions",
        description: "Responsive designs that feel native on every device, from mobile to desktop.",
        icon: Smartphone,
    },
    {
        title: "Software Engineering",
        description: "Architecting clean, maintainable code for complex business logic.",
        icon: Code2,
    },
    {
        title: "System Design",
        description: "Designing robust backend systems and database architectures.",
        icon: Cpu,
    },
    {
        title: "Full-Stack Integration",
        description: "Connecting seamless frontends with powerful server-side technologies.",
        icon: Layers,
    },
];

export default function ServiceGrid() {
    return (
        <section className="container mx-auto px-6 py-20 relative">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise & <span className="text-brand-emerald">Services</span></h2>
                <div className="w-20 h-1 bg-brand-emerald rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.2 }
                        }}
                        className="group relative p-8 rounded-3xl glass glass-emerald transition-all hover:bg-white/[0.03]"
                    >
                        <div className="mb-6 p-4 w-fit rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald transition-colors group-hover:bg-brand-emerald group-hover:text-obsidian">
                            <service.icon size={28} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-white/60 leading-relaxed">
                            {service.description}
                        </p>

                        {/* Subtle bottom glow on hover */}
                        <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-emerald/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
