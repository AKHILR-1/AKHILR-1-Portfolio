import { Github, ExternalLink } from 'lucide-react';
import malwareAnalyzerImg from '../../Resources/Advanced Malware Permission Analyzer.png';
import cryptoToolkitImg from '../../Resources/Secure Cryptography Toolkit.png';

export default function Projects() {
  const projects = [
    {
      title: 'Advanced Malware Permission Analyzer',
      description: 'A sophisticated desktop security analysis tool that detects malicious Android permission combinations using advanced rule-based heuristics. The system analyzes APK permission patterns to identify potential security threats and malware behavior.',
      tech: ['Java', 'Swing', 'Security Heuristics', 'Pattern Recognition'],
      features: [
        'Real-time permission analysis',
        'Rule-based threat detection',
        'Security risk scoring',
        'Detailed vulnerability reports',
      ],
      image: malwareAnalyzerImg,
      codeUrl: 'https://github.com/AKHILR-1/AdvancedMalwarePermissionAnalyzer',
      demoUrl: null,
      demoLabel: 'Not Available',
    },
    {
      title: 'Secure Cryptography Toolkit',
      description: 'A comprehensive, production-grade cryptographic toolkit featuring AES encryption/decryption, secure hashing algorithms, and cryptographically secure key generation. Built with a modern GUI interface and deployed for real-world applications.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Crypto API', 'CryptoJS'],
      features: [
        'AES-256 encryption/decryption',
        'SHA-256/512 hashing',
        'Secure key generation',
        'User-friendly interface',
      ],
      image: cryptoToolkitImg,
      codeUrl: 'https://github.com/AKHILR-1/Secure-Cryptography-Toolkit',
      demoUrl: 'https://secure-cryptography-tool.netlify.app/',
      demoLabel: 'Live',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs sm:text-sm font-mono mb-4">
            {'<'} SECURITY PROJECTS {'>'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Deployed Solutions
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Production-ready security tools and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-6">
                  <div className="w-full h-48 sm:h-60 md:h-80 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl overflow-hidden border border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-500">
                    <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-xs sm:text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-gray-400 text-xs sm:text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 sm:px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white text-sm sm:text-base font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105">
                    <Github size={16} />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-blue-500 rounded-lg text-blue-400 text-sm sm:text-base font-medium hover:bg-blue-500/10 transition-all duration-300">
                      <ExternalLink size={16} />
                      {project.demoLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
