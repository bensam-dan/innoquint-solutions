import { useEffect, useRef } from 'react';
import { Brain, Cloud, Shield, BarChart3, Network, Database, ArrowRight, Star } from 'lucide-react';

const products = [
  {
    icon: Brain,
    name: 'InnoAI Platform',
    tagline: 'Enterprise Artificial Intelligence',
    description: 'A full-stack AI operations platform enabling enterprises to build, deploy, and scale machine learning models with unmatched reliability.',
    features: ['AutoML pipelines', 'Real-time inference', 'Model governance', 'Explainable AI'],
    badge: 'Most Popular',
    color: 'cobalt',
  },
  {
    icon: Cloud,
    name: 'CloudOrbit Suite',
    tagline: 'Hybrid Cloud Management',
    description: 'Unify your multi-cloud and on-premise infrastructure under a single intelligent control plane with automated compliance and cost optimization.',
    features: ['Multi-cloud orchestration', 'Cost analytics', 'Auto-scaling', 'Zero-trust security'],
    badge: null,
    color: 'emerald',
  },
  {
    icon: Shield,
    name: 'CyberQuint Defense',
    tagline: 'Next-Gen Cybersecurity',
    description: 'AI-powered threat detection and response platform that proactively identifies and neutralizes cyber threats before they impact operations.',
    features: ['Threat intelligence', 'Zero-day detection', 'SOC automation', 'Compliance reporting'],
    badge: 'New',
    color: 'cobalt',
  },
  {
    icon: BarChart3,
    name: 'DataPulse Analytics',
    tagline: 'Business Intelligence & Analytics',
    description: 'Transform raw enterprise data into actionable intelligence with our real-time analytics platform, powered by proprietary graph algorithms.',
    features: ['Real-time dashboards', 'Predictive analytics', 'Data lineage', 'Self-serve BI'],
    badge: null,
    color: 'emerald',
  },
  {
    icon: Network,
    name: 'ConnectIQ Network',
    tagline: 'Software-Defined Networking',
    description: 'Enterprise-grade SD-WAN and network automation platform delivering performance and resilience for distributed global operations.',
    features: ['SD-WAN fabric', 'Network automation', 'QoS management', 'Edge computing'],
    badge: null,
    color: 'cobalt',
  },
  {
    icon: Database,
    name: 'VaultDB Enterprise',
    tagline: 'Distributed Data Management',
    description: 'A geo-distributed database platform designed for mission-critical workloads, offering global consistency with sub-millisecond latency.',
    features: ['Global distribution', 'ACID compliance', 'Infinite scaling', 'Disaster recovery'],
    badge: null,
    color: 'emerald',
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

export default function Products() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="products" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cobalt-200 to-transparent" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-cobalt-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-cobalt-500/10 text-cobalt-600 rounded-full px-4 py-1.5 text-sm font-semibold">
            Our Products
          </div>
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-black text-slate-900">
            Enterprise-Grade{' '}
            <span className="text-gradient-blue">Technology</span>{' '}
            Platforms
          </h2>
          <p className="animate-on-scroll text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Six flagship platforms. One unified ecosystem. Built for the demands of modern global enterprise.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(({ icon: Icon, name, tagline, description, features, badge, color }) => (
            <div
              key={name}
              className="animate-on-scroll card-hover group relative bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-cobalt-200 hover:shadow-cobalt-100"
            >
              {badge && (
                <div className={`absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full ${
                  badge === 'Most Popular'
                    ? 'bg-cobalt-500 text-white'
                    : 'bg-emerald-500 text-white'
                }`}>
                  {badge}
                </div>
              )}

              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                color === 'cobalt'
                  ? 'bg-cobalt-500/10 group-hover:bg-cobalt-500/20'
                  : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
              }`}>
                <Icon size={22} className={color === 'cobalt' ? 'text-cobalt-600' : 'text-emerald-600'} />
              </div>

              <div className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: color === 'cobalt' ? '#1a56db' : '#10b981' }}>
                {tagline}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>

              <ul className="space-y-1.5 mb-6">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color === 'cobalt' ? 'bg-cobalt-500' : 'bg-emerald-500'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
                  color === 'cobalt' ? 'text-cobalt-600' : 'text-emerald-600'
                }`}
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-scroll text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4">
            Request a Demo <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
