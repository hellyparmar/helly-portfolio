import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Mail, Linkedin, Github, MapPin, Phone, Terminal, Shield } from 'lucide-react';

const contactLinks = [
  { label: 'Email', value: 'hellyparmar306@gmail.com', href: 'mailto:hellyparmar306@gmail.com', icon: Mail, tag: 'DIRECT_MAIL' },
  { label: 'LinkedIn', value: 'Helly Parmar', href: 'https://www.linkedin.com/in/helly-parmar-b17800273', icon: Linkedin, tag: 'PROFESSIONAL_NET' },
  { label: 'GitHub', value: 'hellyparmar', href: 'https://github.com/hellyparmar', icon: Github, tag: 'SOURCE_REPOS' },
  { label: 'Location', value: 'Ahmedabad, India', href: null, icon: MapPin, tag: 'GEOLOCATION' },
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [activeInput, setActiveInput] = useState<string | null>(null);
  
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.1 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) throw new Error('Failed to send');

      setStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-dark pb-16 section-overflow">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div
          ref={titleRef}
          className="pt-16 pb-12 mb-12 section-divider"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
                       animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.7 }}
          >
            <span className="label-terra">Secure Link</span>
            <h2 className="heading-gradient">
              Let's<br />Talk.
            </h2>
          </motion.div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Connection Logs / Link Hub */}
          <div className="lg:col-span-5 space-y-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isTitleInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'rgba(229,224,219,0.5)',
              }}
            >
              I am open to discussions regarding big data analytics partnerships, machine learning development, data-driven visualizations, or other spatial computing tasks. Let's build something significant.
            </motion.p>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#c97b5d] pl-1">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-mono uppercase tracking-widest">
                  Active Secure Endpoints
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {contactLinks.map(({ label, value, href, icon: LinkIcon, tag }, i) => {
                  const hasHref = href !== null;
                  const CardComponent = hasHref ? 'a' : 'div';

                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 15 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                      className="group relative"
                    >
                      <CardComponent
                        href={href || undefined}
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center justify-between p-4 rounded-xl border bg-neutral-950/40 backdrop-blur-sm transition-all duration-500 hover:border-[#c97b5d]/40 hover:-translate-y-1 hover:bg-neutral-900/30 hover:shadow-[0_8px_30px_rgba(201,123,93,0.08)] ${hasHref ? 'cursor-pointer block' : 'cursor-default block'}`}
                        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 group-hover:text-[#c97b5d] group-hover:border-[#c97b5d]/30 transition-all duration-500">
                            <LinkIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-neutral-600 block tracking-wider uppercase">
                              [{tag}]
                            </span>
                            
                            {hasHref ? (
                              <span className="text-sm text-neutral-300 font-bold group-hover:text-[#c97b5d] transition-colors duration-500 flex items-center gap-1 mt-0.5">
                                {value}
                                <ArrowUpRight className="w-3 h-3 text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              </span>
                            ) : (
                              <span className="text-sm text-neutral-300 font-bold block mt-0.5 group-hover:text-[#c97b5d] transition-colors duration-500">
                                {value}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Ping indicators showing connectivity */}
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono text-neutral-600 tracking-wider hidden sm:inline">
                            SECURE
                          </span>
                          <div className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c97b5d] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c97b5d]"></span>
                          </div>
                        </div>
                      </CardComponent>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Transmission Gate Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: 20 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="border border-neutral-800 bg-neutral-950/60 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-6 hover:border-[#c97b5d]/15 hover:shadow-[0_0_40px_-15px_rgba(201,123,93,0.05)] transition-all duration-500">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
                <div className="flex items-center gap-2 text-[#7d9b7a]">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">
                    Send a Message
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500">
                  <Shield className="w-3.5 h-3.5 text-neutral-600" />
                  <span>Secure</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                        Your Name
                      </label>

                    </div>
                    <input
                      name="name"
                      required
                      placeholder="Input name..."
                      onFocus={() => setActiveInput('name')}
                      onBlur={() => setActiveInput(null)}
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-[#c97b5d] focus:ring-1 focus:ring-[#c97b5d]/40 outline-none text-sm text-neutral-200 px-4 py-3 rounded-xl transition-all duration-300 font-mono"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-baseline">
                      <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                        Your Email
                      </label>

                    </div>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="Input email..."
                      onFocus={() => setActiveInput('email')}
                      onBlur={() => setActiveInput(null)}
                      className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-[#c97b5d] focus:ring-1 focus:ring-[#c97b5d]/40 outline-none text-sm text-neutral-200 px-4 py-3 rounded-xl transition-all duration-300 font-mono"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                      Subject
                    </label>

                  </div>
                  <input
                    name="subject"
                    required
                    placeholder="Input topic..."
                    onFocus={() => setActiveInput('subject')}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-[#c97b5d] focus:ring-1 focus:ring-[#c97b5d]/40 outline-none text-sm text-neutral-200 px-4 py-3 rounded-xl transition-all duration-300 font-mono"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                      Message
                    </label>

                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Provide message details..."
                    onFocus={() => setActiveInput('message')}
                    onBlur={() => setActiveInput(null)}
                    className="w-full bg-neutral-900/60 border border-neutral-800 focus:border-[#c97b5d] focus:ring-1 focus:ring-[#c97b5d]/40 outline-none text-sm text-neutral-200 px-4 py-3 rounded-xl transition-all duration-300 font-mono resize-none"
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all duration-500 relative overflow-hidden ${
                    status === 'success' ? 'submit-btn-success'
                    : status === 'error' ? 'submit-btn-error'
                    : status === 'loading' ? 'submit-btn-loading'
                    : 'submit-btn-idle'
                  }`}
                >
                  {status === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4.5 h-4.5" />
                      Message Sent Successfully
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="w-4.5 h-4.5" />
                      Message Failed — Retry
                    </>
                  ) : status === 'loading' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
