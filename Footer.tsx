import { useState } from 'react';
import { Linkedin, Twitter, Youtube, Github, Send, ArrowRight, Mail } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership Team', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press & Media', href: '#' },
    { label: 'Corporate Responsibility', href: '#' },
    { label: 'Contact', href: '#contact' },
  ],
  Products: [
    { label: 'InnoAI Platform', href: '#products' },
    { label: 'CloudOrbit Suite', href: '#products' },
    { label: 'CyberQuint Defense', href: '#products' },
    { label: 'DataPulse Analytics', href: '#products' },
    { label: 'ConnectIQ Network', href: '#products' },
    { label: 'VaultDB Enterprise', href: '#products' },
  ],
  Services: [
    { label: 'Implementation', href: '#services' },
    { label: 'Custom Development', href: '#services' },
    { label: 'Managed Services', href: '#services' },
    { label: 'Training & Enablement', href: '#services' },
    { label: 'Digital Transformation', href: '#services' },
    { label: 'Security & Compliance', href: '#services' },
  ],
  Resources: [
    { label: 'Blog & Insights', href: '#blog' },
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Investor Relations', href: '#investors' },
    { label: 'Partner Program', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
};

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Top CTA bar */}
      <div className="bg-gradient-to-r from-cobalt-800 to-cobalt-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-black">Ready to Transform Your Enterprise?</h3>
              <p className="text-white/70 mt-2">Join 10,000+ companies already innovating with Innoquint.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                Get Started Today <ArrowRight size={16} />
              </a>
              <a href="#products" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                View Products
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-5">
              <a href="#" className="block">
                <img
                  src="/logo_as_png.png"
                  alt="Innoquint Solutions"
                  width={225}
                  height={75}
                  className="h-[75px] w-auto object-contain brightness-0 invert"
                  style={{ imageRendering: 'high-quality', background: 'transparent' }}
                />
              </a>
              <p className="text-slate-400 text-sm leading-relaxed">
                Innovating the future of global enterprise technology. Connecting businesses across 140+ countries.
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-cobalt-600 transition-colors"
                  >
                    <Icon size={16} className="text-slate-400 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="space-y-4">
                <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white/60">{category}</h4>
                <ul className="space-y-2.5">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block duration-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-display font-bold text-lg">Stay Ahead of the Curve</h4>
                <p className="text-slate-400 text-sm mt-1">Monthly insights on enterprise tech, delivered to your inbox.</p>
              </div>
              <form onSubmit={handleNewsletter} className="flex gap-3">
                {subscribed ? (
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                    <Send size={16} /> You're subscribed — thank you!
                  </div>
                ) : (
                  <>
                    <div className="relative flex-1">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cobalt-500/40 focus:border-cobalt-500 transition-all"
                      />
                    </div>
                    <button type="submit" className="btn-primary px-5 py-3 flex-shrink-0">
                      Subscribe
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
          <div>© 2026 Innoquint Solutions, Inc. All rights reserved.</div>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
