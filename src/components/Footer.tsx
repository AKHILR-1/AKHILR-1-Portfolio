export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            AKHIL R
          </div>

          <p className="text-gray-400 text-sm">
            Cybersecurity Professional | Ethical Hacker | Digital Forensics Specialist
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-6" />

          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Akhil R. Designed and developed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
