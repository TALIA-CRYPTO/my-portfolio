import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import ProjectGallery from "@/components/ProjectGallery";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <div className="bg-obsidian relative z-20">
        <ServiceGrid />
        <ProjectGallery />
        <ProcessSection />

        <footer className="container mx-auto px-6 py-20 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-2">Nyaboga <span className="text-brand-emerald text-glow-emerald">Faith</span></h2>
              <p className="text-white/40 text-sm italic">Designing the future, one pixel at a time.</p>
            </div>

            <div className="flex gap-8 text-white/60 text-sm font-medium">
              <a href="#" className="hover:text-brand-emerald transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-brand-emerald transition-colors">GitHub</a>
              <a href="#" className="hover:text-brand-emerald transition-colors">Twitter</a>
              <a href="#" className="hover:text-brand-emerald transition-colors">Contact</a>
            </div>

            <p className="text-white/20 text-xs text-center md:text-right">
              &copy; 2024 Nyaboga Faith. All rights reserved.<br />
              Premium Web Design & Engineering.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
