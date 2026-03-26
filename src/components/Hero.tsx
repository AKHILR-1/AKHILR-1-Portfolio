import { Download, Mail } from 'lucide-react';
import { useState } from 'react';
import meImage from '../../Resources/this.png';
import specializedCV from '../../Resources/AKHIL R_SPECIALIZED_CV.pdf';
import generalCV from '../../Resources/AKHIL R_GENERAL_CV.pdf';

export default function Hero() {
  const [showResumeMenu, setShowResumeMenu] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-10 relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="relative group w-60 h-60 sm:w-80 h-80 md:w-96 h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50">
              <img src={meImage} alt="Akhil R" className="w-full h-full object-contain bg-gradient-to-br from-cyan-900/40 to-purple-900/40" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-ping" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4 animate-fadeIn">
            <div className="text-cyan-400 text-sm font-mono tracking-wider uppercase animate-neon-glow">
              {'>'} Cybersecurity Professional
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight font-orbitron">
              AKHIL R
            </h1>
            <div className="text-sm sm:text-lg text-cyan-300 font-light tracking-wide inline-block border-l-2 border-cyan-500 pl-4 animate-slideIn">
              Cybersecurity Analyst | Security Architect | Ethical Hacker | Digital Forensics Specialist
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-8 mb-8 animate-border-glow" />

          <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-center md:text-justify animate-fadeIn font-script tracking-wider" style={{fontStyle: 'italic'}}>
            B.Tech CSE student specializing in Cybersecurity. Expertise in ethical hacking, digital forensics, and security analysis. Oracle Cloud Infrastructure 2025 Certified Networking Professional.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-4">
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowResumeMenu(!showResumeMenu)}
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-2">
                  <Download size={16} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Resume</span>
                </span>
              </button>

              {showResumeMenu && (
                <div className="absolute left-0 sm:left-full top-full sm:top-0 ml-0 sm:ml-3 mt-2 sm:mt-0 w-full sm:w-64 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden animate-fadeIn z-50">
                  <a
                    href={specializedCV}
                    download="AKHIL-R-SPECIALIZED-CV.pdf"
                    onClick={() => setShowResumeMenu(false)}
                    className="w-full px-6 py-4 text-left text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3 border-b border-cyan-500/20 block"
                  >
                    <Download size={16} />
                    Specialized CV
                  </a>
                  <a
                    href={generalCV}
                    download="AKHIL-R-GENERAL-CV.pdf"
                    onClick={() => setShowResumeMenu(false)}
                    className="w-full px-6 py-4 text-left text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center gap-3 block"
                  >
                    <Download size={16} />
                    General CV
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={scrollToContact}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 rounded-lg font-semibold text-cyan-400 overflow-hidden transition-all duration-300 hover:text-white hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <div className="absolute inset-0 bg-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="relative flex items-center justify-center gap-2">
                <Mail size={16} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Contact</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
