import { useEffect, useRef } from 'react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';

function GlobeGraphic() {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Outer glow */}
      <div className="absolute w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-cobalt-500/10 blur-3xl animate-pulse-slow" />

      {/* Globe core */}
      <div className="relative w-64 h-64 lg:w-80 lg:h-80 animate-float">
        {/* Planet body */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cobalt-400 via-cobalt-600 to-cobalt-900 shadow-2xl shadow-cobalt-900/50">
          {/* Shine */}
          <div className="absolute top-4 left-8 w-16 h-10 bg-white/20 rounded-full blur-md rotate-[-30deg]" />
          {/* Latitude lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
            {[20, 35, 50, 65].map((top) => (
              <div
                key={top}
                className="absolute left-0 right-0 border-t border-white/40"
                style={{ top: `${top}%` }}
              />
            ))}
            {[20, 35, 50, 65, 80].map((left) => (
              <div
                key={left}
                className="absolute top-0 bottom-0 border-l border-white/40"
                style={{ left: `${left}%` }}
              />
            ))}
          </div>
          {/* Green continent patches */}
          <div className="absolute top-8 left-12 w-16 h-12 bg-emerald-400/60 rounded-full blur-sm rotate-12" />
          <div className="absolute bottom-12 right-8 w-12 h-16 bg-emerald-500/50 rounded-full blur-sm -rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-8 h-8 bg-emerald-400/40 rounded-full blur-sm" />
        </div>

        {/* Orbiting ring 1 */}
        <div
          className="absolute inset-[-24px] rounded-full border-2 border-emerald-400/40"
          style={{ transform: 'rotateX(70deg) rotateZ(-15deg)' }}
        >
          {/* Circuit dots on ring */}
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-emerald-400/80 animate-pulse" />
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-cobalt-300 rounded-full -translate-x-1/2 translate-y-1/2 shadow-lg shadow-cobalt-300/80" />
          <div className="absolute top-1/2 right-0 w-2 h-2 bg-emerald-300 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>

        {/* Orbiting ring 2 */}
        <div
          className="absolute inset-[-40px] rounded-full border border-cobalt-400/25"
          style={{ transform: 'rotateX(75deg) rotateZ(25deg)' }}
        >
          <div className="absolute top-1/4 right-0 w-2 h-2 bg-cobalt-300 rounded-full translate-x-1/2 animate-pulse" />
        </div>

        {/* Circuit connectors */}
        <div className="absolute -right-8 top-1/3 flex items-center gap-1">
          <div className="w-8 h-px bg-emerald-400/60" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/80 border border-emerald-300" />
          <div className="w-4 h-px bg-emerald-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
        </div>
        <div className="absolute -left-10 top-2/3 flex items-center gap-1 flex-row-reverse">
          <div className="w-8 h-px bg-cobalt-400/60" />
          <div className="w-2 h-2 rounded-full bg-cobalt-400/80 border border-cobalt-300" />
          <div className="w-6 h-px bg-cobalt-400/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-cobalt-400/60" />
        </div>
        <div className="absolute -top-8 left-1/3 flex flex-col items-center gap-1">
          <div className="w-px h-6 bg-cobalt-400/50" />
          <div className="w-2 h-2 rounded-full bg-cobalt-400/80" />
        </div>
        <div className="absolute -bottom-6 right-1/3 flex flex-col items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
          <div className="w-px h-4 bg-emerald-400/50" />
        </div>
      </div>

      {/* Floating stat chips */}
      <div className="absolute top-4 right-4 lg:right-8 glass-dark rounded-xl px-3 py-2 text-white text-xs font-medium animate-float" style={{ animationDelay: '1s' }}>
        <div className="text-emerald-400 font-bold text-sm">98.9%</div>
        <div className="text-white/70">Uptime SLA</div>
      </div>
      <div className="absolute bottom-8 left-4 lg:left-8 glass-dark rounded-xl px-3 py-2 text-white text-xs font-medium animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-cobalt-300 font-bold text-sm">140+</div>
        <div className="text-white/70">Countries</div>
      </div>
      <div className="absolute top-1/2 -right-2 lg:right-0 glass-dark rounded-xl px-3 py-2 text-white text-xs font-medium animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="text-emerald-400 font-bold text-sm">AI-Powered</div>
        <div className="text-white/70">Solutions</div>
      </div>
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-overlay opacity-100 pointer-events-none" />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cobalt-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl" />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-cobalt-400/10 rounded-full blur-3xl" />

      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-emerald-400 font-medium border border-emerald-500/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Global Technology Leader
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Innovating the{' '}
              <span className="relative">
                <span className="text-gradient-brand bg-gradient-to-r from-cobalt-300 to-emerald-400 bg-clip-text text-transparent">Future</span>
              </span>
              {' '}of Global Solutions.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              Innoquint Solutions delivers cutting-edge technology platforms that connect enterprises across the globe — from intelligent infrastructure to AI-driven analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#about" className="btn-primary inline-flex items-center justify-center gap-2 text-base px-8 py-4">
                Discover More
                <ArrowRight size={18} />
              </a>
              <a href="#investors" className="btn-outline inline-flex items-center justify-center gap-2 text-base px-8 py-4 border-white/40 text-white hover:bg-white/10">
                Investor Relations
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
              {[
                { value: '$2.4B+', label: 'Revenue' },
                { value: '10,000+', label: 'Clients' },
                { value: '25 Yrs', label: 'Experience' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Globe Graphic */}
          <div className="relative h-80 lg:h-[500px] flex items-center justify-center">
            <GlobeGraphic />
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="text-white/40 text-sm text-center mb-8 tracking-widest uppercase">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
            {['TechCorp Global', 'NexusAI', 'DataStream Pro', 'CloudBridge', 'QuantumEdge', 'SyncForce'].map((name) => (
              <div key={name} className="text-white/25 font-display font-bold text-sm tracking-wide hover:text-white/50 transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}
