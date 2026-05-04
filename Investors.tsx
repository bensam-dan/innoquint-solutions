import { useEffect, useRef, useState } from 'react';
import { TrendingUp, DollarSign, Users, Globe, Download, ChevronRight, BarChart2, PieChart, FileText, Calendar } from 'lucide-react';

const metrics = [
  { icon: DollarSign, value: '$2.4B', label: 'Annual Revenue', change: '+18% YoY', positive: true },
  { icon: TrendingUp, value: '34.2%', label: 'Gross Margin', change: '+2.1pts', positive: true },
  { icon: Users, value: '10,400+', label: 'Enterprise Clients', change: '+22% YoY', positive: true },
  { icon: Globe, value: '140+', label: 'Countries Served', change: '+12 new', positive: true },
];

const reports = [
  { icon: FileText, title: 'Q1 2026 Earnings Report', date: 'April 28, 2026', size: '2.4 MB' },
  { icon: BarChart2, title: 'Annual Report 2025', date: 'March 15, 2026', size: '8.1 MB' },
  { icon: PieChart, title: 'Investor Presentation Dec 2025', date: 'December 10, 2025', size: '5.6 MB' },
  { icon: FileText, title: 'ESG & Sustainability Report 2025', date: 'November 22, 2025', size: '3.2 MB' },
];

const whyInvest = [
  {
    title: 'Market Leadership',
    description: 'Ranked #1 enterprise AI platform provider by Gartner for three consecutive years.',
  },
  {
    title: 'Recurring Revenue',
    description: '87% of revenue is subscription-based, providing predictable, compounding growth.',
  },
  {
    title: 'Global Expansion',
    description: 'Entering 15 new markets in 2026, targeting $500M in net new ARR.',
  },
  {
    title: 'R&D Investment',
    description: '22% of revenue reinvested in R&D, ensuring continuous product leadership.',
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

function MetricCard({ icon: Icon, value, label, change, positive }: typeof metrics[0]) {
  const [counted, setCounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCounted(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="glass-light rounded-2xl p-6 border border-cobalt-100 shadow-sm card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-cobalt-500/10 flex items-center justify-center">
          <Icon size={20} className="text-cobalt-600" />
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${positive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
          {change}
        </span>
      </div>
      <div className={`font-display text-3xl font-black text-cobalt-700 transition-all duration-700 ${counted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {value}
      </div>
      <div className="text-slate-500 text-sm font-medium mt-1">{label}</div>
    </div>
  );
}

export default function Investors() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="investors" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cobalt-200 to-transparent" />
      <div className="absolute -bottom-32 left-0 w-96 h-96 bg-cobalt-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-cobalt-500/10 text-cobalt-600 rounded-full px-4 py-1.5 text-sm font-semibold">
            Investor Relations
          </div>
          <h2 className="animate-on-scroll font-display text-4xl lg:text-5xl font-black text-slate-900">
            Built for{' '}
            <span className="text-gradient-blue">Sustainable</span>{' '}
            Growth
          </h2>
          <p className="animate-on-scroll text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Innoquint Solutions (NASDAQ: INQS) delivers consistent, compounding shareholder value through product innovation and disciplined global expansion.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Two-column: Why Invest + Reports */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Why Invest */}
          <div className="animate-on-scroll space-y-6">
            <h3 className="font-display text-2xl font-black text-slate-900">Why Invest in Innoquint</h3>
            <div className="space-y-4">
              {whyInvest.map(({ title, description }, i) => (
                <div key={title} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cobalt-200 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-cobalt-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm mb-0.5">{title}</div>
                    <div className="text-slate-500 text-sm leading-relaxed">{description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reports */}
          <div className="animate-on-scroll space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-black text-slate-900">Financial Reports</h3>
              <button className="text-cobalt-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                View All <ChevronRight size={14} />
              </button>
            </div>
            <div className="space-y-3">
              {reports.map(({ icon: Icon, title, date, size }) => (
                <div
                  key={title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cobalt-200 hover:bg-cobalt-50/50 transition-all group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-cobalt-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-cobalt-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-800 text-sm truncate">{title}</div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <Calendar size={11} />
                      {date}
                      <span>•</span>
                      {size}
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-cobalt-600 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 hover:text-cobalt-800">
                    <Download size={14} />
                    PDF
                  </button>
                </div>
              ))}
            </div>

            {/* IR Contact */}
            <div className="rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-800 p-6 text-white">
              <div className="font-bold mb-1">Investor Relations Contact</div>
              <div className="text-white/60 text-sm mb-3">Speak directly with our IR team</div>
              <div className="text-sm space-y-1">
                <div className="text-white/80">ir@innoquintsolutions.com</div>
                <div className="text-white/80">+1 (800) 555-INQS</div>
              </div>
              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-emerald-400 text-sm font-semibold hover:text-emerald-300 transition-colors">
                Schedule a Call <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Stock ticker placeholder */}
        <div className="animate-on-scroll flex items-center gap-6 p-6 bg-slate-900 rounded-2xl text-white overflow-x-auto">
          <div className="flex-shrink-0">
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">NASDAQ</div>
            <div className="font-display font-black text-2xl text-emerald-400">INQS</div>
          </div>
          <div className="w-px h-12 bg-white/20 flex-shrink-0" />
          {[
            { label: 'Last Price', value: '$148.72' },
            { label: 'Change', value: '+$3.24 (2.22%)' },
            { label: 'Market Cap', value: '$22.4B' },
            { label: 'P/E Ratio', value: '38.2x' },
            { label: '52W High', value: '$162.40' },
            { label: '52W Low', value: '$98.15' },
          ].map(({ label, value }) => (
            <div key={label} className="flex-shrink-0">
              <div className="text-xs text-white/40 mb-0.5">{label}</div>
              <div className="font-semibold text-sm text-white">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
