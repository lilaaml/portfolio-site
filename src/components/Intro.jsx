import cv from '../assets/CV.pdf'
import { Button } from "@/components/ui/button"
import Typewriter from 'typewriter-effect';

const Terminal = () => {
  return (
    <div className="w-full max-w-2xl mt-12 overflow-hidden rounded-xl bg-[#1d1d1d] border border-border/50 shadow-2xl font-mono text-sm md:text-base text-slate-300">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#333] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-xs text-slate-500 font-sans tracking-wide">bash — 80x24</div>
      </div>
      <div className="p-6 min-h-[220px]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-slate-500">$</span> lila-audit --target <span class="text-emerald-400">"business_logic"</span>')
              .pauseFor(500)
              .typeString('<br/>[<span class="text-amber-400">WAIT</span>] Scanning repository for vulnerabilities...')
              .pauseFor(800)
              .typeString('<br/>[<span class="text-emerald-400">OK</span>] Code-level integrity verified.')
              .pauseFor(500)
              .typeString('<br/>[<span class="text-amber-400">WAIT</span>] Checking regulatory compliance (ISO 27001/SOC2)...')
              .pauseFor(800)
              .typeString('<br/>[<span class="text-emerald-400">OK</span>] Business process integrity aligned.')
              .pauseFor(1000)
              .typeString('<br/><span class="text-primary font-bold">[SUCCESS] System resilient. Ready for deployment.</span>')
              .start();
          }}
          options={{
            cursor: '▋',
            delay: 30,
          }}
        />
      </div>
    </div>
  );
};

const Intro = () => {
  return (
    <section id="aboutme" className="container min-h-screen flex flex-col justify-center items-center py-24 px-4 w-full">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-lg font-bold tracking-tight mb-6">
            Hey there, I'm <span className="text-primary">Lila</span>
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Full-Stack Software Engineer & Security Specialist
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I help organizations navigate the complex landscape of digital risk without slowing down innovation. With a background that spans the full software lifecycle, I provide a unique perspective that treats security not as a hurdle, but as a core feature of high-quality engineering.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href={cv} download="CV">Download CV</a>
          </Button>
        </div>
        <div className="flex justify-center">
          <Terminal />
        </div>
      </div>
    </section>
  )
}


export default Intro
