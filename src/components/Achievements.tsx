import { Trophy, Medal, Star, Target } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: 'OCI Certified Networking Professional',
      description: 'Oracle Cloud Infrastructure 2025 Networking Professional certification',
      color: 'cyan',
    },
    {
      icon: Medal,
      title: 'Privacy and Security Certification',
      description: 'NPTEL certification in Privacy and Security in Online Social Media',
      color: 'blue',
    },
    {
      icon: Star,
      title: "NCC 'B' Certificate Holder",
      description: 'National Cadet Corps B Certificate demonstrating leadership and discipline',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'National-Level Karate Athlete',
      description: 'Competitive athlete with national-level participation in martial arts',
      color: 'green',
    },
    {
      icon: Trophy,
      title: 'SGFI State Participant',
      description: 'State-level participation in Karate, Chess, and Badminton',
      color: 'pink',
    },
    {
      icon: Medal,
      title: 'Asia & India Book of Records',
      description: 'Record holder for Mass Roll Ball Participation event',
      color: 'yellow',
    },
  ];

  const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
    cyan: {
      border: 'border-cyan-500/20 hover:border-cyan-500/50',
      bg: 'from-cyan-500/10 to-blue-500/10',
      text: 'text-cyan-400',
      glow: 'hover:shadow-cyan-500/20',
    },
    blue: {
      border: 'border-blue-500/20 hover:border-blue-500/50',
      bg: 'from-blue-500/10 to-purple-500/10',
      text: 'text-blue-400',
      glow: 'hover:shadow-blue-500/20',
    },
    purple: {
      border: 'border-purple-500/20 hover:border-purple-500/50',
      bg: 'from-purple-500/10 to-pink-500/10',
      text: 'text-purple-400',
      glow: 'hover:shadow-purple-500/20',
    },
    green: {
      border: 'border-green-500/20 hover:border-green-500/50',
      bg: 'from-green-500/10 to-cyan-500/10',
      text: 'text-green-400',
      glow: 'hover:shadow-green-500/20',
    },
    pink: {
      border: 'border-pink-500/20 hover:border-pink-500/50',
      bg: 'from-pink-500/10 to-purple-500/10',
      text: 'text-pink-400',
      glow: 'hover:shadow-pink-500/20',
    },
    yellow: {
      border: 'border-yellow-500/20 hover:border-yellow-500/50',
      bg: 'from-yellow-500/10 to-orange-500/10',
      text: 'text-yellow-400',
      glow: 'hover:shadow-yellow-500/20',
    },
  };

  return (
    <section id="achievements" className="min-h-screen py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-mono mb-4">
            {'<'} ACHIEVEMENTS {'>'}
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent mb-4">
            Recognition & Awards
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications, awards, and notable accomplishments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colors = colorMap[achievement.color];
            const Icon = achievement.icon;

            return (
              <div
                key={index}
                className={`group relative p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border ${colors.border} rounded-xl transition-all duration-500 hover:shadow-xl ${colors.glow} hover:-translate-y-1`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="mb-4">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={colors.text} size={32} />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors duration-300`}>
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
