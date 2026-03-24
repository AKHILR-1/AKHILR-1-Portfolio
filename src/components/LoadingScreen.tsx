import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootSequence = [
    'Initializing security protocols...',
    'Loading encryption modules...',
    'Establishing secure connection...',
    'Authenticating credentials...',
    'System ready.',
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % bootSequence.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 blur-3xl bg-cyan-500/30 animate-pulse" />
          <Shield className="relative text-cyan-400 animate-pulse" size={80} />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AKHIL R
          </h1>
          <p className="text-cyan-400 font-mono text-sm">CYBERSECURITY PORTFOLIO</p>
        </div>

        <div className="w-64 mx-auto space-y-2">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-cyan-400 text-xs font-mono">{progress}%</p>
        </div>

        <p className="text-gray-400 text-sm font-mono h-6">{bootSequence[currentMessage]}</p>
      </div>
    </div>
  );
}
