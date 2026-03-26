import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import radioAstronomyImg from '../../Resources/Radio Astronomy Winter School RAWS-2026.jpg';
import cyberJobImg from '../../Resources/Cyber Job Simulation.png';
import ociNetworkingImg from '../../Resources/OCI 2025 Networking Professional.png';
import ociFoundationsImg from '../../Resources/OCI Foundations Associate.png';
import privacySecurityImg from '../../Resources/Privacy and Security in Online Social Media.png';
import computerCommImg from '../../Resources/Computer Communications Specialization.png';
import hardwareOsImg from '../../Resources/Introduction to Hardware and OS.png';
import dsaCppImg from '../../Resources/DSAC++.png';

export default function Certifications() {
  const certifications = [
    {
      title: 'Cyber Job Simulation',
      issuer: 'Deloitte',
      date: '2025',
      image: cyberJobImg,
      verifyUrl: 'https://drive.google.com/file/d/1cv-j66wvVOBQBcItzqcukkyVuAk0y-Mj/view',
    },
    {
      title: 'OCI 2025 Networking Professional',
      issuer: 'Oracle',
      date: '2025',
      image: ociNetworkingImg,
      verifyUrl: 'https://drive.google.com/file/d/1sv2q5lFNvL7kEhdTU7k_Ct-EjzVMN291/view',
    },
    {
      title: 'OCI Foundations Associate',
      issuer: 'Oracle',
      date: '2025',
      image: ociFoundationsImg,
      verifyUrl: 'https://drive.google.com/file/d/14OCBpulgT_OCFjRjSEDE_fI3Tinlydpf/view',
    },
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL',
      date: '2025',
      image: privacySecurityImg,
      verifyUrl: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs79/Course/NPTEL25CS79S14750064004479517.pdf',
    },
    {
      title: 'Computer Communications Specialization',
      issuer: 'Coursera',
      date: '2024',
      image: computerCommImg,
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/912NFSFFWCF8',
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      issuer: 'IBM',
      date: '2024',
      image: hardwareOsImg,
      verifyUrl: 'https://www.coursera.org/account/accomplishments/verify/SZDSLI4PAQG7',
    },
  ];

  const trainings = [
    {
      title: 'C++ Programming OOPs and DSA',
      issuer: 'CSE Pathshala',
      date: "July 2025",
      image: dsaCppImg,
      verifyUrl: 'https://drive.google.com/file/d/1OKZ1WD7KpIY8kc4GAbvnjhl7gBzD0C-8/view?usp=sharing',
      description: 'Completed an intensive summer training program in July 2025 in C++, OOP, and DSA, maintaining full attendance, performing well in all tasks, and successfully clearing the final assessment.',
      skills: 'C++, OOPs concepts, Data Structure and Algorithm, Standard Template Library(STL), VS code, Git version control',
    },
    {
      title: 'Radio Astronomy Winter School RAWS-2026',
      issuer: 'Raman Research Institute',
      date: 'February 2026',
      image: radioAstronomyImg,
      verifyUrl: 'https://drive.google.com/file/d/1Tg-Sj9GeMj6tQc1WfFjBMch_nxri8tWz/view',
      description: 'Successfully completed RAWS 2026 in February 2026 at Gauribidanur Radio Observatory. Explored Cosmology, 21-cm Hydrogen line, Pulsars, Interferometry, Solar Radio observations, X-ray astronomy, and AI/ML applications. Learned from renowned scientists who worked and contributing to prestigious projects like SARAS, PRATUSH, and SKA.',
      skills: 'Radio Astronomy, Cosmology, Interferometry, 21-cm Observations, Pulsar Analysis, Quantum Physics, AI/ML in Astronomy',
    },
  ];

  return (
    <section id="certifications" className="min-h-screen py-10 sm:py-20 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-xs sm:text-sm font-mono mb-4">
            {'<'} CERTIFICATIONS & TRAINING {'>'}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Professional Credentials
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Industry-recognized certifications and specialized training programs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-full h-48 sm:h-60 md:h-80 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-lg overflow-hidden border border-purple-500/30 group-hover:border-purple-500/50 transition-all duration-500">
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm mb-4">
                  <span className="text-purple-400 font-medium">{cert.issuer}</span>
                  <span className="text-gray-500">{cert.date}</span>
                </div>

                <div className="mt-auto">
                  <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-purple-500 rounded-lg text-purple-400 font-medium hover:bg-purple-500/10 transition-all duration-300 w-full justify-center">
                    <ExternalLink size={18} />
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Professional Training
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {trainings.map((training, index) => (
              <div
                key={index}
                className="group relative p-4 sm:p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-blue-500/20 rounded-xl hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-full h-48 sm:h-60 md:h-80 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-lg overflow-hidden border border-blue-500/30 group-hover:border-blue-500/50 transition-all duration-500">
                      <img src={training.image} alt={training.title} className="w-full h-full object-contain" />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {training.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm mb-4">
                    <span className="text-blue-400 font-medium">{training.issuer}</span>
                    <span className="text-gray-500">{training.date}</span>
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm mb-3">{training.description}</p>
                  <p className="text-gray-500 text-xs mb-4"><span className="text-gray-400 font-semibold">Tech:</span> {training.skills}</p>

                  <div className="mt-auto">
                    <a href={training.verifyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-blue-500 rounded-lg text-blue-400 font-medium hover:bg-blue-500/10 transition-all duration-300 w-full justify-center">
                      <ExternalLink size={18} />
                      Verify
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
