import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Branding */}
          <div>
            <div className="footer-logo">
              Helly <span className="text-terra">Parmar</span>
            </div>

          </div>

          {/* Social + back to top */}
          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: 'https://github.com/hellyparmar', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/helly-parmar-b17800273', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:hellyparmar306@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 border footer-social-link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center w-9 h-9 footer-btn-top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
