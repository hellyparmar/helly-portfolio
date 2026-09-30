import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Terminal, BookOpen, Calendar, Activity, Database, Check } from 'lucide-react';

const experiences = [
  {
    id: 'earthora',
    session: 'SESSION_01',
    role: 'AI-ML Engineer Intern',
    company: 'Sun Pathology Laboratory & Research Institute (Earthora)',
    period: 'Aug 2026 – Present',
    domain: 'Conversational AI & Product Engineering',
    accent: '#c97b5d',
    status: 'ACTIVE_NODE',
    bullets: [
      'Engineered an AI-powered voice agent for Earthora, designing conversational workflows to automate customer interactions, product inquiries, and information retrieval through a voice interface.',
      'Developed and integrated a production customer web platform for Earthora, supporting product discovery, ordering, and customer inquiries, in collaboration with the engineering team.'
    ],
    stack: ['Python', 'Conversational AI', 'Voice Interfaces', 'Web Integration', 'Product Engineering']
  },
  {
    id: 'petpooja',
    session: 'SESSION_02',
    role: 'Data Science Intern',
    company: 'Petpooja Co. — Prayosha Food Services Pvt. Ltd.',
    period: 'Dec 2025 – Jul 2026',
    domain: 'Predictive Modeling & Data Quality',
    accent: '#7d9b7a',
    status: 'COMPLETE',
    bullets: [
      'Conducted rigorous structural quality checks, systematically identifying and resolving data anomalies to ensure reliable inputs for downstream ML applications.',
      'Engineered analytical features and validated predictive model outputs against baseline metrics, rigorously evaluating performance to guarantee high prediction accuracy.'
    ],
    stack: ['Python', 'Scikit-Learn', 'SQL', 'Feature Engineering', 'Model Validation', 'EDA']
  },
  {
    id: 'yhonk',
    session: 'SESSION_03',
    role: 'Big Data Analysis Intern',
    company: 'YHonk India Pvt. Ltd.',
    period: 'Mar 2025 – Nov 2025',
    domain: 'Geo-analytics & Streams',
    accent: '#c97b5d',
    status: 'COMPLETE',
    bullets: [
      'Cleaned, structured, and analyzed continuous high-volume audio sensor data streams, resolving anomalies to significantly improve noise detection accuracy within designated No Honking Zones.',
      'Designed and deployed dynamic geo-visualizations using Folium, map polygons, OpenStreetMap, and Google Maps API to spatially map noise hotspots.'
    ],
    stack: ['Python', 'Folium', 'Geospatial Analytics', 'OpenStreetMap API', 'Google Maps API']
  }
];

const education = [
  {
    id: '01',
    degree: 'MSc in Big Data Analytics',
    inst: "St. Xavier's College (Autonomous), Ahmedabad",
    period: '2024-2026',
    percent: 100,
    status: 'COMPLETE',
    accent: '#7d9b7a',
    desc: 'Specializing in Big Data Analytics, machine learning, statistical modeling, and data visualization.'
  },
  {
    id: '02',
    degree: 'PG Diploma in Data Analysis',
    inst: 'B. K. School of Professional & Management Studies, Ahmedabad',
    period: '2023-2024',
    percent: 100,
    status: 'COMPLETE',
    accent: '#7d9b7a',
    desc: 'Advanced training in data analysis methodologies, statistical techniques, and decision sciences.'
  },
  {
    id: '03',
    degree: 'BCom in Advance Statistics',
    inst: 'H. L. College of Commerce, Ahmedabad',
    period: '2020-2023',
    percent: 100,
    status: 'COMPLETE',
    accent: '#7d9b7a',
    desc: 'Strong foundation in statistical methods, quantitative analysis, and business analytics.'
  }
];

export function About() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const [activeSessionIdx, setActiveSessionIdx] = useState(0);
  const [terminalHovered, setTerminalHovered] = useState(false);

  const activeExp = experiences[activeSessionIdx];

  return (
    <section id="about" className="bg-[#0a0a0a] pb-[120px] overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <div
          ref={titleRef}
          className="flex flex-col pt-16 pb-12 mb-12 border-b border-[rgba(255,255,255,0.08)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#c97b5d] block mb-3"
            >
              Background
            </span>
            <h2
              className="font-display font-black text-[clamp(44px,7vw,100px)] uppercase bg-gradient-to-br from-[#c97b5d] to-[#7d9b7a] bg-[length:200%_200%] animate-[gradient-shift_6s_ease_infinite] bg-clip-text text-transparent leading-[0.9] tracking-[-0.02em]"
            >
              Experience &<br />Education
            </h2>
          </motion.div>
        </div>

        {/* Dynamic Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* LEFT: Redesigned Bio-Metric Narrative Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full gap-6">
            <div className="border border-neutral-800/80 bg-neutral-950/50 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden space-y-6 hover:border-[#c97b5d]/20 hover:shadow-[0_0_40px_-15px_rgba(201,123,93,0.06)] transition-all duration-500">
              {/* Decorative target scanner element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c97b5d]/10 to-transparent pointer-events-none rounded-bl-full" />
              
              <div className="flex items-center gap-2.5 text-[#c97b5d]">
                <Activity className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest">
                  IDENTITY_STATUS: VERIFIED
                </span>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-neutral-300 leading-relaxed font-body font-light">
                  I am an <span className="text-[#c97b5d] font-medium">analytically-driven</span> data specialist bridging the gap between raw statistical data and spatial visualization models.
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed font-body">
                  Equipped with deep expertise in Python, machine learning algorithms, and spatial analytics tools, I convert massive datasets into clean, actionable visual representations.
                </p>
              </div>

              <div className="border-t border-neutral-900 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-[#c97b5d]">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">
                    Overview
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-3.5 hover:border-[#c97b5d]/20 hover:shadow-[0_0_25px_-10px_rgba(201,123,93,0.08)] transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Education</span>
                    <span className="text-[11px] font-bold text-white block">MSc Big Data Analytics</span>
                    <span className="text-[8px] font-mono text-neutral-600">St. Xavier's College</span>
                  </div>
                  <div className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-3.5 hover:border-[#7d9b7a]/20 hover:shadow-[0_0_25px_-10px_rgba(125,155,122,0.08)] transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Location</span>
                    <span className="text-[11px] font-bold text-white block">Ahmedabad, India</span>
                    <span className="text-[8px] font-mono text-neutral-600">Open to relocate</span>
                  </div>
                  <div className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-3.5 hover:border-[#c97b5d]/20 hover:shadow-[0_0_25px_-10px_rgba(201,123,93,0.08)] transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Work Mode</span>
                    <span className="text-[11px] font-bold text-white block">Remote / On-site</span>
                    <span className="text-[8px] font-mono text-neutral-600">Flexible</span>
                  </div>
                  <div className="bg-neutral-900/40 border border-neutral-900 rounded-xl p-3.5 hover:border-[#7d9b7a]/20 hover:shadow-[0_0_25px_-10px_rgba(125,155,122,0.08)] transition-all duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase block mb-1">Languages</span>
                    <span className="text-[11px] font-bold text-white block">English, Hindi, Gujarati</span>
                    <span className="text-[8px] font-mono text-neutral-600">Full professional</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Activity Ticker */}
            <div className="border border-neutral-900 bg-neutral-950/20 rounded-xl p-4 flex items-center justify-between text-[11px] font-mono text-neutral-500">
              <span className="flex items-center gap-2">
                <Database className="w-3.5 h-3.5 text-[#c97b5d]" />
                <span>ENVIRONMENT_READY: OK</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c97b5d] animate-ping" />
                <span>ONLINE</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Advanced Multi-Tab Terminal Experience */}
          <div className="lg:col-span-8 flex flex-col h-full justify-between gap-4">
            <div className="flex items-center justify-between pl-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c97b5d] flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Professional Experience
              </span>
              <span className="text-[10px] font-mono text-neutral-600 hidden md:block">
                ACTIVE_SESSIONS: {experiences.length}
              </span>
            </div>

            {/* Premium Shell Terminal */}
            <div 
              onMouseEnter={() => setTerminalHovered(true)}
              onMouseLeave={() => setTerminalHovered(false)}
              className={`border rounded-2xl bg-neutral-950/80 backdrop-blur-md overflow-hidden transition-all duration-500 flex-1 flex flex-col ${terminalHovered ? (activeExp.accent === '#c97b5d' ? 'border-[#c97b5d]/50 shadow-[0_12px_40px_-15px_rgba(201,123,93,0.08)]' : 'border-[#7d9b7a]/50 shadow-[0_12px_40px_-15px_rgba(125,155,122,0.08)]') : 'border-[rgba(255,255,255,0.06)] shadow-none'}`}
            >
              {/* Window Header / Tab Selector */}
              <div className="bg-neutral-900 px-4 py-1.5 border-b border-neutral-800/80 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  
                  {/* Interactive Terminal Tabs */}
                  <div className="flex gap-1 ml-4">
                    {experiences.map((exp, idx) => {
                      const isSelected = activeSessionIdx === idx;
                      return (
                        <button
                          key={exp.id}
                          onClick={() => setActiveSessionIdx(idx)}
                          className={`px-3 py-2 rounded-t-lg font-mono text-[10px] uppercase tracking-wider transition-all duration-300 border-t-2 ${isSelected ? (exp.accent === '#c97b5d' ? 'bg-[#0a0a0a] border-[#c97b5d] text-[#c97b5d]' : 'bg-[#0a0a0a] border-[#7d9b7a] text-[#7d9b7a]') : 'bg-transparent border-transparent text-[#555]'}`}
                        >
                          {exp.company}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                  guest@helly-portfolio:~/{activeExp.company.toLowerCase().split(' ')[0]}
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 md:p-8 font-mono text-xs leading-relaxed space-y-6 text-neutral-300 flex-1 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSessionIdx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Header Information block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-6 border-b border-neutral-900">
                      <div>
                        <span className="text-neutral-500 block">ROLE:</span>
                        <span className="text-sm font-bold text-white uppercase">{activeExp.role}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">COMPANY:</span>
                        <span className={`text-sm font-bold uppercase ${activeExp.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>{activeExp.company}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">TENURE:</span>
                        <span className="text-white">{activeExp.period}</span>
                      </div>
                      <div>
                        <span className="text-neutral-500 block">ANALYTICS DOMAIN:</span>
                        <span className={`${activeExp.accent === '#c97b5d' ? 'text-[#7d9b7a]' : 'text-[#c97b5d]'}`}>{activeExp.domain}</span>
                      </div>
                    </div>

                    {/* Commands and outputs simulation */}
                    <div className="space-y-4">
                      <div>
                        <span className={`${activeExp.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>$</span> <span className="text-white font-bold">cat objectives.md</span>
                        <div className="mt-2.5 space-y-3 pl-4 border-l border-neutral-900">
                          {activeExp.bullets.map((bullet, idx) => (
                            <p key={idx} className="text-neutral-400">
                              <span className={`font-bold mr-1 ${activeExp.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>&gt;</span> {bullet}
                            </p>
                          ))}
                        </div>
                      </div>

                      <div>
                        <span className={`${activeExp.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}>$</span> <span className="text-white font-bold">cat tech_stack.json</span>
                        <div className="mt-2.5 pl-4 flex flex-wrap gap-2">
                          {activeExp.stack.map(tech => (
                            <span 
                              key={tech}
                              className="bg-neutral-900 border border-neutral-850 text-[10px] text-neutral-400 px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Simulated Console Footer */}
                <div className="border-t border-neutral-900 pt-6 mt-6 flex items-center justify-between text-[10px] font-mono text-neutral-600">
                  <span className="flex items-center gap-1.5">
                    <Check className={`w-3.5 h-3.5 ${activeExp.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`} />
                    <span>STATUS: {activeExp.status}</span>
                  </span>
                  <span>SYSTEM // ONLINE</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Systematic Academic Node Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between pl-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7d9b7a] flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Academic Achievements
            </span>
            <div className="h-[1px] bg-neutral-800 flex-grow ml-4 mr-4 hidden md:block" />
            <span className="text-[10px] font-mono text-neutral-500">
              {education.length} NODES LOGGED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => {
              const isPursuing = edu.status === 'PURSUING';
              const radius = 22;
              const strokeWidth = 3.5;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (edu.percent / 100) * circumference;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group border border-neutral-900 hover:border-[#7d9b7a]/50 bg-neutral-950/40 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_40px_-12px_rgba(125,155,122,0.08)]"
                >
                  {/* Glowing light trail */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#7d9b7a]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Header info */}
                  <div className="flex items-start justify-between mb-6 gap-3">
                    <span className="text-[10px] font-mono text-neutral-600 block uppercase">
                      Academic Node {edu.id}
                    </span>
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Title and institution */}
                  <h3 className="text-base font-bold text-white group-hover:text-[#7d9b7a] transition-colors mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6 font-medium">
                    {edu.inst}
                  </p>

                  {/* Circle SVG status radial tracker */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-neutral-900/80">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90">
                        {/* Background circle track */}
                        <circle 
                          cx="28" 
                          cy="28" 
                          r={radius} 
                          fill="transparent" 
                          stroke="#2a2c2e" 
                          strokeWidth={strokeWidth} 
                        />
                        {/* Foreground active fill */}
                        <motion.circle 
                          initial={{ strokeDashoffset: circumference }}
                          whileInView={{ strokeDashoffset: offset }}
                          viewport={{ once: false }}
                          transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                          cx="28" 
                          cy="28" 
                          r={radius} 
                          fill="transparent" 
                          stroke={edu.accent} 
                          strokeWidth={strokeWidth} 
                          strokeDasharray={circumference}
                          strokeLinecap="round"
                        />
                      </svg>
                      {/* Center label */}
                      <span className="absolute text-[10px] font-mono text-white font-bold">
                        {edu.percent}%
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[9px] font-mono text-neutral-500 uppercase block tracking-wider">
                        STATUS:
                      </span>
                      <span 
                        className={`text-[10px] font-mono font-bold flex items-center gap-1.5 ${edu.accent === '#c97b5d' ? 'text-[#c97b5d]' : 'text-[#7d9b7a]'}`}
                      >
                        {isPursuing && <span className="w-1.5 h-1.5 rounded-full bg-[#7d9b7a] animate-ping" />}
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed mt-4 italic">
                    {edu.desc}
                  </p>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
