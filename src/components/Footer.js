import { socials } from '@/data/socials';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 md:mt-0 py-12 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Text */}
          <div className="text-gray-400">
            © {currentYear}{' '}
            <span className="text-white font-semibold">Vivek Singh</span>.  
            Built with MERN Stack 💻 & lots of ☕.
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">
            {socials.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors hoverable"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors hoverable">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors hoverable">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors hoverable">
              Sitemap
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
