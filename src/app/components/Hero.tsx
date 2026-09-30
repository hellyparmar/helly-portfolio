import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/hellyparmar', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/helly-parmar-b17800273', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:hellyparmar306@gmail.com', label: 'Email' },
  ];

  return (
    <section ref={ref} className="relative min-h-dvh flex flex-col overflow-hidden hero-section">
      {/* Data-grid background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15] hero-grid-bg"
      />

      {/* Ambient glow — top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none hero-glow-tr" />

      {/* Ambient glow — bottom left */}
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none hero-glow-bl" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="flex-1 flex flex-col justify-center pt-28 pb-12 px-6 md:px-12 max-w-screen-xl mx-auto w-full"
      >
        {/* Top status bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex items-center justify-between mb-20 md:mb-24"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7d9b7a] opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7d9b7a]" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[rgba(229,224,219,0.35)]">
              Available for opportunities
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(229,224,219,0.25)]">
            Ahmedabad, IN
          </span>
        </motion.div>

        {/* Main content — two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left: Name */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <h1 className="leading-[0.82] select-none hero-name">
              <span className="text-white-default">Helly</span>
              <br />
              <motion.span
                animate={{ textShadow: [
                  '0 0 10px rgba(201,123,93,0), 0 0 30px rgba(201,123,93,0)',
                  '0 0 20px rgba(201,123,93,0.4), 0 0 60px rgba(201,123,93,0.2)',
                  '0 0 10px rgba(201,123,93,0), 0 0 30px rgba(201,123,93,0)',
                ]}}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                style={{ color: '#c97b5d' }}
              >
                Parmar
              </motion.span>
            </h1>
          </motion.div>

          {/* Right: Content panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 space-y-8 flex flex-col justify-center"
          >
            {/* Role */}
            <div>
              <div className="w-8 h-px mb-5 hero-divider" />
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[rgba(229,224,219,0.3)] block mb-1.5">
                Data Scientist
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-[rgba(229,224,219,0.3)] block">
                Big Data Analytics & Advanced Statistics
              </span>
            </div>

            {/* Bio */}
            <p className="text-balance hero-bio">
              Master's candidate in Big Data Analytics with a foundation in Advanced Statistics. Proficient in Python, SQL, R, and Tableau — experienced in building predictive models, engineering ML pipelines, and translating complex data into actionable business intelligence and AI-driven solutions.
            </p>

            {/* CTA + Social */}
            <div className="flex items-center gap-5 flex-wrap pt-2">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2.5 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.12em] font-bold active:scale-[0.97] active:transition-transform active:duration-100 hero-cta"
              >
                View Work
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={label}
                    className="flex items-center justify-center w-9 h-9 border transition-all duration-200 hero-social-link"
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
