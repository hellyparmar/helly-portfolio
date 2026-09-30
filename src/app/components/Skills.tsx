import { motion, AnimatePresence, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Code2, Database, BarChart3, Brain, Cpu, Layers, Award } from 'lucide-react';

const skillGroups = [
  {
    id: '01',
    label: 'Programming & Languages',
    icon: Code2,
    accent: '#c97b5d',
    description: 'Core languages and libraries for data manipulation, statistical computing, and analytical scripting.',
    items: [
      { name: 'Python', level: '95%', tag: 'Pandas, NumPy, Scikit-Learn, CausalML, LangChain' },
      { name: 'SQL', level: '98%', tag: 'Relational queries, database joins, data aggregation' },
      { name: 'R', level: '85%', tag: 'Statistical computing, panel ARDL, cointegration analysis' },
      { name: 'Excel', level: '92%', tag: 'Advanced modeling, pivot tables, statistical tools, VBA' },
    ],
  },
  {
    id: '02',
    label: 'ML & AI Systems',
    icon: Brain,
    accent: '#7d9b7a',
    description: 'Advanced machine learning systems, natural language pipelines, and modern Generative AI architectures.',
    items: [
      { name: 'LLMs & RAG Pipelines', level: '90%', tag: 'LangChain, Retrieval-Augmented Generation, vector embeddings' },
      { name: 'Natural Language Processing (NLP)', level: '88%', tag: 'Priority detection, task deadline extraction, text parsing' },
      { name: 'Predictive Modeling', level: '92%', tag: 'Supervised classification, regression & demand forecasting' },
      { name: 'AI Pipeline Engineering', level: '85%', tag: 'Ingestion pipelines, structured output parsing, context awareness' },
    ],
  },
  {
    id: '03',
    label: 'Statistics & Causal Inference',
    icon: Database,
    accent: '#c97b5d',
    description: 'Rigorous mathematical frameworks to evaluate campaign efficacy and validate long-term economic relationships.',
    items: [
      { name: 'Causal Inference & Uplift', level: '92%', tag: 'Uplift modeling, meta-learners (S, T, X-learners), CausalML' },
      { name: 'Panel Econometrics', level: '88%', tag: 'POLS, Fixed & Random Effects, Panel ARDL, Kao cointegration' },
      { name: 'Model Interpretability (SHAP)', level: '86%', tag: 'Shapley additive explanations, feature attribution' },
      { name: 'Causal Evaluation Metrics', level: '90%', tag: 'Qini curves, Area Under Uplift Curve (AUUC) calculations' },
    ],
  },
  {
    id: '04',
    label: 'Data Visualization & BI',
    icon: BarChart3,
    accent: '#7d9b7a',
    description: 'Translating complex model outputs into high-fidelity interactive visual dashboards and reporting systems.',
    items: [
      { name: 'Analytical Dashboards', level: '90%', tag: 'Decision support interfaces, meeting outcome visualizers' },
      { name: 'Tableau', level: '92%', tag: 'Interactive analytical stories & enterprise dashboards' },
      { name: 'Matplotlib & Seaborn', level: '94%', tag: 'Custom statistical graphing, Qini curves & ROC plots' },
      { name: 'Power BI', level: '85%', tag: 'Business intelligence metrics & relational reports' },
    ],
  },
];

const additionalSkills = [
  'Big Data Analytics',
  'Vector Databases (RAG)',
  'Causal Machine Learning',
  'Shapley Feature Impact',
  'Meeting Priority Extraction',
  'Co-integration Testing',
  'Uplift Segmentation Strategy',
  'Data Wrangling',
];

export function Skills() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const titleRef = useRef(null);
  const extraRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });
  const isExtraInView = useInView(extraRef, { once: false, amount: 0.3 });

  const activeGroup = skillGroups[activeGroupIndex];
  const ActiveIcon = activeGroup.icon;

  return (
    <section id="skills" className="section-dark section-pb section-overflow">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          ref={titleRef}
          className="flex flex-col pt-16 pb-12 mb-12 section-divider"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-sage">Technical Arsenal</span>
            <h2 className="heading-gradient-skills">
              Skills & Systems
            </h2>
          </motion.div>
        </div>

        {/* Dashboard grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Domain Switcher Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 mb-4 px-2 text-[#c97b5d]">
              <Cpu className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Select Analytical Domain
              </span>
            </div>
            {skillGroups.map((group, idx) => {
              const GroupIcon = group.icon;
              const isSelected = activeGroupIndex === idx;

              return (
                <button
                  key={group.id}
                  onClick={() => setActiveGroupIndex(idx)}
                  className={`w-full text-left flex items-center justify-between p-5 rounded-xl border transition-all duration-500 group hover:shadow-[0_0_30px_-10px_rgba(201,123,93,0.06)] skill-tab ${isSelected ? 'is-selected' : ''} ${group.accent === '#c97b5d' ? 'accent-terra' : 'accent-sage'}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-mono transition-opacity skill-tab-id ${isSelected ? 'is-selected' : ''} ${group.accent === '#c97b5d' ? 'accent-terra' : 'accent-sage'}`}
                    >
                      {group.id}
                    </span>
                    <div
                      className={`p-2.5 rounded-lg border bg-neutral-950 transition-colors skill-tab-icon-box ${isSelected ? 'is-selected' : ''} ${group.accent === '#c97b5d' ? 'accent-terra' : 'accent-sage'}`}
                    >
                      <GroupIcon
                        className={`w-5 h-5 transition-transform group-hover:scale-110 ${isSelected ? (group.accent === '#c97b5d' ? 'skill-icon-terra' : 'skill-icon-sage') : 'skill-icon-default'}`}
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold block text-white tracking-wide">
                        {group.label}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {group.items.length} Modules
                      </span>
                    </div>
                  </div>

                  {/* indicator bullet */}
                    <motion.div
                      animate={{ scale: isSelected ? 1.2 : 0.8 }}
                      className={`w-2 h-2 rounded-full skill-bullet ${isSelected ? 'is-selected' : ''} ${group.accent === '#c97b5d' ? 'accent-terra' : 'accent-sage'}`}
                    />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Module Dashboard */}
          <div className="lg:col-span-8 border border-neutral-800 bg-neutral-950/20 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full hover:border-[#c97b5d]/15 hover:shadow-[0_0_40px_-15px_rgba(201,123,93,0.05)] transition-all duration-500">
            <div>
              {/* Header inside display card */}
              <div className="flex items-start justify-between border-b border-neutral-800 pb-6 mb-8 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ActiveIcon className={`w-4 h-4 ${activeGroup.accent === '#c97b5d' ? 'skill-icon-terra' : 'skill-icon-sage'}`} />
                    <span className={`text-xs font-mono uppercase tracking-widest ${activeGroup.accent === '#c97b5d' ? 'skill-header-terra' : 'skill-header-sage'}`}>
                      {activeGroup.label} Dashboard
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 max-w-xl">
                    {activeGroup.description}
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-neutral-600 hidden md:block">
                  SYSTEM_STATUS: <span className="text-[#c97b5d] animate-pulse">ACTIVE</span>
                </div>
              </div>

              {/* Dynamic animated list of skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeGroupIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {activeGroup.items.map((skill, i) => (
                      <div key={skill.name} className="space-y-2 group">
                        <div className="flex justify-between items-baseline">
                          <span className="text-sm font-bold text-neutral-100 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-xs font-mono text-neutral-500 ${activeGroup.accent === '#c97b5d' ? 'skill-level-terra' : 'skill-level-sage'}`}>
                            {skill.level}
                          </span>
                        </div>

                        {/* Premium dynamic meter bar */}
                        <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden relative border border-neutral-800/50">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: skill.level }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${activeGroup.accent}dd, ${activeGroup.accent})`,
                              boxShadow: `0 0 8px ${activeGroup.accent}`
                            }}
                          />
                        </div>

                        <p className="text-[11px] text-neutral-500 italic">
                          {skill.tag}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

        {/* Additional skills ticker tags */}
        <motion.div
          ref={extraRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isExtraInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-[rgba(255,255,255,0.08)] pt-10"
        >
          <div className="flex items-center gap-2 text-[#c97b5d] mb-6">
            <Layers className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest">
              Additional Expert Competencies
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {additionalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isExtraInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group cursor-default text-[11px] font-mono tracking-wider uppercase px-4 py-2.5 rounded-lg border transition-all duration-300"
                style={{
                  color: 'rgba(229,224,219,0.5)',
                  borderColor: 'rgba(255,255,255,0.05)',
                  backgroundColor: 'rgba(255,255,255,0.01)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.color = '#c97b5d';
                  el.style.borderColor = 'rgba(201,123,93,0.3)';
                  el.style.backgroundColor = 'rgba(201,123,93,0.03)';
                  el.style.boxShadow = '0 0 12px rgba(201,123,93,0.05)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLSpanElement;
                  el.style.color = 'rgba(229,224,219,0.5)';
                  el.style.borderColor = 'rgba(255,255,255,0.05)';
                  el.style.backgroundColor = 'rgba(255,255,255,0.01)';
                  el.style.boxShadow = 'none';
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isExtraInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 pt-8"
          >
            <div className="flex items-center gap-2 mb-5 text-[#c97b5d]">
              <Award className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">
                Certifications
              </span>
              <div className="h-px flex-grow ml-2 cert-divider" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { title: 'Artificial Intelligence Fundamentals', issuer: 'IBM SkillsBuild', year: '2026' },
                { title: 'RAG for Enhanced AI Outputs', issuer: 'IBM SkillsBuild', year: '2026' },
                { title: 'Data Science Foundations — Level 1', issuer: 'IBM', year: '2026' },
              ].map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isExtraInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="border rounded-xl p-4 transition-all duration-300 cursor-default"
                  style={{ borderColor: 'rgba(255,255,255,0.06)', backgroundColor: 'rgba(255,255,255,0.01)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(201,123,93,0.3)';
                    el.style.backgroundColor = 'rgba(201,123,93,0.03)';
                    el.style.boxShadow = '0 0 12px rgba(201,123,93,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.backgroundColor = 'rgba(255,255,255,0.01)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <span className="text-[11px] font-mono text-[#c97b5d] block mb-1">{cert.year}</span>
                  <span className="text-sm text-[#e5e0db] font-bold block leading-snug">{cert.title}</span>
                  <span className="text-[10px] font-mono text-[rgba(229,224,219,0.4)] mt-1 block">{cert.issuer}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
