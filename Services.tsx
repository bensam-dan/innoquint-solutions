import { useEffect, useRef } from 'react';
import { Settings, Code2, Headphones, GraduationCap, RefreshCw, Lock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Implementation & Integration',
    description: 'End-to-end deployment of Innoquint platforms into your existing enterprise architecture, including legacy system migration.',
    accent: 'emerald',
  },
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Bespoke software engineering tailored to your unique workflows — from API development to full-stack enterprise applications.',
    accent: 'cobalt',
  },
  {
    icon: Headphones,
    title: '24/7 Managed Services',
    description: 'Round-the-clock monitoring, maintenance, and support with guaranteed SLAs ensuring your systems never miss a beat.',
    accent: 'emerald',
  },
  {
    icon: GraduationCap,
    title: 'Training & Enablement',
    description: 'Comprehensive training programs and certification pathways to empower your teams to maximize platform value.',
    accent: 'cobalt',
  },
  {
    icon: RefreshCw,
    title: 'Digital Transformation',
    description: 'Strategic consulting and execution services to guide your organization through complex modernization journeys.',
    accent: 'emerald',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'Dedicated security advisory, penetration testing, and compliance management for regulated industries.',
    accent: 'cobalt',
  },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.animate-on-scroll').forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 80);
          });
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Services() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 circuit-overlay opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 rounded-full px-4 py-1.5 text-sm font-semibold">
            Our Services
          </div>
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-black text-slate-900">
            End-to-End{' '}
            <span className="text-gradient-green">Expert Services</span>
          </h2>
          <p className="animate-on-scroll text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            From strategy to execution, our global team of specialists delivers measurable outcomes at every stage of your technology journey.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map(({ icon: Icon, title, description, accent }) => (
            <div
              key={title}
              className="animate-on-scroll card-hover group bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              {/* Hover accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                accent === 'emerald' ? 'bg-emerald-500' : 'bg-cobalt-500'
              }`} />

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                accent === 'emerald' ? 'bg-emerald-500/10' : 'bg-cobalt-500/10'
              }`}>
                <Icon size={22} className={accent === 'emerald' ? 'text-emerald-600' : 'text-cobalt-600'} />
              </div>

              <h3 className="font-display font-bold text-base text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

              <div className={`mt-4 flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5 ${
                accent === 'emerald' ? 'text-emerald-600' : 'text-cobalt-600'
              }`}>
                Explore Service <ArrowRight size={12} />
              </div>
            </div>
          ))}
        </div>

        {/* Process section */}
        <div className="animate-on-scroll bg-gradient-to-br from-cobalt-900 to-cobalt-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 circuit-overlay opacity-40 pointer-events-none" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-black">Our Delivery Methodology</h3>
              <p className="text-white/70 leading-relaxed">
                We follow a proven, iterative delivery framework that prioritizes speed-to-value while maintaining rigorous quality standards and stakeholder alignment at every milestone.
              </p>
              <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
                Start a Project <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Discover', 'Design', 'Build', 'Scale'].map((phase, i) => (
                <div key={phase} className="glass rounded-xl p-4">
                  <div className="text-emerald-400 font-bold text-2xl mb-1">0{i + 1}</div>
                  <div className="font-semibold text-white">{phase}</div>
                  <div className="text-white/50 text-xs mt-1">
                    {['Requirements & audit', 'Architecture & UX', 'Agile delivery', 'Optimize & grow'][i]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
