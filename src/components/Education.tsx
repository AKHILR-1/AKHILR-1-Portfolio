import { GraduationCap, BookOpen, Code } from 'lucide-react';

export default function Education() {
  return (
    <section id="about" className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs sm:text-sm font-mono mb-4">
            {'<'} EDUCATION {'>'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Academic Background
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Specialized training in computer science and cybersecurity
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="group relative p-6 sm:p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-cyan-500/20 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="p-4 bg-cyan-500/20 rounded-xl border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <GraduationCap className="text-cyan-400" size={40} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    Lovely Professional University
                  </h3>
                  <p className="text-lg sm:text-xl text-cyan-400 mb-1">
                    B.Tech Computer Science and Engineering
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Punjab, India
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-cyan-400" size={24} />
                    <h4 className="text-lg font-bold text-white">Engineering Minor</h4>
                  </div>
                  <p className="text-cyan-300 font-semibold mb-2">Cybersecurity</p>
                  <p className="text-gray-400 text-sm">
                    Specialized coursework in ethical hacking, network security, digital forensics,
                    and advanced threat analysis
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/20 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="text-blue-400" size={24} />
                    <h4 className="text-lg font-bold text-white">Open Minor</h4>
                  </div>
                  <p className="text-blue-300 font-semibold mb-2">Android App Development</p>
                  <p className="text-gray-400 text-sm">
                    Comprehensive training in mobile application development, Kotlin programming,
                    and security-focused app design
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20 rounded-xl">
                <h4 className="text-lg font-bold text-white mb-3">Key Focus Areas</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    'Ethical Hacking',
                    'Digital Forensics',
                    'Network Security',
                    'System Vulnerabilities',
                    'Risk Assessment',
                    'Incident Response',
                  ].map((area, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <span className="text-gray-300 text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
