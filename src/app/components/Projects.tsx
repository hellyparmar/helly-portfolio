import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingDown, Brain, BarChart2, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: '01', title: 'ERIS', sub: 'Enterprise Retail Intelligence System',
    desc: 'End-to-end analytical pipeline — predictive forecasting, causal inference, and a context-aware AI assistant built with LangChain and RAG.',
    tags: ['Python', 'LangChain', 'RAG', 'Causal Inference'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop',
    github: 'https://github.com/hellyparmar', year: '2026', cat: 'AI / Data Engineering',
    accent: '#c97b5d', Icon: Brain,
    stat: null,
  },
  {
    id: '02', title: 'Uplift Modeling', sub: 'Precision Marketing via Causal Inference',
    desc: 'CausalML meta-learner pipeline isolating persuadable customers. Reduced campaign size while retaining 100% of incremental revenue.',
    tags: ['Python', 'CausalML', 'SHAP', 'Meta-Learners'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
    github: 'https://github.com/hellyparmar', year: '2026', cat: 'Causal Inference',
    accent: '#7d9b7a', Icon: TrendingDown,
    stat: null,
  },
  {
    id: '03', title: 'Meeting AI', sub: 'AI-Powered Meeting Intelligence',
    desc: 'NLP pipeline over the AMI Corpus — auto-detects priorities, extracts deadlines, surfaces structured insights via a dashboard.',
    tags: ['NLP', 'Python', 'AI', 'AMI Corpus'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&h=900&fit=crop',
    github: 'https://github.com/hellyparmar', year: '2025', cat: 'AI / NLP',
    accent: '#c97b5d', Icon: BarChart2,
    stat: null,
  },
  {
    id: '04', title: 'G7 Trade Analysis', sub: 'Panel Data Analysis of Trade Determinants',
    desc: 'Econometric modeling in R and EViews — Kao cointegration, POLS, Fixed & Random Effects, Panel ARDL across G7 economies.',
    tags: ['R', 'EViews', 'Panel Data', 'Econometrics'],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1400&h=900&fit=crop',
    github: 'https://github.com/hellyparmar', year: '2025', cat: 'Econometrics',
    accent: '#7d9b7a', Icon: Globe,
    stat: { value: 'G7', label: 'Economies Analysed' },
  },
];

type P = (typeof projects)[0];

function ProjectCard({ p, delay }: { p: P; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const accentClass = p.accent === '#c97b5d' ? 'accent-terra' : 'accent-sage';

  const styleVars = {
    '--card-border-hover': `${p.accent}66`,
    '--card-shadow-hover': `0 0 40px -12px ${p.accent}40`,
  } as React.CSSProperties;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex flex-col min-h-[420px] bg-[#0a0a0a] border border-[rgba(255,255,255,0.07)] rounded-xl overflow-hidden transition-all duration-[350ms] hover:!border-[var(--card-border-hover)] hover:!shadow-[var(--card-shadow-hover)] proj-card ${accentClass}`}
      style={styleVars}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={p.image} 
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-20 group-hover:blur-sm group-hover:scale-105 transition-all duration-[700ms] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent group-hover:from-[#080808]/80 transition-colors duration-500" />

      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col flex-1 p-6 h-full">
        {/* 1. Top bar (Hidden by default, appears on hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-center mb-auto">
          <span className="proj-cat font-mono text-[9px] uppercase tracking-widest">
            {p.cat}
          </span>
          <span className="proj-year font-mono text-[9px] opacity-50">
            {p.year}
          </span>
        </div>

        {/* Bottom Content Wrapper (Pushed to bottom) */}
        <div className="mt-auto flex flex-col">
          <h3 className="proj-title text-[clamp(28px,3.5vw,44px)] drop-shadow-md">
            {p.title}
          </h3>
          
          {/* Details (Hidden by default, slides up and appears on hover) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
            <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col">
              <p className="proj-sub font-mono text-[9px] uppercase tracking-wide opacity-60 mt-2">
                {p.sub}
              </p>
              
              <p className="proj-desc font-body text-[13px] leading-[1.75] text-[#e5e0db] opacity-75 mt-3 max-w-[38ch] !mb-0 drop-shadow-sm">
                {p.desc}
              </p>
              
              {p.stat && (
                <div 
                  className={`inline-flex items-center mt-4 px-3 py-1.5 rounded-lg border w-fit bg-black/20 backdrop-blur-sm ${p.accent === '#c97b5d' ? 'border-[#c97b5d]/30' : 'border-[#7d9b7a]/30'}`}
                >
                  <span className={`font-display font-black text-[22px] leading-none mr-2 ${p.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>
                    {p.stat.value}
                  </span>
                  <span className={`font-mono text-[8px] uppercase opacity-80 ${p.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>
                    {p.stat.label}
                  </span>
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tags.slice(0, 3).map(t => (
                  <span key={t} className="proj-tag font-mono text-[8px] uppercase px-2 py-0.5 rounded-sm border bg-black/20 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, amount: 0.5 });

  return (
    <section id="projects" className="projects-section">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div ref={titleRef} className="flex items-end justify-between pt-20 pb-8 projects-header">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }}>
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] mb-3 text-terra">
              Selected Work
            </span>
            <h2 className="projects-heading">
              Projects
            </h2>
          </motion.div>
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono text-[11px] uppercase tracking-widest self-end pb-2 projects-count"
          >
            0{projects.length} case studies
          </motion.span>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {projects.map((p, index) => (
            <ProjectCard key={p.id} p={p} delay={[0, 0.08, 0.15, 0.22][index] || 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
