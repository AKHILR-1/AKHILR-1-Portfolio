import { Shield, Code, Lock, Terminal, Database, Network } from 'lucide-react';

export default function Skills() {
  const languages = ['C', 'C++', 'Java', 'Python', 'Kotlin', 'SQL'];

  const cybersecurityExpertise = [
    'Ethical Hacking & Penetration Testing',
    'Vulnerability Assessment & Risk Analysis',
    'Network Security & System Hardening',
    'Digital Forensics & Incident Response',
    'OSINT & Reconnaissance',
    'OWASP Top 10',
  ];

  const tools = {
    offensive: ['Nmap', 'Metasploit', 'Burp Suite', 'Nikto', 'SQLmap'],
    defensive: ['Wireshark', 'Splunk (Basics)', 'Windows Event Viewer'],
    password: ['Hydra', 'John the Ripper'],
    frameworks: ['OWASP Top 10', 'MITRE ATT&CK', 'NIST Basics'],
  };

  const toolsStack = [
    'Wireshark', 'Nmap', 'Burp Suite', 'Metasploit', 'John the Ripper',
    'Recon-ng', 'Active Directory', 'VS Code', 'FTK Imager', 'Autopsy',
    'Android Studio', 'Shodan', 'Git',
  ];

  const softSkills = [
    'Ethical Responsibility',
    'Communication',
    'Time Management',
    'Attention to Detail',
  ];

  return (
    <section id="skills" className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm font-mono mb-4">
            {'<'} SKILLS MATRIX {'>'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            A comprehensive suite of cybersecurity expertise and technical proficiencies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          <div className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-500 hover:scale-105 transform animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                <Code className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-sm hover:bg-cyan-500/30 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border-2 border-blue-500/30 rounded-xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 transform animate-fadeIn" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Shield className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">Offensive Tools</h3>
            </div>
            <div className="space-y-2">
              {tools.offensive.map((tool, i) => (
                <div key={i} className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="text-gray-300 text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-green-500/20 rounded-xl hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Lock className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Defensive Tools</h3>
            </div>
            <div className="space-y-2">
              {tools.defensive.map((tool, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-gray-300 text-sm">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Cybersecurity Expertise</h3>
            </div>
            <div className="space-y-3">
              {cybersecurityExpertise.map((skill, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Frameworks & Standards</h3>
            </div>
            <div className="space-y-4">
              {tools.frameworks.map((framework, i) => (
                <div
                  key={i}
                  className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <span className="text-cyan-300 font-medium">{framework}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Network className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Tools Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {toolsStack.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg text-cyan-300 text-sm hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-purple-500/20 rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center hover:border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300"
                >
                  <span className="text-purple-300 text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
